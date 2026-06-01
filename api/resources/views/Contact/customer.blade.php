<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Thank You for Contacting Mencine Co Ltd</title>
    <!-- No separate style tags - all CSS is inlined for better email client compatibility -->
</head>
<!-- Applying font family, line height, color, and other base styles directly to body tag -->
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <!-- Header section with company's light theme colors -->
    <div style="background-color: #ffffff; color: #1A2942; padding: 15px; text-align: center; border-radius: 5px 5px 0 0;">
        <!-- Company logo -->
        <div style="margin-bottom: 10px;">
            <img src="https://mencine.co.tz/images/MENCINE.png" alt="Mencine Co Ltd Logo" style="max-width: 180px; height: auto;">
        </div>
        <h1 style="margin: 0; font-size: 24px;">Thank You for Contacting Us</h1>
    </div>

    <!-- Main content area with border and padding -->
    <div style="padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px;">
        <!-- Personalized greeting with customer name -->
        <p style="margin-top: 0;">Dear {{ $data['fullname'] }},</p>

        <!-- Acknowledgment message -->
        <p>Thank you for reaching out to Mencine Co Ltd. We have received your message and appreciate you taking the time to contact us.</p>

        <p>Here's a summary of what you sent:</p>

        <!-- Message box with light background and left border for visual distinction -->
        <div style="background-color: #F9F5EA; border-left: 3px solid #E5B168; padding: 15px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Subject:</strong> {{ $data['subject'] }}</p>
            <p style="margin: 5px 0;"><strong>Message:</strong> {{ $data['message'] }}</p>
            <p style="margin: 5px 0;"><strong>Submitted on:</strong> {{ $data['submission_date'] }}</p>
        </div>

        <!-- Response time expectations -->
        <p>Our team is reviewing your message and will respond as soon as possible, typically within 24-48 hours.</p>

        <!-- Alternative contact information for urgent inquiries -->
        <p>If you have any urgent inquiries, please don't hesitate to call us at +255 747 105 951.</p>

        <!-- Email signature with company branding -->
        <p>
            Warm regards,<br>
            The Mencine Co Ltd Team<br>
            <a href="https://mencine.co.tz" style="color: #E5B168; text-decoration: underline;">www.mencine.co.tz</a>
        </p>
    </div>

    <!-- Footer with copyright information and disclaimer -->
    <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">
        <p style="margin: 5px 0;">© {{ date('Y') }} Mencine Co Ltd. All rights reserved.</p>
        <p style="margin: 5px 0;">This is an automated message. Please do not reply directly to this email.</p>
    </div>
</body>
</html>
