<!DOCTYPE html>
<html>
<head>
    <!-- Meta tags for proper document rendering and character encoding -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Incinerator Inquiry Received</title>
    <!-- No separate style tags - all CSS is inlined for better email client compatibility -->
</head>
<!-- Base body styling for consistent appearance across email clients -->
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <!-- Header section with company branding and notification badge using company's light theme colors -->
    <div style="background-color: #ffffff; color: #1A2942; padding: 15px; text-align: center; border-radius: 5px 5px 0 0;">
        <!-- Company logo -->
        <div style="margin-bottom: 10px;">
            <img src="https://mencine.co.tz/images/MENCINE.png" alt="Mencine Co Ltd Logo" style="max-width: 180px; height: auto;">
        </div>
        <!-- Title with attention-grabbing notification badge -->
        <h1 style="margin: 0; font-size: 24px;">
            New Incinerator Inquiry
            <!-- Notification badge for visual emphasis of new inquiry -->
            <span style="display: inline-block; background-color: #E5B168; color: #1A2942; padding: 3px 8px; border-radius: 10px; font-size: 12px; margin-left: 5px;">
                New
            </span>
        </h1>
    </div>

    <!-- Main content area with structured information about the inquiry -->
    <div style="padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px;">
        <!-- Priority alert section with visual highlighting for urgent attention -->
        <div style="background-color: #F9F5EA; border-left: 4px solid #E5B168; padding: 10px 15px; margin: 15px 0;">
            <p style="margin: 5px 0;"><strong style="font-weight: bold;">Business Alert:</strong> A new incinerator inquiry has been submitted requiring prompt attention.</p>
        </div>

        <!-- Customer information section with heading -->
        <h2 style="color: #1A2942; margin-top: 25px; margin-bottom: 15px; font-size: 20px;">Customer Information</h2>
        <!-- Structured table for customer details with consistent styling -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border: 1px solid #ddd;">
            <tr>
                <th style="padding: 10px; text-align: left; background-color: #f5f5f5; width: 30%; border: 1px solid #ddd; font-weight: bold;">Name</th>
                <td style="padding: 10px; text-align: left; border: 1px solid #ddd;">{{ $data['firstName'] }} {{ $data['lastName'] }}</td>
            </tr>
            <tr>
                <th style="padding: 10px; text-align: left; background-color: #f5f5f5; width: 30%; border: 1px solid #ddd; font-weight: bold;">Email</th>
                <td style="padding: 10px; text-align: left; border: 1px solid #ddd;">
                    <!-- Email link for quick response capability -->
                    <a href="mailto:{{ $data['email'] }}" style="color: #E5B168; text-decoration: underline;">{{ $data['email'] }}</a>
                </td>
            </tr>
            <tr>
                <th style="padding: 10px; text-align: left; background-color: #f5f5f5; width: 30%; border: 1px solid #ddd; font-weight: bold;">Phone</th>
                <td style="padding: 10px; text-align: left; border: 1px solid #ddd;">{{ !empty($data['phone']) ? $data['phone'] : 'Not provided' }}</td>
            </tr>
            <tr>
                <th style="padding: 10px; text-align: left; background-color: #f5f5f5; width: 30%; border: 1px solid #ddd; font-weight: bold;">Country</th>
                <td style="padding: 10px; text-align: left; border: 1px solid #ddd;">{{ $data['country'] }}</td>
            </tr>
            <tr>
                <th style="padding: 10px; text-align: left; background-color: #f5f5f5; width: 30%; border: 1px solid #ddd; font-weight: bold;">Waste Type</th>
                <td style="padding: 10px; text-align: left; border: 1px solid #ddd;">{{ $data['selectedWaste'] }}</td>
            </tr>
            <tr>
                <th style="padding: 10px; text-align: left; background-color: #f5f5f5; width: 30%; border: 1px solid #ddd; font-weight: bold;">Operation Size</th>
                <td style="padding: 10px; text-align: left; border: 1px solid #ddd;">{{ $data['operationSize'] }}</td>
            </tr>
            <tr>
                <th style="padding: 10px; text-align: left; background-color: #f5f5f5; width: 30%; border: 1px solid #ddd; font-weight: bold;">Submission Date</th>
                <td style="padding: 10px; text-align: left; border: 1px solid #ddd;">{{ $data['submission_date'] }}</td>
            </tr>
        </table>

        <!-- Inquiry details section with customer's message -->
        <h2 style="color: #1A2942; margin-top: 25px; margin-bottom: 15px; font-size: 20px;">Additional Details</h2>
        <!-- Highlighted message box for the actual inquiry content -->
        <div style="background-color: #F9F5EA; border-left: 3px solid #E5B168; padding: 15px; margin: 20px 0;">
            <p style="margin: 5px 0;">{{ !empty($data['details']) ? $data['details'] : 'No additional details provided.' }}</p>
        </div>

        <!-- Action section with recommended next steps -->
        <h2 style="color: #1A2942; margin-top: 25px; margin-bottom: 15px; font-size: 20px;">Recommended Actions</h2>
        <p style="margin-bottom: 15px;">This inquiry should be responded to within 24 hours to maximize conversion opportunity.</p>

        <!-- Action buttons for quick staff response options -->
        <div style="margin-top: 20px; text-align: center;">
            <!-- Reply button with pre-populated email subject -->
            <a href="mailto:{{ $data['email'] }}?subject=RE: Your Incinerator Inquiry - {{ $data['selectedWaste'] }}"
               style="background-color: #1A2942; color: white; padding: 10px 15px; text-decoration: none;
                       border-radius: 4px; display: inline-block; margin-top: 15px; margin-right: 10px; font-weight: bold;">
                Reply to Customer
            </a>
            <!-- Dashboard link for more comprehensive inquiry management -->
            <a href="https://mencine.co.tz/dashboard"
               style="background-color: #E5B168; color: #1A2942; padding: 10px 15px; text-decoration: none;
                       border-radius: 4px; display: inline-block; margin-top: 15px; margin-right: 10px; font-weight: bold;">
                View in Dashboard
            </a>
        </div>

        <!-- Marketing context information for better lead understanding -->
        <p style="margin-top: 30px;">
            <strong style="font-weight: bold;">Marketing Notes:</strong> This inquiry came through the Mencine Co Ltd website incinerator inquiry form.
        </p>
    </div>

    <!-- Footer with copyright information and system notification identification -->
    <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">
        <p style="margin: 5px 0;">© {{ date('Y') }} Mencine Co Ltd. Internal notification system.</p>
        <p style="margin: 5px 0;">This is an automated message from your website inquiry system.</p>
    </div>
</body>
</html>
