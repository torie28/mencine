<!DOCTYPE html>
<html>
<head>
    <!-- Meta tags for proper document rendering and character encoding -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Thank You for Your Incinerator Inquiry</title>
    <!-- No separate style tags - all CSS is inlined for better email client compatibility -->
</head>
<!-- Main email container with base styling for readability and proper formatting -->
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <!-- Header section with company's light theme colors -->
    <div style="background-color: #ffffff; color: #1A2942; padding: 15px; text-align: center; border-radius: 5px 5px 0 0;">
        <!-- Company logo -->
        <div style="margin-bottom: 10px;">
            <img src="{{ $message->embed(base_path('../public/images/MENCINE.png')) }}" alt="Mencine Co Ltd Logo" style="max-width: 180px; height: auto;">
        </div>
        <h1 style="margin: 0; font-size: 24px;">Thank You for Your Incinerator Inquiry</h1>
    </div>

    <!-- Main content area with border and proper spacing -->
    <div style="padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px;">
        <!-- Personal greeting with customer's first name -->
        <p style="margin-top: 0;">Dear {{ $data['firstName'] }},</p>

        <!-- Acknowledgment message with warm, welcoming tone -->
        <p>Thank you for your interest in Mencine Co Ltd's smoke-free incinerator solutions. We have received your inquiry and are excited about the possibility of helping you with your waste management needs.</p>

        <!-- Inquiry details box with subtle background and left border accent -->
        <div style="background-color: #F9F5EA; border-left: 3px solid #E5B168; padding: 15px; margin: 20px 0;">
            <!-- Section heading for inquiry details -->
            <h3 style="color: #1A2942; margin-top: 5px; margin-bottom: 15px; font-size: 18px;">Your Inquiry Details:</h3>
            <!-- Organized table of submitted information for easy reference -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border: 1px solid #ddd;">
                <tr>
                    <th style="padding: 8px 12px; text-align: left; background-color: #f5f5f5; width: 40%; border: 1px solid #ddd; font-weight: bold;">Waste Type</th>
                    <td style="padding: 8px 12px; text-align: left; border: 1px solid #ddd;">{{ $data['selectedWaste'] }}</td>
                </tr>
                <tr>
                    <th style="padding: 8px 12px; text-align: left; background-color: #f5f5f5; width: 40%; border: 1px solid #ddd; font-weight: bold;">Operation Size</th>
                    <td style="padding: 8px 12px; text-align: left; border: 1px solid #ddd;">{{ $data['operationSize'] }}</td>
                </tr>
                <tr>
                    <th style="padding: 8px 12px; text-align: left; background-color: #f5f5f5; width: 40%; border: 1px solid #ddd; font-weight: bold;">Country</th>
                    <td style="padding: 8px 12px; text-align: left; border: 1px solid #ddd;">{{ $data['country'] }}</td>
                </tr>
                <tr>
                    <th style="padding: 8px 12px; text-align: left; background-color: #f5f5f5; width: 40%; border: 1px solid #ddd; font-weight: bold;">Contact Information</th>
                    <td style="padding: 8px 12px; text-align: left; border: 1px solid #ddd;">
                        Email: {{ $data['email'] }}<br>
                        {{ !empty($data['phone']) ? 'Phone: ' . $data['phone'] : '' }}
                    </td>
                </tr>
                <tr>
                    <th style="padding: 8px 12px; text-align: left; background-color: #f5f5f5; width: 40%; border: 1px solid #ddd; font-weight: bold;">Additional Details</th>
                    <td style="padding: 8px 12px; text-align: left; border: 1px solid #ddd;">{{ !empty($data['details']) ? $data['details'] : 'No additional details provided.' }}</td>
                </tr>
                <tr>
                    <th style="padding: 8px 12px; text-align: left; background-color: #f5f5f5; width: 40%; border: 1px solid #ddd; font-weight: bold;">Submission Date</th>
                    <td style="padding: 8px 12px; text-align: left; border: 1px solid #ddd;">{{ $data['submission_date'] }}</td>
                </tr>
            </table>
        </div>

        <!-- Next steps section with clear expectations -->
        <div style="background-color: #F9F5EA; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #1A2942; margin-top: 25px; margin-bottom: 15px; font-size: 18px;">What Happens Next?</h3>
            <!-- Timeline expectations with numbered list for clarity -->
            <ol style="margin-top: 10px; padding-left: 25px;">
                <li style="margin-bottom: 10px;"><strong style="color: #E5B168;">Review:</strong> Our technical team will carefully review your site requirements.</li>
                <li style="margin-bottom: 10px;"><strong style="color: #E5B168;">Personalized Response:</strong> Within 24 hours, one of our specialists will contact you to discuss your incinerator needs in more detail.</li>
                <li style="margin-bottom: 10px;"><strong style="color: #E5B168;">Custom Proposal:</strong> Based on your waste profile, we will create a tailored recommendation designed specifically for your institution.</li>
                <li><strong style="color: #E5B168;">Consultation:</strong> We'll work with you to ensure the system meets all environmental and operational standards.</li>
            </ol>
        </div>

        <!-- Alternative contact information section -->
        <p style="margin-top: 20px;">If you have any urgent questions or need immediate assistance, please feel free to contact us directly:</p>
        <ul style="margin-left: 20px; padding-left: 0;">
            <!-- Phone and email contacts with consistent formatting -->
            <li style="margin-bottom: 5px;">Phone / WhatsApp: <a href="https://wa.me/255747105951" style="color: #E5B168; text-decoration: underline;">+255 747 105 951</a></li>
            <li style="margin-bottom: 5px;">Email: <a href="mailto:pastoriejoe18@gmail.com" style="color: #E5B168; text-decoration: underline;">mencinecoltd@gmail.com</a></li>
        </ul>

        <!-- Email signature with company branding -->
        <p style="margin-top: 25px;">
            We look forward to helping you implement sustainable waste solutions.<br><br>
            Warm regards,<br>
            The Mencine Co Ltd Team<br>
            <a href="https://mencine.co.tz" style="color: #E5B168; text-decoration: underline;">www.mencine.co.tz</a>
        </p>
    </div>

    <!-- Footer with copyright information and disclaimer -->
    <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">
        <p style="margin: 5px 0;">&copy; {{ date('Y') }} Mencine Co Ltd. All rights reserved.</p>
        <p style="margin: 5px 0;">This is an automated confirmation. Please do not reply directly to this email.</p>
    </div>
</body>
</html>
