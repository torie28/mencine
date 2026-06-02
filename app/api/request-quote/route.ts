import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

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

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME || "pastoriejoe18@gmail.com",
        pass: process.env.MAIL_PASSWORD || "fzdmrcsadjexckmd",
      },
    });

    const fullName = `${data.firstName} ${data.lastName}`;

    // 1. Send email notification to the company
    const companyMailOptions = {
      from: `"Mencine Co Ltd" <${process.env.MAIL_FROM_ADDRESS || "pastoriejoe18@gmail.com"}>`,
      to: "pastoriejoe18@gmail.com",
      subject: `New Incinerator Inquiry - ${data.selectedWaste}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0066cc;">New Quote Request</h2>
          <p><strong>Customer Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
          <p><strong>Country:</strong> ${data.country}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Waste Type:</strong> ${data.selectedWaste}</p>
          <p><strong>Operation Size:</strong> ${data.operationSize}</p>
          <p><strong>Additional Details:</strong></p>
          <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #0066cc;">
            ${data.details ? data.details.replace(/\n/g, "<br>") : "No additional details provided."}
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">Submitted on: ${data.submission_date || new Date().toLocaleString()}</p>
        </div>
      `,
    };

    // 2. Send confirmation email to the customer
    const customerMailOptions = {
      from: `"Mencine Co Ltd" <${process.env.MAIL_FROM_ADDRESS || "pastoriejoe18@gmail.com"}>`,
      to: data.email,
      subject: "Thank You for Your Incinerator Inquiry",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0066cc;">Inquiry Received!</h2>
          <p>Hello ${data.firstName},</p>
          <p>Thank you for your interest in our waste management solutions. We have received your request for a quote regarding <strong>${data.selectedWaste}</strong> for a <strong>${data.operationSize}</strong> operation.</p>
          <p>Our specialists are reviewing your requirements and will reach out to you shortly with a personalized recommendation and pricing details.</p>
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
