import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        { message: "Email is required" },
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

    const logoUrl = "https://mencine.vercel.app/images/WIKI%20CLUB%20LOGO%20(5).png";

    // 1. Company Notification Email
    const companyMailOptions = {
      from: `"Mencine Newsletter" <${process.env.MAIL_FROM_ADDRESS || "pastoriejoe18@gmail.com"}>`,
      to: "pastoriejoe18@gmail.com",
      subject: `New Newsletter Subscription: ${data.email}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <img src="${logoUrl}" alt="Mencine Logo" style="max-width: 150px; margin-bottom: 20px;">
          <h2>New Subscriber!</h2>
          <p>A new user has subscribed to the newsletter:</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p style="font-size: 12px; color: #666; margin-top: 30px;">
            Submitted on: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    // 2. Subscriber Welcome Email
    const subscriberMailOptions = {
      from: `"Mencine Co Ltd" <${process.env.MAIL_FROM_ADDRESS || "pastoriejoe18@gmail.com"}>`,
      to: data.email,
      subject: "Welcome to Mencine Newsletter",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #f8f9fa; padding: 30px; text-align: center; border-bottom: 3px solid #0066cc;">
            <img src="${logoUrl}" alt="Mencine Co Ltd" style="max-width: 180px;">
          </div>
          <div style="padding: 40px;">
            <h2 style="color: #0066cc;">Thank you for subscribing!</h2>
            <p>Hello,</p>
            <p>We're excited to have you join our newsletter. You'll now be among the first to receive updates on:</p>
            <ul>
              <li>New waste management technologies</li>
              <li>Sustainability tips and industry insights</li>
              <li>Company news and case studies</li>
              <li>Exclusive announcements</li>
            </ul>
            <p>If you have any questions or would like to learn more about our solutions, feel free to reply to this email or visit our website.</p>
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://mencine.vercel.app" style="display: inline-block; padding: 12px 25px; background-color: #0066cc; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Our Website</a>
            </div>
            <p style="margin-top: 30px;">Best Regards,<br><strong>The Mencine Team</strong></p>
          </div>
          <div style="background-color: #333; color: #fff; padding: 20px; text-align: center; font-size: 12px;">
            <p>&copy; ${new Date().getFullYear()} Mencine Co Ltd. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(subscriberMailOptions),
    ]);

    return NextResponse.json(
      {
        status: "success",
        message: "Successfully subscribed to the newsletter.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { message: "Failed to process newsletter subscription" },
      { status: 500 },
    );
  }
}
