import { NextRequest } from 'next/server'
import { SITE_CONFIG } from '@/lib/site-config'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const name = typeof body?.name === 'string' ? body.name.trim() : ''
    const email = typeof body?.email === 'string' ? body.email.trim() : ''
    const message = typeof body?.message === 'string' ? body.message.trim() : ''

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    // No environment variables available: we are not sending a real email here.
    // In production, integrate your SMTP or transactional email service here,
    // using SITE_CONFIG.email as the business inbox.
    const payloadForDelivery = {
      to: SITE_CONFIG.email, // info@engraveeverything.us
      from: email,
      subject: `New inquiry from ${name}`,
      text: message,
    }

    console.log('Contact submission:', payloadForDelivery)

    return Response.json({
      ok: true,
      message: 'Thanks! Your message has been received.',
      to: SITE_CONFIG.email,
    })
  } catch (err) {
    return Response.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}
