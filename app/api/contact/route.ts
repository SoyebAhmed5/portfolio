import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, website } = await req.json();

    // Honeypot protection
    if (website) {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    // ==========================================================
    // Email to YOU
    // ==========================================================

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `📩 New Portfolio Contact from ${name}`,
      html: `
      <div style="
        font-family:Arial,sans-serif;
        max-width:700px;
        margin:auto;
        padding:30px;
        background:#ffffff;
        border-radius:12px;
        border:1px solid #e5e7eb;
      ">

        <h2 style="color:#7c3aed;">
          📩 New Portfolio Contact
        </h2>

        <table style="width:100%;margin-top:20px;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;"><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td style="padding:10px 0;"><strong>Email</strong></td>
            <td>${email}</td>
          </tr>
        </table>

        <hr style="margin:30px 0;" />

        <h3>Message</h3>

        <div style="
          background:#f8fafc;
          padding:20px;
          border-radius:10px;
          line-height:1.8;
        ">
          ${message.replace(/\n/g, "<br/>")}
        </div>

        <p style="
          margin-top:30px;
          color:#666;
          font-size:13px;
        ">
          Sent from your Portfolio Contact Form.
        </p>

      </div>
      `,
    });

    // ==========================================================
    // Confirmation Email to Visitor
    // ==========================================================

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting me! 🚀",
      html: `
      <div style="
        max-width:600px;
        margin:auto;
        padding:40px;
        font-family:Arial,sans-serif;
        background:#ffffff;
        border-radius:12px;
        border:1px solid #e5e7eb;
      ">

        <h2 style="color:#7c3aed;">
          Hi ${name}! 👋
        </h2>

        <p>
          Thank you for reaching out through my portfolio website.
        </p>

        <p>
          I've successfully received your message and will get back to you as soon as possible.
        </p>

        <hr style="margin:30px 0;" />

        <h3>Your Message</h3>

        <div style="
          background:#f8fafc;
          padding:20px;
          border-radius:10px;
          line-height:1.8;
        ">
          ${message.replace(/\n/g, "<br/>")}
        </div>

        <p style="margin-top:35px;">
          Best regards,
        </p>

        <strong>
          Soyeb Ahmed
        </strong>

        <br/>

        Full Stack Developer

        <br/><br/>

        <a
          href="https://github.com/SoyebAhmed5"
          style="
            display:inline-block;
            margin-top:10px;
            padding:12px 22px;
            background:#7c3aed;
            color:#fff;
            text-decoration:none;
            border-radius:8px;
          "
        >
          Visit My GitHub
        </a>

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      { status: 500 }
    );
  }
}