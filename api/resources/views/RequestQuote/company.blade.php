<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Incinerator Inquiry Received</title>
</head>
<body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f7f9;">
    <div style="background-color: #ffffff; padding: 0; border: 1px solid #e1e8ed; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <!-- Header with Logo and Badge -->
        <div style="padding: 30px 20px; text-align: center; border-bottom: 1px solid #f0f4f8;">
            <img src="{{ $message->embed(base_path('../public/images/WIKI CLUB LOGO (5).png')) }}" alt="Mencine Co Ltd Logo" style="max-width: 140px; height: auto; margin-bottom: 15px;">
            <h1 style="margin: 0; color: #1A2942; font-size: 24px; font-weight: bold; display: flex; align-items: center; justify-content: center;">
                New Incinerator Inquiry
                <span style="background-color: #E5B168; color: #ffffff; font-size: 12px; padding: 4px 10px; border-radius: 20px; margin-left: 10px; text-transform: uppercase; letter-spacing: 0.5px;">
                    {{ $status ?? 'New' }}
                </span>
            </h1>
        </div>

        <!-- Alert Section -->
        <div style="padding: 25px 35px;">
            <div style="background-color: #FFF9EE; border-left: 4px solid #E5B168; padding: 15px 20px; margin-bottom: 30px; border-radius: 0 4px 4px 0;">
                <p style="margin: 0; font-size: 15px; color: #856404;">
                    <strong style="color: #1A2942;">Business Alert:</strong> A new incinerator inquiry has been submitted requiring prompt attention.
                </p>
            </div>

            <!-- Customer Information -->
            <h2 style="color: #1A2942; font-size: 20px; margin-top: 0; margin-bottom: 15px; border-bottom: 2px solid #f0f4f8; padding-bottom: 8px;">Customer Information</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                    <th style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #718096; width: 35%;">Name</th>
                    <td style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #2d3748; font-weight: bold;">{{ $data['firstName'] }} {{ $data['lastName'] }}</td>
                </tr>
                <tr>
                    <th style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #718096;">Email</th>
                    <td style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px;">
                        <a href="mailto:{{ $data['email'] }}" style="color: #E5B168; text-decoration: underline;">{{ $data['email'] }}</a>
                    </td>
                </tr>
                <tr>
                    <th style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #718096;">Phone</th>
                    <td style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #2d3748;">{{ !empty($data['phone']) ? $data['phone'] : 'Not provided' }}</td>
                </tr>
                <tr>
                    <th style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #718096;">Country</th>
                    <td style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #2d3748;">{{ $data['country'] }}</td>
                </tr>
                <tr>
                    <th style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #718096;">Waste Type</th>
                    <td style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #2d3748;">{{ $data['selectedWaste'] }}</td>
                </tr>
                <tr>
                    <th style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #718096;">Operation Size</th>
                    <td style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #2d3748;">{{ $data['operationSize'] }}</td>
                </tr>
                <tr>
                    <th style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #718096;">Submission Date</th>
                    <td style="padding: 12px 0; text-align: left; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #2d3748;">{{ $data['submission_date'] }}</td>
                </tr>
            </table>

            <!-- Additional Details -->
            <h2 style="color: #1A2942; font-size: 20px; margin-top: 0; margin-bottom: 15px; border-bottom: 2px solid #f0f4f8; padding-bottom: 8px;">Additional Details</h2>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 4px; margin-bottom: 30px;">
                <p style="margin: 0; font-size: 14px; color: #4a5568; line-height: 1.5;">
                    {{ !empty($data['details']) ? $data['details'] : 'No additional details provided.' }}
                </p>
            </div>

            <!-- Recommended Actions -->
            <h2 style="color: #1A2942; font-size: 20px; margin-top: 0; margin-bottom: 15px; border-bottom: 2px solid #f0f4f8; padding-bottom: 8px;">Recommended Actions</h2>
            <p style="font-size: 14px; color: #4a5568; margin-bottom: 20px;">This inquiry should be responded to within 24 hours to maximize conversion opportunity.</p>

            <div style="text-align: center; margin-bottom: 30px;">
                <a href="mailto:{{ $data['email'] }}?subject=RE: Your Incinerator Inquiry - {{ $data['selectedWaste'] }}"
                   style="display: inline-block; background-color: #1A2942; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px; margin-right: 10px;">
                    Reply to Customer
                </a>
                <a href="{{ $dashboardUrl ?? 'https://www.mencine.co.tz/dashboard' }}"
                   style="display: inline-block; background-color: #E5B168; color: #1A2942; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">
                    View in Dashboard
                </a>
            </div>

            <p style="font-size: 13px; color: #718096; font-style: italic; border-top: 1px solid #f0f4f8; padding-top: 15px;">
                <strong>Marketing Notes:</strong> This inquiry came through the Mencine Co Ltd website incinerator inquiry form.
            </p>
        </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; font-size: 12px; color: #9ca3af;">
        <p style="margin: 5px 0;">&copy; {{ date('Y') }} Mencine Co Ltd. Internal notification system.</p>
        <p style="margin: 5px 0;">This is an automated message from your website inquiry system.</p>
    </div>
</body>
</html>
