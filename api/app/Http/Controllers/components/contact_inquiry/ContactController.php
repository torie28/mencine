<?php

namespace App\Http\Controllers\components\contact_inquiry;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Services\ReCaptchaService;

class ContactController extends Controller
{
    protected $reCaptcha;

    public function __construct(ReCaptchaService $reCaptcha)
    {
        $this->reCaptcha = $reCaptcha;
    }

    /**
     * Handle the incoming contact form submission.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "name" => "required|string",
            "email" => "required|email",
            "organization" => "nullable|string",
            "phone" => "nullable|string",
            "subject" => "required|string",
            "message" => "required|string",
            "recaptchaToken" => "required|string",
        ]);

        if (!$this->reCaptcha->verify($data["recaptchaToken"])) {
            return response()->json(
                [
                    "status" => "error",
                    "message" => "reCAPTCHA verification failed.",
                ],
                400,
            );
        }

        $data["submission_date"] = now()->format("d F Y, H:i A");
        $data["fullname"] = $data["name"]; // for backward compatibility with view

        try {
            // Send email notification to the company
            Mail::send("Contact.company", ["data" => $data], function (
                $message,
            ) use ($data) {
                $message
                    ->to("pastoriejoe18@gmail.com")
                    ->subject("New Contact Message: " . $data["subject"]);
            });

            // Send confirmation email to the customer
            Mail::send("Contact.customer", ["data" => $data], function (
                $message,
            ) use ($data) {
                $message
                    ->to($data["email"])
                    ->subject("Thank You for Contacting Mencine Co Ltd");
            });

            return response()->json(
                [
                    "status" => "success",
                    "message" => "Your message has been sent successfully.",
                ],
                201,
            );
        } catch (\Exception $e) {
            \Log::error("Contact form email error: " . $e->getMessage());

            return response()->json(
                [
                    "status" => "error",
                    "message" =>
                        "There was an error sending your message. Please try again later.",
                ],
                500,
            );
        }
    }
}
