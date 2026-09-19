"use server";

import { buildContactEmail } from "@/lib/contact-email";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "company")) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const name = field(formData, "name");
  const email = field(formData, "email");
  const subject = field(formData, "subject");
  const body = field(formData, "body");

  if (!name || !email || !subject || !body) {
    return { status: "error", message: "Please fill in every field." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (name.length > 100 || subject.length > 200 || body.length > 5000) {
    return { status: "error", message: "Your message is too long." };
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  const mailpitUrl = process.env.MAILPIT_URL;

  if (!to || (!apiKey && !mailpitUrl)) {
    console.error("Contact form: set CONTACT_TO_EMAIL and either RESEND_API_KEY or MAILPIT_URL.");
    return {
      status: "error",
      message: "Sorry, the contact form isn't available right now.",
    };
  }

  const mail = buildContactEmail({ name, email, subject, body, sentAt: new Date() });

  let response: Response;
  try {
    // Local development: deliver to Mailpit's send API instead of Resend.
    response = mailpitUrl
      ? await fetch(`${mailpitUrl.replace(/\/$/, "")}/api/v1/send`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            From: { Email: "portfolio@localhost", Name: "Portfolio Contact" },
            To: [{ Email: to }],
            ReplyTo: [{ Email: email, Name: name }],
            Subject: mail.subject,
            Text: mail.text,
            HTML: mail.html,
          }),
        })
      : await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>",
            to: [to],
            reply_to: `${name} <${email}>`,
            ...mail,
          }),
        });
  } catch (error) {
    console.error("Contact form: mail request failed", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }

  if (!response.ok) {
    console.error("Contact form: mail send failed", response.status, await response.text());
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }

  return { status: "success", message: "Thanks! Your message has been sent." };
}
