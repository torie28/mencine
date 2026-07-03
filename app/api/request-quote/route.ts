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
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "selectedWaste",
      "operationSize",
      "country",
    ];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { message: `Missing required field: ${field}` },
          { status: 400 },
        );
      }
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME || "pastoriejoe18@gmail.com",
        pass: process.env.MAIL_PASSWORD || "fzdmrcsadjexckmd",
      },
    });

    const fullName = `${data.firstName} ${data.lastName}`;
    const logoUrl = "https://mencine.vercel.app/images/WIKI%20CLUB%20LOGO%20(5).png";
    const siteUrl = "https://mencine.vercel.app";

    // 1. Company Notification Email Template
    const companyMailOptions = {
      from: `"Mencine Co Ltd" <${process.env.MAIL_FROM_ADDRESS || "pastoriejoe18@gmail.com"}>`,
      to: "pastoriejoe18@gmail.com",
      subject: `New Incinerator Inquiry - ${data.selectedWaste}`,
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
            .info-label { font-weight: bold; color: #666; width: 35%; }
            .message-box { background-color: #f9f9f9; padding: 20px; border-radius: 5px; border-left: 4px solid #0066cc; margin-top: 20px; }
            .logo { max-width: 180px; margin-bottom: 15px; }
            .badge { display: inline-block; padding: 4px 12px; background-color: #e6f0ff; color: #0066cc; border-radius: 20px; font-size: 12px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="${logoUrl}" alt="Mencine Co Ltd" class="logo">
              <h2 style="margin: 0; color: #0066cc; font-size: 24px;">New Quote Request</h2>
            </div>
            <div class="content">
              <h3 style="color: #444; border-bottom: 1px solid #eee; padding-bottom: 10px;">Customer Information</h3>
              <table class="info-table">
                <tr><td class="info-label">Customer Name</td><td>${fullName}</td></tr>
                <tr><td class="info-label">Email Address</td><td>${data.email}</td></tr>
                <tr><td class="info-label">Phone Number</td><td>${data.phone || "N/A"}</td></tr>
                <tr><td class="info-label">Country</td><td>${data.country}</td></tr>
              </table>

              <h3 style="color: #444; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 30px;">Inquiry Details</h3>
              <table class="info-table">
                <tr><td class="info-label">Waste Type</td><td><span class="badge">${data.selectedWaste}</span></td></tr>
                <tr><td class="info-label">Operation Size</td><td>${data.operationSize}</td></tr>
              </table>

              <div class="message-box">
                <p style="margin-top: 0; font-weight: bold;">Additional Requirements:</p>
                <p style="white-space: pre-line;">${data.details || "No additional details provided."}</p>
              </div>

              <p style="margin-top: 30px; font-size: 14px; color: #888;">Submitted on: ${data.submission_date || new Date().toLocaleString()}</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Mencine Co Ltd. All rights reserved.</p>
              <p>Industrial Waste Management Solutions</p>
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
      subject: "Thank You for Your Incinerator Inquiry",
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
            .summary-box { background-color: #f0f7ff; padding: 25px; border-radius: 8px; margin: 20px 0; border: 1px solid #d0e4ff; }
            .button { display: inline-block; padding: 12px 25px; background-color: #0066cc; color: #ffffff !important; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="${logoUrl}" alt="Mencine Co Ltd" class="logo">
            </div>
            <div class="content">
              <h2 style="color: #0066cc; margin-top: 0;">Inquiry Received!</h2>
              <p>Hello ${data.firstName},</p>
              <p>Thank you for your interest in Mencine Co Ltd's waste management solutions. We have received your request for a personalized quote.</p>

              <div class="summary-box">
                <h4 style="margin-top: 0; color: #0066cc;">Request Summary:</h4>
                <p style="margin-bottom: 5px;"><strong>Waste Type:</strong> ${data.selectedWaste}</p>
                <p style="margin: 0;"><strong>Operation Scale:</strong> ${data.operationSize}</p>
              </div>

              <p>One of our incinerator specialists will analyze your requirements and prepare a detailed recommendation including technical specifications and pricing.</p>
              <p>You should hear from us within one business day.</p>

              <a href="${siteUrl}/about" class="button">About Our Technology</a>

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
        message: "Your inquiry has been submitted successfully.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Request Quote API error:", error);
    return NextResponse.json(
      {
        message:
          "There was an error processing your request. Please try again later.",
      },
      { status: 500 },
    );
  }
}
