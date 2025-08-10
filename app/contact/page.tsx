import type { Metadata } from "next"
import JotformEmbed from "./contact-form"

export const metadata: Metadata = {
  title: "Contact — Custom Laser Engraving Quotes | Engrave Everything",
  description:
    "Request a quote for custom laser engraving. We handle one-off gifts and bulk orders with quick turnaround. Use our secure form and we’ll reply fast.",
}

export default function ContactPage() {
  return (
    <main>
      <section className="section-padding">
        <div className="container-max">
          <h1 className="text-3xl md:text-4xl font-bold text-hub-blue mb-4">Get a Quote: Custom Laser Work</h1>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Ready to bring your idea to life? Fill out the form below and we’ll send a personalized quote. Prefer to
            talk? Call{" "}
            <a href="tel:2403247110" className="text-hub-blue underline">
              (240) 324‑7110
            </a>{" "}
            or email{" "}
            <a href="mailto:info@engraveeverything.us" className="text-hub-blue underline">
              info@engraveeverything.us
            </a>
            .
          </p>

          <JotformEmbed />
        </div>
      </section>
    </main>
  )
}
