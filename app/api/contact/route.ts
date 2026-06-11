import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verifyReCaptcha } from "@/lib/recaptcha";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Verify reCAPTCHA
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecretKey) {
      if (!data.recaptchaToken) {
        return NextResponse.json(
          { message: "reCAPTCHA token is missing" },
          { status: 400 },
        );
      }

      const isValid = await verifyReCaptcha(data.recaptchaToken);
      if (!isValid) {
        return NextResponse.json(
          { message: "reCAPTCHA verification failed" },
          { status: 400 },
        );
      }
    } else {
      console.warn("reCAPTCHA secret key is not set. Skipping verification.");
    }

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME || "pastoriejoe18@gmail.com",
        pass: process.env.MAIL_PASSWORD || "fzdmrcsadjexckmd",
      },
    });

    const logoUrl = "https://mencine.vercel.app/images/MENCINE.png";
    const siteUrl = "https://mencine.vercel.app";

    // 1. Company Notification Email Template
    const companyMailOptions = {
      from: `"Mencine Co Ltd" <${process.env.MAIL_FROM_ADDRESS || "pastoriejoe18@gmail.com"}>`,
      to: "pastoriejoe18@gmail.com",
      subject: `New Contact Message: ${data.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; border: 1px solid #eee; }
            .header { background-color: #f8f9fa; padding: 30px; text-align: center; border-bottom: 3px solid #0066cc; }
            .content { padding: 40px; background-color: #ffffff; }
            .footer { background-color: #333; color: #fff; padding: 20px; text-align: center; font-size: 12px; }
            .info-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .info-table td { padding: 10px; border-bottom: 1px solid #eee; }
            .info-label { font-weight: bold; color: #666; width: 40%; }
            .message-box { background-color: #f9f9f9; padding: 20px; border-radius: 5px; border-left: 4px solid #0066cc; margin-top: 20px; }
            .logo { max-width: 180px; margin-bottom: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="${logoUrl}" alt="Mencine Co Ltd" class="logo">
              <h2 style="margin: 0; color: #0066cc; font-size: 24px;">New Contact Inquiry</h2>
            </div>
            <div class="content">
              <table class="info-table">
                <tr><td class="info-label">Name</td><td>${data.name}</td></tr>
                <tr><td class="info-label">Email</td><td>${data.email}</td></tr>
                <tr><td class="info-label">Organization</td><td>${data.organization || "N/A"}</td></tr>
                <tr><td class="info-label">Industry</td><td>${data.industry || "N/A"}</td></tr>
                <tr><td class="info-label">Phone</td><td>${data.phone || "N/A"}</td></tr>
                <tr><td class="info-label">Heard From</td><td>${data.source || "N/A"}</td></tr>
                <tr><td class="info-label">Subject</td><td>${data.subject}</td></tr>
              </table>
              <div class="message-box">
                <p style="margin-top: 0; font-weight: bold;">Message Content:</p>
                <p style="white-space: pre-line;">${data.message}</p>
              </div>
              <p style="margin-top: 30px; font-size: 14px; color: #888;">Submitted on: ${new Date().toLocaleString("en-GB", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true })}</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Mencine Co Ltd. All rights reserved.</p>
              <p>Specialists in Smoke-Free & Efficient Incinerator Solutions</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 2. Customer Confirmation Email Template
    const customerMailOptions = {
      from: `"Mencine Co Ltd" <${process.env.MAIL_FROM_ADDRESS || "pastoriejoe18@gmail.com"}>`,
      to: data.email,
      subject: "Thank You for Contacting Mencine Co Ltd",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; border: 1px solid #eee; }
            .header { background-color: #f8f9fa; padding: 30px; text-align: center; border-bottom: 3px solid #0066cc; }
            .content { padding: 40px; background-color: #ffffff; }
            .footer { background-color: #333; color: #fff; padding: 20px; text-align: center; font-size: 12px; }
            .logo { max-width: 180px; margin-bottom: 15px; }
            .button { display: inline-block; padding: 12px 25px; background-color: #0066cc; color: #ffffff !important; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="${logoUrl}" alt="Mencine Co Ltd" class="logo">
            </div>
            <div class="content">
              <h2 style="color: #0066cc; margin-top: 0;">Thank you for reaching out!</h2>
              <p>Hello ${data.name},</p>
              <p>We have received your message regarding "<strong>${data.subject}</strong>". Our technical team is currently reviewing your inquiry.</p>
              <p>We understand the importance of efficient waste management and will get back to you with a detailed response within 24-48 business hours.</p>
              <p>In the meantime, you can explore our full range of industrial and medical incinerators on our website.</p>
              <a href="${siteUrl}/products" class="button">View Our Products</a>
              <p style="margin-top: 30px;">Best Regards,<br><strong>Mencine Co Ltd Team</strong></p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Mencine Co Ltd. All rights reserved.</p>
              <p>Innovating for a cleaner tomorrow.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(customerMailOptions),
    ]);

    return NextResponse.json(
      {
        status: "success",
        message: "Your message has been sent successfully.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { message: "Failed to process contact form submission" },
      { status: 500 },
    );
  }
}
