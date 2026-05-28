"use client"

import { useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const wasteOptions = [
  { value: "general-industrial", label: "General / industrial waste" },
  { value: "medical", label: "Medical waste" },
  { value: "hazardous", label: "Hazardous waste" },
  // { value: "site", label: "Site waste" },
]

const operationOptions = [
  { value: "small", label: "Small (<50 people)" },
  { value: "medium", label: "Medium (50-200)" },
  { value: "large", label: "Large (200-500)" },
  { value: "major", label: "Major (500+)" },
]

const initialFormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  country: "",
  details: "",
}

type Step = 1 | 2 | 3

export function RequestQuoteDialog() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>(1)
  const [selectedWaste, setSelectedWaste] = useState("")
  const [operationSize, setOperationSize] = useState("")
  const [formState, setFormState] = useState(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const recommendationSummary = useMemo(() => {
    const wasteLabel =
      wasteOptions.find((option) => option.value === selectedWaste)?.label || ""
  
    const sizeLabel =
      operationOptions.find((option) => option.value === operationSize)?.label ||
      ""
  
    return {
      wasteLabel,
      sizeLabel,
    }
  }, [selectedWaste, operationSize])


  const resetDialog = () => {
    setStep(1)
    setSelectedWaste("")
    setOperationSize("")
    setFormState(initialFormState)
    setIsSubmitting(false)
    setIsSubmitted(false)
  }

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen)

    if (!nextOpen) {
      resetDialog()
    }
  }

  const selectWaste = (value: string) => {
    setSelectedWaste(value)
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Placeholder submission to match the current contact page behavior.
    // Replace with real API/email handling when you're ready.
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
        className="
          top-auto bottom-3 left-1/2 w-[calc(90%-1rem)] max-w-none
          translate-x-[-50%] translate-y-0
          max-h-[calc(100vh-1.5rem)] overflow-y-auto
          rounded-[28px] border-border p-0 shadow-2xl
          sm:top-[50%] sm:bottom-auto sm:w-full sm:max-w-[560px]
          sm:translate-x-[-50%] sm:translate-y-[-50%] sm:overflow-hidden
        "
      >

        <div className="p-5 sm:p-6">
          {isSubmitted ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Send className="h-7 w-7 text-primary" />
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground">
                Request received
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Thanks. Our team will review your waste profile and reach out
                with the right recommendation.
              </p>

              <Button
                className="mt-6 h-11 w-full rounded-xl"
                onClick={() => handleOpenChange(false)}
              >
                Close
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
                          const checked = selectedWaste === option.value
                      
                          return (
                            <div
                              key={option.value}
                              role="button"
                              tabIndex={0}
                              onClick={() => selectWaste(option.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault()
                                  selectWaste(option.value)
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
                          )
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
                        How large is your operation?
                      </p>

                      <div className="space-y-3">
                        {operationOptions.map((option) => {
                          const checked = operationSize === option.value
                      
                          return (
                            <div
                              key={option.value}
                              role="button"
                              tabIndex={0}
                              onClick={() => setOperationSize(option.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault()
                                  setOperationSize(option.value)
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
                          )
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

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="hidden"
                      name="selectedWaste"
                      value={recommendationSummary.wasteLabel}
                    />
                    <input
                      type="hidden"
                      name="operationSize"
                      value={recommendationSummary.sizeLabel}
                    />

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <Input
                        required
                        placeholder="First Name"
                        className="h-11 rounded-xl"
                        value={formState.firstName}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            firstName: e.target.value,
                          })
                        }
                      />
                      <Input
                        required
                        placeholder="Last Name"
                        className="h-11 rounded-xl"
                        value={formState.lastName}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <Input
                        required
                        type="tel"
                        placeholder="WhatsApp or Phone Number"
                        className="h-11 rounded-xl"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            phone: e.target.value,
                          })
                        }
                      />
                      <Input
                        required
                        type="email"
                        placeholder="Email Address"
                        className="h-11 rounded-xl"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>

                    <Input
                      required
                      placeholder="Country"
                      className="h-11 rounded-xl"
                      value={formState.country}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          country: e.target.value,
                        })
                      }
                    />

                    <Textarea
                      rows={4}
                      placeholder="Anything we should know about your waste challenges? (Optional)"
                      className="min-h-[120px] rounded-xl"
                      value={formState.details}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          details: e.target.value,
                        })
                      }
                    />

                    <Button
                      type="submit"
                      className="h-11 w-full rounded-xl font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
