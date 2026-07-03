<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Thank You for Your Incinerator Inquiry</title>
</head>
<body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
    <div style="background-color: #ffffff; padding: 0; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <!-- Header with Logo -->
        <div style="padding: 30px 20px; text-align: center;">
            <img src="{{ $message->embed(base_path('../public/images/MENCINE.png')) }}" alt="Mencine Co Ltd Logo" style="max-width: 150px; height: auto; margin-bottom: 20px;">
            <h1 style="margin: 0; color: #1A2942; font-size: 26px; font-weight: bold;">Thank You for Your Incinerator Inquiry</h1>
        </div>

        <!-- Content -->
        <div style="padding: 0 40px 40px 40px;">
            <p style="margin-top: 0; font-size: 15px;">Dear {{ $data['firstName'] }},</p>
            <p style="font-size: 15px; margin-bottom: 25px;">Thank you for your interest in Mencine Co Ltd's smoke-free incinerator solutions. We have received your inquiry and are excited about the possibility of helping you with your waste management needs.</p>

            <!-- Inquiry Details Box -->
            <div style="background-color: #FDF9F0; border-left: 4px solid #E5B168; padding: 25px; margin: 25px 0;">
                <h3 style="color: #1A2942; margin-top: 0; margin-bottom: 20px; font-size: 20px; font-weight: bold;">Your Inquiry Details:</h3>
                <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border: 1px solid #e5e7eb;">
                    <tr>
                        <th style="padding: 12px 15px; text-align: left; background-color: #f9fafb; border: 1px solid #e5e7eb; font-size: 14px; width: 35%; color: #4b5563;">Waste Type</th>
                        <td style="padding: 12px 15px; text-align: left; border: 1px solid #e5e7eb; font-size: 14px; color: #1f2937;">{{ $data['selectedWaste'] }}</td>
                    </tr>
                    <tr>
                        <th style="padding: 12px 15px; text-align: left; background-color: #f9fafb; border: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Operation Size</th>
                        <td style="padding: 12px 15px; text-align: left; border: 1px solid #e5e7eb; font-size: 14px; color: #1f2937;">{{ $data['operationSize'] }}</td>
                    </tr>
                    <tr>
                        <th style="padding: 12px 15px; text-align: left; background-color: #f9fafb; border: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Country</th>
                        <td style="padding: 12px 15px; text-align: left; border: 1px solid #e5e7eb; font-size: 14px; color: #1f2937;">{{ $data['country'] }}</td>
                    </tr>
                    <tr>
                        <th style="padding: 12px 15px; text-align: left; background-color: #f9fafb; border: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Contact Information</th>
                        <td style="padding: 12px 15px; text-align: left; border: 1px solid #e5e7eb; font-size: 14px; color: #1f2937;">
                            Email: <a href="mailto:{{ $data['email'] }}" style="color: #3b82f6; text-decoration: none;">{{ $data['email'] }}</a><br>
                            Phone: {{ !empty($data['phone']) ? $data['phone'] : 'Not provided' }}
                        </td>
                    </tr>
                    <tr>
                        <th style="padding: 12px 15px; text-align: left; background-color: #f9fafb; border: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Additional Details</th>
                        <td style="padding: 12px 15px; text-align: left; border: 1px solid #e5e7eb; font-size: 14px; color: #1f2937;">{{ !empty($data['details']) ? $data['details'] : 'No additional details provided.' }}</td>
                    </tr>
                    <tr>
                        <th style="padding: 12px 15px; text-align: left; background-color: #f9fafb; border: 1px solid #e5e7eb; font-size: 14px; color: #4b5563;">Submission Date</th>
                        <td style="padding: 12px 15px; text-align: left; border: 1px solid #e5e7eb; font-size: 14px; color: #1f2937;">{{ $data['submission_date'] }}</td>
                    </tr>
                </table>
            </div>

            <!-- What Happens Next Box -->
            <div style="background-color: #FDF9F0; padding: 25px; border-radius: 8px; margin-top: 30px;">
                <h3 style="color: #1A2942; margin-top: 0; margin-bottom: 20px; font-size: 20px; font-weight: bold;">What Happens Next?</h3>
                <ol style="margin: 0; padding-left: 20px; color: #4b5563;">
                    <li style="margin-bottom: 12px; font-size: 14px;"><strong style="color: #E5B168;">Review:</strong> Our technical team will carefully review your site requirements.</li>
                    <li style="margin-bottom: 12px; font-size: 14px;"><strong style="color: #E5B168;">Personalized Response:</strong> Within 24 hours, one of our specialists will contact you to discuss your incinerator needs in more detail.</li>
                    <li style="margin-bottom: 12px; font-size: 14px;"><strong style="color: #E5B168;">Custom Proposal:</strong> Based on your waste profile, we will create a tailored recommendation designed specifically for your institution.</li>
                    <li style="font-size: 14px;"><strong style="color: #E5B168;">Consultation:</strong> We'll work with you to ensure the system meets all environmental and operational standards.</li>
                </ol>
            </div>

            <!-- Urgent Questions -->
            <p style="margin-top: 30px; font-size: 14px;">If you have any urgent questions or need immediate assistance, please feel free to contact us directly:</p>
            <ul style="padding-left: 20px; margin-bottom: 30px; color: #4b5563;">
                <li style="font-size: 14px; margin-bottom: 5px;">Phone: <span style="color: #E5B168; font-weight: bold;">+255 747 105 951</span></li>
                <li style="font-size: 14px;">Email: <a href="mailto:mencinecoltd@gmail.com" style="color: #E5B168; font-weight: bold; text-decoration: none;">mencinecoltd@gmail.com</a></li>
            </ul>

            <p style="margin-top: 30px; font-size: 14px; color: #4b5563;">We look forward to helping you implement sustainable waste solutions.</p>

            <p style="margin-top: 25px; font-size: 14px; color: #4b5563;">
                Warm regards,<br>
                <strong>The Mencine Co Ltd Team</strong><br>
                <a href="https://www.mencine.co.tz" style="color: #E5B168; text-decoration: none; font-weight: bold;">www.mencine.co.tz</a>
            </p>
        </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; font-size: 12px; color: #9ca3af;">
        <p style="margin: 5px 0;">&copy; {{ date('Y') }} Mencine Co Ltd. All rights reserved.</p>
        <p style="margin: 5px 0;">This is an automated confirmation. Please do not reply directly to this email.</p>
    </div>
</body>
</html>
