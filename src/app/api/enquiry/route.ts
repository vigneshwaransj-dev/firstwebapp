import nodemailer from "nodemailer";

const allowedTreatments = new Set([
  "Cardiac care",
  "Dental treatment",
  "Joint replacement",
  "Cosmetic & hair restoration",
  "Health check-up",
  "Wellness retreat",
]);

type Enquiry = {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  message: string;
};

function isEnquiry(value: unknown): value is Enquiry {
  if (!value || typeof value !== "object") return false;

  const enquiry = value as Record<string, unknown>;
  return (
    typeof enquiry.name === "string" &&
    enquiry.name.trim().length > 0 &&
    enquiry.name.length <= 120 &&
    typeof enquiry.phone === "string" &&
    enquiry.phone.trim().length > 0 &&
    enquiry.phone.length <= 40 &&
    typeof enquiry.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email) &&
    enquiry.email.length <= 254 &&
    typeof enquiry.treatment === "string" &&
    allowedTreatments.has(enquiry.treatment) &&
    typeof enquiry.message === "string" &&
    enquiry.message.length <= 5000
  );
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return Response.json({ error: "The enquiry is too large." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid enquiry data." }, { status: 400 });
  }

  if (!isEnquiry(payload)) {
    return Response.json(
      { error: "Please check the enquiry details and try again." },
      { status: 400 },
    );
  }

  const { SMTP_USER, SMTP_APP_PASSWORD, ENQUIRY_TO_EMAIL } = process.env;
  if (!SMTP_USER || !SMTP_APP_PASSWORD || !ENQUIRY_TO_EMAIL) {
    console.error("Enquiry email is not configured on the server.");
    return Response.json(
      { error: "Enquiries are temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  const port = Number(process.env.SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_APP_PASSWORD },
  });

  try {
    const name = escapeHtml(payload.name.trim());
    const phone = escapeHtml(payload.phone.trim());
    const email = escapeHtml(payload.email);
    const treatment = escapeHtml(payload.treatment);
    const message = escapeHtml(payload.message.trim() || "No additional details provided.");

    await transporter.sendMail({
      from: SMTP_USER,
      to: ENQUIRY_TO_EMAIL,
      replyTo: payload.email,
      subject: `New enquiry: ${payload.treatment}`,
      text: [
        `Name: ${payload.name.trim()}`,
        `Phone: ${payload.phone.trim()}`,
        `Email: ${payload.email}`,
        `Treatment: ${payload.treatment}`,
        "",
        "Additional details:",
        payload.message.trim() || "None provided",
      ].join("\n"),
      html: `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>New medical travel enquiry</title>
          </head>
          <body style="margin:0;padding:0;background:#f1f6fb;font-family:Arial,Helvetica,sans-serif;color:#10233f;">
            <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
              New ${treatment} enquiry from ${name}.
            </div>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f1f6fb;padding:32px 12px;">
              <tr>
                <td align="center">
                  <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #dce7f2;border-radius:16px;overflow:hidden;">
                    <tr>
                      <td style="padding:28px 32px;background:#1059a5;color:#ffffff;">
                        <p style="margin:0 0 8px;font-size:12px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;color:#d7eaff;">Viki Healthy Travels</p>
                        <h1 style="margin:0;font-size:24px;line-height:1.3;font-weight:700;">New consultation enquiry</h1>
                        <p style="margin:8px 0 0;font-size:14px;line-height:1.5;color:#e8f3ff;">A prospective traveller has submitted the form.</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:28px 32px 12px;">
                        <p style="margin:0 0 18px;font-size:14px;line-height:1.6;color:#52657d;">Please follow up with the enquirer using the contact details below.</p>
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                          <tr><td style="padding:12px 0;border-bottom:1px solid #e8eef5;width:130px;font-size:13px;color:#718096;">Full name</td><td style="padding:12px 0;border-bottom:1px solid #e8eef5;font-size:14px;font-weight:600;color:#10233f;">${name}</td></tr>
                          <tr><td style="padding:12px 0;border-bottom:1px solid #e8eef5;font-size:13px;color:#718096;">Email</td><td style="padding:12px 0;border-bottom:1px solid #e8eef5;font-size:14px;color:#1059a5;"><a href="mailto:${email}" style="color:#1059a5;text-decoration:none;">${email}</a></td></tr>
                          <tr><td style="padding:12px 0;border-bottom:1px solid #e8eef5;font-size:13px;color:#718096;">Phone</td><td style="padding:12px 0;border-bottom:1px solid #e8eef5;font-size:14px;color:#10233f;"><a href="tel:${phone}" style="color:#10233f;text-decoration:none;">${phone}</a></td></tr>
                          <tr><td style="padding:12px 0;font-size:13px;color:#718096;">Treatment</td><td style="padding:12px 0;font-size:14px;font-weight:600;color:#10233f;">${treatment}</td></tr>
                        </table>
                        <div style="margin-top:20px;padding:18px 20px;background:#f5f9fd;border:1px solid #e3edf7;border-radius:10px;">
                          <p style="margin:0 0 8px;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:#718096;">Additional details</p>
                          <p style="margin:0;font-size:14px;line-height:1.7;color:#263b56;white-space:pre-wrap;">${message}</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:20px 32px 26px;">
                        <a href="mailto:${email}" style="display:inline-block;padding:12px 20px;border-radius:999px;background:#1059a5;color:#ffffff;font-size:14px;font-weight:bold;text-decoration:none;">Reply to ${name}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:18px 32px;background:#f8fafc;border-top:1px solid #e8eef5;font-size:11px;line-height:1.6;color:#7b8ba0;">
                        This message was sent from the Viki Healthy Travels website enquiry form. Please handle personal and health information confidentially.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Unable to send enquiry email.", error);
    return Response.json(
      { error: "We could not send your enquiry. Please try again shortly." },
      { status: 502 },
    );
  }
}