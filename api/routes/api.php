<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\components\RequestQuote\RequestQuoteController;
use App\Http\Controllers\components\contact_inquiry\ContactController;

Route::post("/request-quote", [RequestQuoteController::class, "store"]);
Route::get("/inquiries/{id}/view", [
    RequestQuoteController::class,
    "view",
])->name("inquiry.view");
Route::post("/contact", [ContactController::class, "store"]);

Route::get("/test-email", function () {
    try {
        \Illuminate\Support\Facades\Mail::raw(
            "Testing Laravel Mailer",
            function ($message) {
                $message
                    ->to("pastoriejoe18@gmail.com")
                    ->subject("Laravel Test Email");
            },
        );
        return response()->json([
            "status" => "success",
            "message" =>
                "Test email sent to log! Check api/storage/logs/laravel.log",
        ]);
    } catch (\Exception $e) {
        return response()->json(
            ["status" => "error", "message" => $e->getMessage()],
            500,
        );
    }
});
