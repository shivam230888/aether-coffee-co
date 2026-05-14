import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

const NOTIFY_EMAIL = "learningbro0823@gmail.com";

const transporter = nodemailer.createTransport({
  host: process.env["SMTP_HOST"] || "smtp.gmail.com",
  port: Number(process.env["SMTP_PORT"] || 587),
  secure: false,
  auth: {
    user: process.env["SMTP_USER"],
    pass: process.env["SMTP_PASS"],
  },
});

function reservationHtml(data: Record<string, string>) {
  return `
    <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#e8e0d0;padding:40px;border:1px solid #2a2a2a;">
      <div style="border-bottom:1px solid #b8860b;padding-bottom:20px;margin-bottom:30px;">
        <h1 style="font-size:22px;letter-spacing:0.15em;color:#b8860b;margin:0;">AETHER COFFEE CO.</h1>
        <p style="margin:6px 0 0;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#666;">New Table Reservation</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${[
          ["Name", data.name],
          ["Email", data.email],
          ["Phone", data.phone || "—"],
          ["Date", data.date],
          ["Time", data.time],
          ["Party Size", data.party],
          ["Special Requests", data.notes || "—"],
        ].map(([label, value]) => `
          <tr>
            <td style="padding:10px 0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#666;width:140px;vertical-align:top;">${label}</td>
            <td style="padding:10px 0;font-size:14px;color:#e8e0d0;vertical-align:top;">${value}</td>
          </tr>
        `).join("")}
      </table>
      <p style="margin-top:30px;font-size:11px;color:#444;letter-spacing:0.1em;">Sent via aethercoffee.co reservation system</p>
    </div>
  `;
}

function inquiryHtml(data: Record<string, string>) {
  return `
    <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#e8e0d0;padding:40px;border:1px solid #2a2a2a;">
      <div style="border-bottom:1px solid #b8860b;padding-bottom:20px;margin-bottom:30px;">
        <h1 style="font-size:22px;letter-spacing:0.15em;color:#b8860b;margin:0;">AETHER COFFEE CO.</h1>
        <p style="margin:6px 0 0;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#666;">New Inquiry</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${[
          ["Name", data.name],
          ["Email", data.email],
          ["Company", data.company || "—"],
          ["Type", data.type],
          ["Message", data.message],
        ].map(([label, value]) => `
          <tr>
            <td style="padding:10px 0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#666;width:140px;vertical-align:top;">${label}</td>
            <td style="padding:10px 0;font-size:14px;color:#e8e0d0;vertical-align:top;">${value}</td>
          </tr>
        `).join("")}
      </table>
      <p style="margin-top:30px;font-size:11px;color:#444;letter-spacing:0.1em;">Sent via aethercoffee.co inquiry system</p>
    </div>
  `;
}

function confirmationHtml(name: string, isReservation: boolean) {
  return `
    <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#e8e0d0;padding:40px;border:1px solid #2a2a2a;">
      <div style="border-bottom:1px solid #b8860b;padding-bottom:20px;margin-bottom:30px;">
        <h1 style="font-size:22px;letter-spacing:0.15em;color:#b8860b;margin:0;">AETHER COFFEE CO.</h1>
      </div>
      <p style="font-size:18px;font-style:italic;color:#e8e0d0;margin-bottom:16px;">Dear ${name},</p>
      ${isReservation
        ? `<p style="font-size:14px;line-height:1.8;color:#aaa;">Your reservation has been received. Our team will confirm your booking within a few hours. We look forward to welcoming you.</p>`
        : `<p style="font-size:14px;line-height:1.8;color:#aaa;">Thank you for reaching out. We've received your inquiry and will respond within 24 hours.</p>`
      }
      <p style="margin-top:30px;font-size:13px;color:#b8860b;letter-spacing:0.1em;">The Aether Team</p>
      <p style="margin-top:30px;font-size:11px;color:#444;letter-spacing:0.1em;">aethercoffee.co · Austin, TX</p>
    </div>
  `;
}

router.post("/api/reservation", async (req, res) => {
  const body = req.body as Record<string, string>;
  const { type, name, email } = body;

  if (!type || !name || !email) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const smtpConfigured = !!(process.env["SMTP_USER"] && process.env["SMTP_PASS"]);

  if (smtpConfigured) {
    const isReservation = type === "reservation";
    const subject = isReservation
      ? `[Aether] New Reservation — ${name} on ${body.date} at ${body.time}`
      : `[Aether] New Inquiry — ${body.type} from ${name}`;

    try {
      await transporter.sendMail({
        from: `"Aether Coffee Co." <${process.env["SMTP_USER"]}>`,
        to: NOTIFY_EMAIL,
        subject,
        html: isReservation ? reservationHtml(body) : inquiryHtml(body),
      });

      await transporter.sendMail({
        from: `"Aether Coffee Co." <${process.env["SMTP_USER"]}>`,
        to: email,
        subject: isReservation ? "Your Aether reservation — confirmed" : "We received your inquiry",
        html: confirmationHtml(name, isReservation),
      });
    } catch (err) {
      req.log.error({ err }, "Failed to send email");
    }
  } else {
    req.log.info({ type, name, email }, "SMTP not configured — reservation/inquiry logged only");
  }

  res.status(200).json({ ok: true });
});

export default router;
