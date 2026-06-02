import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME || "pastoriejoe18@gmail.com",
        pass: process.env.MAIL_PASSWORD || "fzdmrcsadjexckmd",
      },
    });

    // 1. Send email notification to the company
    const companyMailOptions = {
      from: `"Mencine Co Ltd" <${process.env.MAIL_FROM_ADDRESS || "pastoriejoe18@gmail.com"}>`,
      to: "pastoriejoe18@gmail.com", // Company email
      subject: `New Contact Message: ${data.subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0066cc;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Organization:</strong> ${data.organization || "N/A"}</p>
          <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #0066cc;">
            <p><strong>Message:</strong></p>
            <p>${data.message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      `,
    };

    // 2. Send confirmation email to the customer
    const customerMailOptions = {
      from: `"Mencine Co Ltd" <${process.env.MAIL_FROM_ADDRESS || "pastoriejoe18@gmail.com"}>`,
      to: data.email,
      subject: "Thank You for Contacting Mencine Co Ltd",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0066cc;">Thank You for Reaching Out!</h2>
          <p>Hello ${data.name},</p>
          <p>We have received your message regarding "<strong>${data.subject}</strong>". Our team is reviewing your inquiry and will get back to you within 24-48 business hours.</p>
          <p>In the meantime, feel free to browse our <a href="https://mencine.vercel.app/products">latest products</a>.</p>
          <br>
          <p>Best Regards,</p>
          <p><strong>Mencine Co Ltd Team</strong></p>
        </div>
      `,
    };

    // Execute both email sends
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
