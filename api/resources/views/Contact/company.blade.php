<!DOCTYPE html>
<html>
<head>
    <!-- Meta tags for proper document rendering and character encoding -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Contact Form Submission</title>
    <!-- All styles are now inlined for maximum email client compatibility -->
</head>
<!-- Body with base font styling, line height and padding for readability across all email clients -->
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <!-- Header section with company branding and title -->
    <div style="background-color: #ffffff; color: #1A2942; padding: 15px; text-align: center; border-radius: 5px 5px 0 0;">
        <!-- Company logo -->
        <div style="margin-bottom: 10px;">
            <img src="{{ $message->embed(base_path('../public/images/MENCINE.png')) }}" alt="Mencine Co Ltd Logo" style="max-width: 180px; height: auto;">
        </div>
        <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
    </div>

    <!-- Main content section with border and padding for visual separation -->
    <div style="padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px;">
        <!-- Attention banner with bold formatting for immediate notification -->
        <p style="margin-top: 0;"><strong style="font-weight: bold;">Attention:</strong> A new contact form submission has been received from the Mencine Co Ltd website.</p>

        <!-- Customer information section with heading -->
        <h2 style="color: #1A2942; margin-top: 25px; margin-bottom: 15px; font-size: 18px;">Customer Information</h2>
        <!-- Tabular data with styling for organized presentation of customer details -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border: 1px solid #ddd;">
            <tr>
                <th style="padding: 10px; text-align: left; background-color: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Full Name</th>
                <td style="padding: 10px; text-align: left; border: 1px solid #ddd;">{{ $data['fullname'] }}</td>
            </tr>
            <tr>
                <th style="padding: 10px; text-align: left; background-color: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Email Address</th>
                <td style="padding: 10px; text-align: left; border: 1px solid #ddd;">
                    <!-- Clickable email link with styling for easy customer contact -->
                    <a href="mailto:{{ $data['email'] }}" style="color: #E5B168; text-decoration: underline;">{{ $data['email'] }}</a>
                </td>
            </tr>
            <tr>
                <th style="padding: 10px; text-align: left; background-color: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Subject</th>
                <td style="padding: 10px; text-align: left; border: 1px solid #ddd;">{{ $data['subject'] }}</td>
            </tr>
            <tr>
                <th style="padding: 10px; text-align: left; background-color: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Submission Date</th>
                <td style="padding: 10px; text-align: left; border: 1px solid #ddd;">{{ $data['submission_date'] }}</td>
            </tr>
        </table>

        <!-- Message content section with heading -->
        <h2 style="color: #1A2942; margin-top: 25px; margin-bottom: 15px; font-size: 18px;">Message Content</h2>
        <!-- Highlighted message box with left border for visual distinction of customer message -->
        <div style="background-color: #F9F5EA; border-left: 3px solid #E5B168; padding: 15px; margin: 20px 0;">
            <p style="margin: 5px 0;">{{ $data['message'] }}</p>
        </div>

        <!-- Action section with next steps instructions -->
        <p style="margin-bottom: 5px;"><strong style="font-weight: bold;">Next Steps:</strong> Please respond to this inquiry within 24 hours to ensure customer satisfaction.</p>

        <!-- Reply instructions with helpful guidance for staff -->
        <p style="margin-bottom: 15px;">You can reply directly to this email to respond to the customer.</p>

        <!-- Call-to-action button with prominent styling for quick response -->
        <a href="mailto:{{ $data['email'] }}?subject=RE: {{ $data['subject'] }}"
           style="background-color: #1A2942; color: white; padding: 10px 15px; text-decoration: none;
                  border-radius: 4px; display: inline-block; margin-top: 15px; font-weight: bold;">
            Reply to Customer
        </a>
    </div>

    <!-- Footer with copyright information and automated message notice -->
    <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">
        <p style="margin: 5px 0;">© {{ date('Y') }} Mencine Co Ltd. Internal notification system.</p>
        <p style="margin: 5px 0;">This is an automated message from your website contact form.</p>
    </div>
</body>
</html>
