// Email sent to the site owner when someone submits the Contact form.
// Email clients ignore <style> blocks and modern CSS, so the HTML uses
// tables and inline styles only. Colors mirror the site's design tokens.

type ContactEmailInput = {
  name: string;
  email: string;
  subject: string;
  body: string;
  sentAt: Date;
};

const colors = {
  page: "#050d1a", // navy-950
  card: "#0a192f", // navy-900
  panel: "#112240", // navy-800
  border: "#233554", // navy-700
  accent: "#64ffda",
  heading: "#e2e8f0", // slate-200
  text: "#cbd5e1", // slate-300
  muted: "#8892b0",
};

const sans =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const mono = "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function label(text: string) {
  return `<div style="font-family:${mono};font-size:11px;letter-spacing:2px;color:${colors.accent};text-transform:uppercase;margin:0 0 6px;">${text}</div>`;
}

export function buildContactEmail({ name, email, subject, body, sentAt }: ContactEmailInput) {
  const sentAtText = sentAt.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Dhaka",
  });
  const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: ${subject}`)}`;
  const preview = body.replace(/\s+/g, " ").slice(0, 120);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeBody = escapeHtml(body).replace(/\r?\n/g, "<br>");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>${safeSubject}</title>
</head>
<body style="margin:0;padding:0;background-color:${colors.page};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preview)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${colors.page};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:${colors.card};border:1px solid ${colors.border};border-radius:12px;">
        <tr>
          <td style="height:4px;background-color:${colors.accent};border-radius:12px 12px 0 0;font-size:0;line-height:0;">&nbsp;</td>
        </tr>
        <tr>
          <td style="padding:32px 32px 8px;">
            <div style="font-family:${mono};font-size:12px;letter-spacing:3px;color:${colors.accent};">NEW MESSAGE</div>
            <h1 style="margin:12px 0 0;font-family:${sans};font-size:24px;line-height:32px;font-weight:700;color:${colors.heading};">${safeSubject}</h1>
            <p style="margin:8px 0 0;font-family:${sans};font-size:14px;color:${colors.muted};">Sent from your portfolio contact form &middot; ${sentAtText}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${colors.panel};border:1px solid ${colors.border};border-radius:8px;">
              <tr>
                <td style="padding:16px 20px;border-bottom:1px solid ${colors.border};">
                  ${label("From")}
                  <div style="font-family:${sans};font-size:16px;font-weight:600;color:${colors.heading};">${safeName}</div>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 20px;">
                  ${label("Email")}
                  <a href="mailto:${safeEmail}" style="font-family:${sans};font-size:15px;color:${colors.accent};text-decoration:none;">${safeEmail}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px 0;">
            ${label("Message")}
            <div style="margin-top:4px;padding:20px;border-left:3px solid ${colors.accent};background-color:${colors.panel};border-radius:0 8px 8px 0;font-family:${sans};font-size:15px;line-height:24px;color:${colors.text};">${safeBody}</div>
          </td>
        </tr>
        <tr>
          <td align="left" style="padding:28px 32px 32px;">
            <a href="${replyHref}" style="display:inline-block;padding:12px 28px;background-color:${colors.accent};border-radius:6px;font-family:${sans};font-size:14px;font-weight:600;color:${colors.card};text-decoration:none;">Reply to ${safeName}</a>
          </td>
        </tr>
      </table>
      <p style="margin:20px 0 0;font-family:${mono};font-size:11px;letter-spacing:1px;color:${colors.muted};">Hitting reply goes straight to ${safeEmail}</p>
    </td>
  </tr>
</table>
</body>
</html>`;

  const text = [
    "NEW MESSAGE FROM YOUR PORTFOLIO",
    `Sent ${sentAtText}`,
    "",
    `From:    ${name}`,
    `Email:   ${email}`,
    `Subject: ${subject}`,
    "",
    "Message",
    "-------",
    body,
    "",
    `Reply to this email to answer ${name} directly.`,
  ].join("\n");

  return { subject: `[Portfolio] ${subject}`, text, html };
}
