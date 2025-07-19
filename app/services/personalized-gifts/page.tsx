import type { Metadata } from "next"
import Link from "next/link"
import ServiceCategoryTemplate from "../../components/ServiceCategoryTemplate"

export const metadata: Metadata = {
  title: "Personalized Gifts Laser Engraving | DC, MD & VA",
  description:
    "Custom laser-engraved personalized gifts for all occasions in DC, MD & VA. Unique keepsakes, home decor & pet tags. Fast turnaround. Order yours today!",
  keywords:
    "personalized gifts laser engraving Washington DC, custom keepsakes Maryland, wedding gifts Virginia, home decor Hagerstown, pet tags Potomac, holiday ornaments Ashburn",
}

export default function PersonalizedGiftsPage() {
  const serviceItems = [
    "Wedding keepsakes laser engraved on wood and metal with custom designs",
    "Retirement gifts and milestone recognition, tailored to individual achievements",
    "Custom home décor laser cut and engraved, including intricate patterns",
    "Pet accessories and identification tags, durable and personalized",
    "Holiday ornaments and seasonal gifts, available for batch production for corporate gifting",
  ]

  const expertiseContent = (
    <div className="space-y-6">
      <p className="text-lg">
        Engrave Everything transforms ordinary items into extraordinary personalized gifts through our precision laser
        engraving services. We help customers throughout the DMV area create meaningful keepsakes and custom items that
        celebrate special moments and relationships.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Personalization Expertise</h3>
          <p>
            Our laser engraving specialists can transform your ideas, photos, handwriting samples, and custom designs
            into permanent keepsakes on a wide variety of materials, creating truly one-of-a-kind gifts.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Material Versatility</h3>
          <p>
            From wood and leather to glass, metal, and stone, our laser technology can personalize virtually any
            material, giving you endless options for creating the perfect gift for any occasion.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Design Assistance</h3>
          <p>
            Not sure how to bring your gift idea to life? Our in-house design team can help you create the perfect
            personalized gift, offering suggestions for materials, layouts, and engraving techniques.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Quick Turnaround</h3>
          <p>
            We understand that gifts are often needed for specific dates and occasions. Our efficient production process
            allows us to deliver most personalized gifts within 3-5 business days, with rush options available.
          </p>
        </div>
      </div>
    </div>
  )

  const locationContent = (
    <div className="space-y-4">
      <p className="text-lg">
        Engrave Everything creates custom personalized gifts for customers throughout Washington DC, Maryland, and
        Northern Virginia. From our Hagerstown facility, we serve clients across the region including:
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <ul className="space-y-2">
          <li className="font-semibold">Washington DC Area</li>
          <li>Georgetown</li>
          <li>Dupont Circle</li>
          <li>Capitol Hill</li>
          <li>Downtown</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">Maryland</li>
          <li>Hagerstown</li>
          <li>Frederick</li>
          <li>Rockville</li>
          <li>Bethesda</li>
          <li>Potomac</li>
          <li>Silver Spring</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">Virginia</li>
          <li>Arlington</li>
          <li>Alexandria</li>
          <li>Fairfax</li>
          <li>Ashburn</li>
          <li>Reston</li>
          <li>Loudoun County</li>
        </ul>
      </div>

      <p className="mt-4">
        Our local presence means we can provide personalized service and quick turnaround times for customers throughout
        the DMV area. We offer convenient consultations to help you select the perfect personalized gift for any
        occasion.
      </p>

      <p className="font-semibold">
        Need a last-minute gift? We offer rush services and local pickup options for time-sensitive gift needs.
      </p>
    </div>
  )

  const additionalContent = (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-[#002B5C]">Personalized Gift Applications</h2>

      <div className="mb-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Wedding & Anniversary Gifts</h3>
          <p className="mb-4">
            Celebrate love and commitment with custom laser-engraved wedding and anniversary gifts. Our personalized
            keepsakes become cherished mementos that couples will treasure for years to come.
          </p>
          <p>Popular wedding gifts include:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Custom cutting boards with names and dates</li>
            <li>Personalized wine boxes and glasses</li>
            <li>Wedding photo frames with custom engraving</li>
            <li>Custom signage for wedding venues</li>
            <li>Bridal party gifts and favors</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Home Décor & Housewares</h3>
          <p className="mb-4">
            Transform living spaces with custom laser-engraved home décor items. Our personalized housewares add a
            unique touch to any home and make thoughtful gifts for housewarmings and special occasions.
          </p>
          <p>Custom home items include:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Family name signs and established date plaques</li>
            <li>Custom coasters and serving boards</li>
            <li>Decorative wall art with personalized designs</li>
            <li>Kitchen accessories with custom engraving</li>
            <li>Photo frames with names and special dates</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg bg-gray-50 p-6">
        <h3 className="mb-4 text-xl font-semibold text-[#002B5C]">Pet Accessories & Identification</h3>
        <p className="mb-4">
          Keep your furry friends safe and stylish with custom laser-engraved pet tags and accessories. Our durable pet
          identification products combine functionality with personalized style.
        </p>
        <p>
          Learn more about our{" "}
          <Link href="/services" className="font-medium text-[#002B5C] underline">
            complete gift catalog
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-medium text-[#002B5C] underline">
            contact us
          </Link>{" "}
          to discuss your personalized gift ideas.
        </p>
      </div>
    </div>
  )

  return (
    <ServiceCategoryTemplate
      title="Personalized Gifts & Custom Items"
      description="Create unique and memorable gifts with our custom laser engraving services. Perfect for weddings, retirements, home decor, and special occasions, adding a personal touch to every item."
      keywords={metadata.keywords as string}
      heroDescription="Create unique and memorable gifts with our custom laser engraving services. Perfect for weddings, retirements, home decor, and special occasions, adding a personal touch to every item."
      backgroundImage="/images/events-holiday.png"
      overviewTitle="Personalized Gifts - Engrave Everything's Expertise"
      overviewParagraph1="Finding the perfect gift that truly expresses your sentiments can be a challenge. Engrave Everything specializes in transforming ordinary items into extraordinary personalized gifts through our precision laser engraving services."
      overviewParagraph2="We help you create meaningful keepsakes and custom items that celebrate special moments, relationships, and milestones. From custom cutting boards to engraved photo frames, our personalized gifts are designed to be cherished for years to come."
      overviewImage="/images/anniversary-cutting-board.png"
      overviewImageAlt="Laser engraved personalized cutting board"
      overviewFeature1Title="Unique Customization"
      overviewFeature1Description="Transform your ideas, photos, and designs into one-of-a-kind engraved gifts."
      overviewFeature2Title="Wide Material Range"
      overviewFeature2Description="Personalize items made from wood, glass, metal, leather, and more."
      detailedServicesTitle="Specific Applications for Personalized Gifts"
      detailedServices={[
        {
          title: "Wedding & Anniversary Gifts",
          description: "Celebrate love and commitment with custom laser-engraved wedding and anniversary gifts.",
          applications: [
            "Custom cutting boards with names and dates",
            "Personalized wine boxes and glasses",
            "Wedding photo frames with custom engraving",
            "Custom signage for wedding venues",
            "Bridal party gifts and favors",
          ],
          image: "/images/wedding-favors.png",
          alt: "Laser engraved wedding favors",
        },
        {
          title: "Home Décor & Housewares",
          description:
            "Transform living spaces with custom laser-engraved home décor items and personalized housewares.",
          applications: [
            "Family name signs and established date plaques",
            "Custom coasters and serving boards",
            "Decorative wall art with personalized designs",
            "Kitchen accessories with custom engraving",
            "Photo frames with names and special dates",
          ],
          image: "/images/christmas-decor.png",
          alt: "Laser engraved home decor item",
        },
        {
          title: "Pet Accessories & Identification",
          description: "Keep your furry friends safe and stylish with custom laser-engraved pet tags and accessories.",
          applications: [
            "Personalized pet ID tags",
            "Engraved pet food bowls",
            "Custom pet memorial stones",
            "Pet keepsake boxes",
            "Pet birthday accessories",
          ],
          image: "/images/pet-tag.png",
          alt: "Laser engraved pet tag",
        },
        {
          title: "Holiday & Seasonal Gifts",
          description:
            "Create festive and memorable gifts for any holiday or special season with custom laser engraving.",
          applications: [
            "Christmas ornaments with custom designs",
            "Valentine's Day gifts with personalized messages",
            "Mother's/Father's Day gifts",
            "Thanksgiving host gifts",
            "Easter basket tags and decor",
          ],
          image: "/images/events-holiday.png",
          alt: "Laser engraved holiday gift",
        },
      ]}
      ctaTitle="Ready to Create a Truly Unique Gift?"
      ctaDescription="Contact Hub City Laser today for a personalized consultation and quote on your custom gift ideas. Let us help you make every occasion special."
      ctaButtonText="Order Personalized Gifts"
      ctaLink="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation"
      secondaryCtaText="View All Services"
      secondaryCtaLink="/services"
    />
  )
}
