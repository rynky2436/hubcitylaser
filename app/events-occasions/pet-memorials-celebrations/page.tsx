import EventTemplate from "../../components/EventTemplate"

export default function PetMemorialsCelebrationsPage() {
  return (
    <EventTemplate
      title="Pet Memorials & Celebrations | Custom Laser Engraved Tributes"
      description="Honor your beloved pets with custom laser-engraved memorial stones, keepsake boxes, and personalized accessories for birthdays and celebrations. Unique tributes for your furry friends."
      keywords="pet memorial stone, engraved pet keepsake, personalized pet tag, pet birthday gifts, custom pet urn, laser engraved pet tribute"
      image="/images/events-pet-memorials.png"
      intro="Our pets are cherished members of our families, bringing immense joy and unconditional love. At Hub City Laser, we understand the deep bond you share and offer custom laser-engraved items to honor their memory or celebrate their special moments, creating lasting tributes and joyful keepsakes."
      sections={[
        {
          heading: "Heartfelt Pet Memorials",
          content:
            "Create a lasting tribute to your beloved companion with personalized memorial items that honor their memory.",
          examples: [
            {
              name: "Engraved Pet Memorial Stones",
              description:
                "Custom-engraved natural stone or slate markers with your pet's name, dates, and a loving message for gardens or special places.",
              image: "/images/pet-memorial-stone.png",
            },
            {
              name: "Personalized Pet Keepsake Boxes",
              description:
                "Wooden boxes engraved with your pet's name and paw prints, perfect for storing collars, photos, or other cherished items.",
              image: "/images/pet-keepsake-box.png",
            },
            {
              name: "Custom Engraved Pet Urns",
              description:
                "Elegant wooden or metal urns personalized with your pet's name and a loving inscription, providing a dignified resting place.",
              image: "/images/pet-urn.png",
            },
          ],
        },
        {
          heading: "Joyful Pet Celebrations",
          content: "Celebrate your pet's life and milestones with fun, personalized accessories and gifts.",
          examples: [
            {
              name: "Engraved Pet Tags",
              description:
                "Custom metal or acrylic pet tags with their name, contact info, or a fun design, ensuring they're always identifiable.",
              image: "/images/pet-tag.png",
            },
            {
              name: "Personalized Pet Food Bowls",
              description:
                "Engraved ceramic or metal food and water bowls with your pet's name, adding a custom touch to mealtime.",
              image: "/images/pet-food-bowl.png",
            },
            {
              name: "Custom Pet Birthday Accessories",
              description:
                "Laser-cut wooden birthday signs, cake toppers, or bandanna tags for your pet's special day.",
              image: "/images/pet-birthday-accessories.png",
            },
          ],
        },
      ]}
      ctaText="Create Your Custom Pet Tributes"
      ctaLink="/contact"
    />
  )
}
