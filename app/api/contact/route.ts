import type { NextRequest } from "next/server"
import { sendMail } from "@/lib/mail"

// Destination mailbox for site inquiries
const DESTINATION_EMAIL = "info@engraveeverything.us"

function buildPlainText({
  name,
  email,
  subject,
  message,
  meta,
}: {
  name: string
  email: string
  subject: string
  message: string
  meta: { ip?: string | null; ua?: string | null; referer?: string | null }
}) {
  const lines = [
    `New website inquiry`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    subject ? `Subject: ${subject}` : ``,
    ``,
    `Message:`,
    message,
    ``,
    `--`,
    `Meta:`,
    meta.ip ? `IP: ${meta.ip}` : undefined,
    meta.ua ? `User-Agent: ${meta.ua}` : undefined,
    meta.referer ? `Referer: ${meta.referer}` : undefined,
  ].filter(Boolean)
  return (lines as string[]).join("\n")
}

export async function POST(req: NextRequest) {
  try {
    let name = ""
    let email = ""
    let message = ""
    let subject = ""

    const contentType = req.headers.get("content-type") || ""
    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData()
      name = String(form.get("name") ?? "").trim()
      email = String(form.get("email") ?? "").trim()
      message = String(form.get("message") ?? "").trim()
      subject = String(form.get("subject") ?? "").trim()
    } else {
      const body = (await req.json().catch(() => ({}))) as Record<string, unknown>
      name = typeof body.name === "string" ? body.name.trim() : ""
      email = typeof body.email === "string" ? body.email.trim() : ""
      message = typeof body.message === "string" ? body.message.trim() : ""
      subject = typeof body.subject === "string" ? body.subject.trim() : ""
    }

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 })
    }

    const ua = req.headers.get("user-agent")
    const referer = req.headers.get("referer")
    const ip =
      // next/server exposes x-forwarded-for in headers when behind a proxy; fallback to null
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null

    const finalSubject = subject ? `[Website] ${subject}` : `New inquiry from ${name}`

    const text = buildPlainText({
      name,
      email,
      subject: finalSubject,
      message,
      meta: { ip, ua, referer },
    })

    // Send to info@engraveeverything.us with Reply-To set to the submitter's email
    const result = await sendMail({
      to: DESTINATION_EMAIL,
      subject: finalSubject,
      text,
      replyTo: email,
    })

    return Response.json({
      ok: true,
      delivered: !("simulated" in result),
      message: "Thanks! Your message has been received. We will get back to you shortly.",
      to: DESTINATION_EMAIL,
    })
  } catch (err) {
    console.error("Contact submission error:", err)
    return Response.json({ error: "Unexpected error." }, { status: 500 })
  }
}
