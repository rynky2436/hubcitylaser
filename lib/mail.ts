import nodemailer from "nodemailer"

export type MailInput = {
  to: string
  subject: string
  text: string
  html?: string
  replyTo?: string
}

/**
 * Create a reusable SMTP transport from environment variables.
 * This is host-agnostic and works with any SMTP provider.
 *
 * Required env vars (examples):
 * - SMTP_HOST=smtp.your-provider.com
 * - SMTP_PORT=587
 * - SMTP_USER=your_smtp_username
 * - SMTP_PASS=your_smtp_password
 * Optional:
 * - SMTP_SECURE=true|false (defaults to false)
 * - MAIL_FROM='Engrave Everything Website <website@engraveeverything.us>'
 */
function getTransport() {
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const secure = String(process.env.SMTP_SECURE ?? "false") === "true"

  if (!host || !user || !pass) {
    return null
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })

  return transporter
}

export async function sendMail({ to, subject, text, html, replyTo }: MailInput) {
  const transporter = getTransport()
  const from = process.env.MAIL_FROM || "Engrave Everything Website <website@engraveeverything.us>"

  // If SMTP isn't configured, simulate sending and log the payload for visibility.
  if (!transporter) {
    console.log("[mail simulated] =>", { to, from, subject, text, html, replyTo })
    return { ok: true, simulated: true }
  }

  const info = await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
    replyTo,
  })

  return { ok: true, messageId: info.messageId }
}
