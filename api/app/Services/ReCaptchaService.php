<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ReCaptchaService
{
    public function verify($token)
    {
        $secretKey = env('RECAPTCHA_SECRET_KEY');

        if (!$secretKey) {
            \Log::warning('RECAPTCHA_SECRET_KEY is not set. Skipping verification.');
            return true;
        }

        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => $secretKey,
            'response' => $token,
        ]);

        return $response->json()['success'] ?? false;
    }
}
