<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug = 2;                      // Enable verbose debug output
    $mail->isSMTP();                           // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';      // Set the SMTP server to send through (Example: Gmail)
    $mail->SMTPAuth   = true;                  // Enable SMTP authentication
    $mail->Username   = 'YOUR_EMAIL@gmail.com'; // SMTP username
    $mail->Password   = 'YOUR_APP_PASSWORD';   // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;                   // TCP port to connect to

    // Recipients
    $mail->setFrom('YOUR_EMAIL@gmail.com', 'Mailer Test');
    $mail->addAddress('RECEIVER_EMAIL@gmail.com');     // Add a recipient

    // Content
    $mail->isHTML(true);                       // Set email format to HTML
    $mail->subject = 'PHPMailer Test';
    $mail->Body    = 'This is a test email sent using <b>PHPMailer</b>';
    $mail->AltBody = 'This is a test email sent using PHPMailer (plain text)';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
