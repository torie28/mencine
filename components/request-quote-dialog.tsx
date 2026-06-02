"use client";

import { useMemo, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Send, CheckCircle2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const wasteOptions = [
  { value: "general-industrial", label: "General / industrial waste" },
  { value: "medical", label: "Medical waste" },
  { value: "hazardous", label: "Hazardous waste" },
  // { value: "site", label: "Site waste" },
];

const operationOptions = [
  { value: "small", label: "Small (<2kg)" },
  { value: "medium", label: "Medium (50-200kg)" },
  { value: "large", label: "Large (200-300kg)" },
  // { value: "major", label: "Major (500+)" },
];

const formSchema = z.object({
  selectedWaste: z.string().min(1, "Please select a waste type"),
  operationSize: z.string().min(1, "Please select an operation size"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  country: z.string().min(2, "Country is required"),
  details: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

type Step = 1 | 2 | 3;

export function RequestQuoteDialog() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [selectedWaste, setSelectedWaste] = useState("");
  const [operationSize, setOperationSize] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Automatically close dialog after success
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsClosing(true);
        setTimeout(() => {
          setOpen(false);
          // Small delay to reset state after animation completes
          setTimeout(() => {
            resetDialog();
            setIsClosing(false);
          }, 300);
        }, 500); // Animation duration
      }, 4000); // How long the success message stays

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedWaste: "",
      operationSize: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      country: "",
      details: "",
    },
  });

  const recommendationSummary = useMemo(() => {
    const wasteLabel =
      wasteOptions.find((option) => option.value === selectedWaste)?.label ||
      "";

    const sizeLabel =
      operationOptions.find((option) => option.value === operationSize)
        ?.label || "";

    return {
      wasteLabel,
      sizeLabel,
    };
  }, [selectedWaste, operationSize]);

  const resetDialog = () => {
    setStep(1);
    setSelectedWaste("");
    setOperationSize("");
    form.reset();
    setIsSubmitting(false);
    setIsSubmitted(false);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (!nextOpen) {
      resetDialog();
    }
  };

  const selectWaste = (value: string) => {
    setSelectedWaste(value);
    form.setValue("selectedWaste", value, { shouldValidate: true });
  };

  const selectOperationSize = (value: string) => {
    setOperationSize(value);
    form.setValue("operationSize", value, { shouldValidate: true });
  };

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    // Prepare the data with labels instead of values for better readability in the email
    const dataToSend = {
      ...values,
      selectedWaste: recommendationSummary.wasteLabel,
      operationSize: recommendationSummary.sizeLabel,
      submission_date: new Date().toLocaleString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    console.log("Submitting Request Quote:", dataToSend);

    try {
      // Resolve endpoint: when NEXT_PUBLIC_BACKEND_URL is set, use it
      // (useful for production where backend runs on a different host).
      const backendBase = process.env.NEXT_PUBLIC_BACKEND_URL || "";
      const endpoint = backendBase
        ? `${backendBase.replace(/\/+$/g, "")}/api/request-quote`
        : "/api/request-quote";

      // Submit to the backend API
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const errorMsg =
          result?.message ||
          result?.error ||
          `Server error: ${response.status} ${response.statusText}`;
        throw new Error(errorMsg);
      }

      setIsSubmitted(true);
      toast.success("Inquiry submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
        >
          Request a Quote
          <ArrowRight className="w-4 h-4" />
        </Button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className={`
          top-auto bottom-3 left-1/2 w-[calc(90%-1rem)] max-w-none
          translate-x-[-50%] translate-y-0
          max-h-[calc(100vh-1.5rem)] overflow-y-auto
          rounded-[28px] border-border p-0 shadow-2xl
          sm:top-[50%] sm:bottom-auto sm:w-full sm:max-w-[560px]
          sm:translate-x-[-50%] sm:translate-y-[-50%] sm:overflow-hidden
          transition-all duration-500 ease-in-out
          ${isClosing ? "opacity-0 scale-95 translate-y-4 sm:translate-y-[-45%]" : "opacity-100 scale-100"}
        `}
      >
        <div className="p-5 sm:p-6">
          {isSubmitted ? (
            <div className="py-8 text-center animate-in fade-in zoom-in duration-500">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 animate-bounce">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>

              <h3 className="font-display text-3xl font-bold text-foreground">
                Request received
              </h3>

              <p className="mt-4 text-base text-muted-foreground max-w-[300px] mx-auto">
                Thanks. Our team will review your waste profile and reach out
                with the right recommendation.
              </p>

              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2 text-sm text-primary font-medium animate-pulse">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Processing your inquiry...
                </div>
              </div>

              <Button
                variant="ghost"
                className="mt-6 text-muted-foreground hover:text-foreground"
                onClick={() => handleOpenChange(false)}
              >
                Close Now
              </Button>
            </div>
          ) : (
            <>
              {(step === 1 || step === 2) && (
                <>
                  <DialogHeader className="mb-6 text-left">
                    <DialogTitle className="font-display text-[1.9rem] font-bold leading-tight text-foreground">
                      Which incinerator does my site need?
                    </DialogTitle>
                    <DialogDescription className="text-sm leading-6 text-muted-foreground">
                      Let us know your waste type and operation size for a
                      recommendation.
                    </DialogDescription>
                  </DialogHeader>

                  {step === 1 && (
                    <>
                      <p className="mb-3 text-sm font-semibold text-foreground">
                        What type of waste does your site generate?
                      </p>

                      <div className="space-y-3">
                        {wasteOptions.map((option) => {
                          const checked = selectedWaste === option.value;

                          return (
                            <div
                              key={option.value}
                              role="button"
                              tabIndex={0}
                              onClick={() => selectWaste(option.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  selectWaste(option.value);
                                }
                              }}
                              className={`flex w-full cursor-pointer items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-colors ${
                                checked
                                  ? "border-primary bg-primary/5 ring-1 ring-primary/15"
                                  : "border-border bg-background hover:border-primary/30"
                              }`}
                            >
                              <Checkbox
                                checked={checked}
                                className="pointer-events-none"
                                aria-hidden="true"
                              />
                              <span className="text-sm font-medium text-foreground">
                                {option.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      <Button
                        className="mt-5 h-11 w-full rounded-xl font-semibold"
                        onClick={() => setStep(2)}
                        disabled={!selectedWaste}
                      >
                        Next
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <p className="mb-3 text-sm font-semibold text-foreground">
                        How large is your operation per one cycle?
                      </p>

                      <div className="space-y-3">
                        {operationOptions.map((option) => {
                          const checked = operationSize === option.value;

                          return (
                            <div
                              key={option.value}
                              role="button"
                              tabIndex={0}
                              onClick={() => selectOperationSize(option.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  selectOperationSize(option.value);
                                }
                              }}
                              className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-colors cursor-pointer ${
                                checked
                                  ? "border-primary bg-primary/5 ring-1 ring-primary/15"
                                  : "border-border bg-background hover:border-primary/30"
                              }`}
                            >
                              <Checkbox
                                checked={checked}
                                className="pointer-events-none"
                                aria-hidden="true"
                              />
                              <span className="text-sm font-medium text-foreground">
                                {option.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-5 grid grid-cols-[1fr_1.8fr] gap-3">
                        <Button
                          type="button"
                          variant="secondary"
                          className="h-11 rounded-xl"
                          onClick={() => setStep(1)}
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Back
                        </Button>

                        <Button
                          type="button"
                          className="h-11 rounded-xl font-semibold"
                          onClick={() => setStep(3)}
                          disabled={!operationSize}
                        >
                          See Recommendation
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </>
                  )}
                </>
              )}

              {step === 3 && (
                <>
                  <DialogHeader className="mb-5 text-left">
                    <DialogTitle className="font-display text-2xl font-bold text-foreground">
                      Discuss this recommendation
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground">
                      Our specialists will help configure the right system.
                    </DialogDescription>
                  </DialogHeader>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-3"
                    >
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="First Name"
                                  className="h-11 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Last Name"
                                  className="h-11 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="WhatsApp or Phone Number"
                                  className="h-11 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="Email Address"
                                  className="h-11 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Country"
                                className="h-11 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="details"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                rows={4}
                                placeholder="Anything we should know about your waste challenges? (Optional)"
                                className="min-h-[120px] rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="h-11 w-full rounded-xl font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
