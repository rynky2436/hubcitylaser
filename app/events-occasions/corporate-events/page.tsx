import EventTemplate from "../../components/EventTemplate"

export default function CorporateEventsPage() {
  return (
    <EventTemplate
      title="Custom Corporate Event Engraving | Awards, Gifts & Signage"
      description="Enhance your corporate events with custom laser-engraved awards, branded gifts, and professional signage. Perfect for milestones, employee recognition, and client appreciation."
      keywords="corporate event awards, engraved corporate gifts, branded promotional items, corporate event signage, employee recognition awards, client appreciation gifts"
      image="/images/events-corporate.png"
      intro="Corporate events are crucial for celebrating achievements, fostering team spirit, and strengthening client relationships. Hub City Laser provides premium laser-engraved products that elevate your brand, recognize excellence, and leave a lasting impression on employees and clients alike."
      sections={[
        {
          heading: "Prestigious Corporate Awards",
          content:
            "Recognize outstanding performance and dedication with custom-designed awards that reflect your company's values and prestige.",
          examples: [
            {
              name: "Engraved Employee Recognition Awards",
              description:
                "Sleek acrylic, glass, or metal awards personalized with employee names, achievements, and company branding.",
              image: "/images/corporate-award.png",
            },
            {
              name: "Custom Corporate Plaques",
              description:
                "Elegant wooden or metal plaques for sales achievements, years of service, or special project recognition.",
              image: "/images/corporate-recognition-plaque.png",
            },
            {
              name: "Deal Toys & Financial Tombs",
              description:
                "Custom-designed acrylic or crystal deal toys commemorating significant business transactions and milestones.",
              image: "/images/corporate-deal-toy.png",
            },
          ],
        },
        {
          heading: "Branded Gifts & Event Signage",
          content:
            "Enhance your corporate event experience with branded items that reinforce your company's image and provide practical value.",
          examples: [
            {
              name: "Custom Event Signage",
              description:
                "Professional laser-cut or engraved signs for registration desks, directional guidance, or branded backdrops.",
              image: "/images/corporate-event-signage.png",
            },
            {
              name: "Engraved Executive Gifts",
              description:
                "High-quality personalized gifts like leather portfolios, metal pens, or desk accessories for VIPs and key clients.",
              image: "/images/corporate-executive-gift.png",
            },
            {
              name: "Branded Promotional Items",
              description:
                "Custom-engraved items such as tumblers, keychains, or notebooks, perfect for swag bags or employee appreciation.",
              image: "/images/corporate-branded-gift.png",
            },
          ],
        },
      ]}
      ctaText="Elevate Your Next Corporate Event"
      ctaLink="/contact"
    />
  )
}
