import Link from "next/link"

interface IndustryTemplateProps {
  title: string
  description: string
  services: string[]
}

export default function IndustryTemplate({ title, description, services }: IndustryTemplateProps) {
  return (
    <>
      <section className="bg-hub-blue text-hub-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{description}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue mb-8">Our Services for {title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">{service}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-hub-blue mb-4">
              Ready to discuss your {title.toLowerCase()} project?
            </h3>
            <p className="text-gray-700 mb-6">Contact us today for a personalized quote and consultation.</p>
            <Link href="/contact" className="btn-primary">
              Get Your Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
