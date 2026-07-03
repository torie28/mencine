<?php

namespace App\Http\Controllers\components\RequestQuote;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Services\ReCaptchaService;

use App\Models\Inquiry;

class RequestQuoteController extends Controller
{
    protected $reCaptcha;

    public function __construct(ReCaptchaService $reCaptcha)
    {
        $this->reCaptcha = $reCaptcha;
    }

    /**
     * Handle the incoming request quote form submission.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "firstName" => "required|string",
            "lastName" => "required|string",
            "email" => "required|email",
            "phone" => "nullable|string",
            "country" => "required|string",
            "selectedWaste" => "required|string",
            "operationSize" => "required|string",
            "details" => "nullable|string",
            "submission_date" => "required|string",
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

        try {
            // Save inquiry to database
            $inquiry = Inquiry::create([
                "first_name" => $data["firstName"],
                "last_name" => $data["lastName"],
                "email" => $data["email"],
                "phone" => $data["phone"],
                "country" => $data["country"],
                "waste_type" => $data["selectedWaste"],
                "operation_size" => $data["operationSize"],
                "details" => $data["details"],
                "submission_date" => $data["submission_date"],
                "status" => "new",
            ]);

            $dashboardUrl = route("inquiry.view", ["id" => $inquiry->id]);

            // Send email notification to the company
            Mail::send(
                "RequestQuote.company",
                [
                    "data" => $data,
                    "status" => "New",
                    "dashboardUrl" => $dashboardUrl,
                ],
                function ($message) use ($data) {
                    $message
                        ->to("pastoriejoe18@gmail.com")
                        ->subject(
                            "New Incinerator Inquiry - " .
                                $data["selectedWaste"],
                        );
                },
            );

            // Send confirmation email to the customer
            Mail::send("RequestQuote.customer", ["data" => $data], function (
                $message,
            ) use ($data) {
                $message
                    ->to($data["email"])
                    ->subject("Thank You for Your Incinerator Inquiry");
            });

            return response()->json(
                [
                    "status" => "success",
                    "message" =>
                        "Your inquiry has been submitted successfully. Our team will contact you soon.",
                ],
                201,
            );
        } catch (\Exception $e) {
            \Log::error("Email submission error: " . $e->getMessage());

            return response()->json(
                [
                    "status" => "error",
                    "message" =>
                        "There was an error processing your request. Please try again later.",
                ],
                500,
            );
        }
    }

    /**
     * Mark an inquiry as viewed.
     */
    public function view($id)
    {
        $inquiry = Inquiry::findOrFail($id);
        $inquiry->update(["status" => "viewed"]);

        // Redirect to a dashboard or show a success message
        // For now, let's redirect to the website's dashboard if it exists
        return redirect("https://www.mencine.co.tz/dashboard?inquiry=" . $id);
    }
}
