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
    await transporter.sendMail({
      from: SMTP_USER,
      to: ENQUIRY_TO_EMAIL,
      replyTo: payload.email,
      subject: "New Viki Healthy Travels enquiry",
      text: [
        `Name: ${payload.name.trim()}`,
        `Phone: ${payload.phone.trim()}`,
        `Email: ${payload.email}`,
        `Treatment: ${payload.treatment}`,
        "",
        "Additional details:",
        payload.message.trim() || "None provided",
      ].join("\n"),
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