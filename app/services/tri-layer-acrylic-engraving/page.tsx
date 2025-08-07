import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Layers, Zap, Award, Building2 } from 'lucide-react'
import ServiceCategoryTemplate from '@/app/components/ServiceCategoryTemplate'

export const metadata = {
  title: 'Tri-Layer Acrylic Engraving Services | EZ Engrave Everything',
  description: 'Professional tri-layer acrylic engraving for business signage, awards, and industrial applications. Precision laser engraving with vibrant color contrast and durability.',
}

export default function TriLayerAcrylicEngravingPage() {
  const processSteps = [
    {
      icon: <Layers className="w-8 h-8 text-[#002B5C]" />,
      title: "Material Selection",
      description: "Choose from premium tri-layer acrylic sheets with contrasting color combinations for optimal visual impact."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#002B5C]" />,
      title: "Precision Laser Setup",
      description: "Configure laser parameters for exact depth control to reveal the contrasting layer without burning through."
    },
    {
      icon: <Award className="w-8 h-8 text-[#002B5C]" />,
      title: "Expert Engraving",
      description: "Execute precise engraving with our advanced laser systems, ensuring clean edges and consistent depth."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#002B5C]" />,
      title: "Quality Finishing",
      description: "Inspect and finish each piece to ensure perfect contrast, readability, and professional appearance."
    }
  ]

  const serviceCategories = [
    {
      title: "Business Signage",
      description: "Professional office signs, nameplates, and directory boards with crisp, high-contrast text and logos.",
      image: "/images/tri-color-business-signage.png",
      features: ["Door signs", "Desk nameplates", "Directory boards", "Reception signage"]
    },
    {
      title: "Awards & Recognition",
      description: "Elegant awards, plaques, and recognition pieces that showcase achievements with professional presentation.",
      image: "/images/tri-color-awards.png",
      features: ["Employee awards", "Achievement plaques", "Recognition boards", "Trophy plates"]
    },
    {
      title: "Decorative Applications",
      description: "Custom decorative pieces for homes and offices, including personalized gifts and artistic displays.",
      image: "/images/tri-color-decorative.png",
      features: ["Wall art", "Personalized gifts", "Home decor", "Custom displays"]
    },
    {
      title: "Industrial Identification",
      description: "Durable industrial labels, equipment tags, and safety signage designed for harsh environments.",
      image: "/images/tri-color-industrial.png",
      features: ["Equipment labels", "Safety signs", "Control panel markers", "Asset tags"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002B5C] to-[#004080] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Tri-Layer Acrylic Engraving
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Precision laser engraving on specialized tri-layer acrylic materials creates stunning visual contrast 
                for professional signage, awards, and industrial applications. Our advanced techniques ensure perfect 
                depth control and crisp, readable results every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-[#002B5C] hover:bg-gray-100">
                  <Link href="/contact">Get Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#002B5C]">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/tri-color-acrylic-hero.png"
                alt="Tri-layer acrylic engraving samples showing precision and contrast"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Special */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5C] mb-4">
              Why Tri-Layer Acrylic Engraving is Challenging
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tri-layer acrylic engraving requires exceptional precision and expertise. Unlike standard engraving, 
              this process demands exact depth control to reveal the contrasting middle layer without penetrating 
              the bottom layer, creating perfect visual contrast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/tri-color-acrylic-process.png"
                alt="Tri-layer acrylic engraving process showing layer precision"
                width={500}
                height={350}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#002B5C] text-white p-2 rounded-full flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Precision Depth Control</h3>
                  <p className="text-gray-600">
                    Requires exact laser calibration to engrave through the top layer and reveal the contrasting 
                    middle layer without damaging the base material.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#002B5C] text-white p-2 rounded-full flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Advanced Laser Technology</h3>
                  <p className="text-gray-600">
                    Utilizes sophisticated laser systems with precise power and speed control to achieve 
                    consistent results across different material thicknesses.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#002B5C] text-white p-2 rounded-full flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expert Craftsmanship</h3>
                  <p className="text-gray-600">
                    Years of experience and specialized knowledge ensure perfect contrast, clean edges, 
                    and professional-quality results for every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5C] mb-4">
              Our Tri-Layer Engraving Process
            </h2>
            <p className="text-lg text-gray-600">
              A meticulous 4-step process ensures perfect results every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-100 p-4 rounded-full">
                      {step.icon}
                    </div>
                  </div>
                  <div className="bg-[#002B5C] text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-[#002B5C]">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5C] mb-4">
              Tri-Layer Acrylic Applications
            </h2>
            <p className="text-lg text-gray-600">
              Professional solutions for business, industrial, and decorative needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#002B5C] mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#002B5C] text-white rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Technical Expertise You Can Trust
                </h2>
                <p className="text-lg mb-6 text-gray-200">
                  Our specialized knowledge in tri-layer acrylic engraving sets us apart. We understand the 
                  unique challenges of working with these materials and have perfected our techniques to 
                  deliver consistent, professional results.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Advanced laser calibration techniques</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Extensive material knowledge and testing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Quality control and consistency standards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Custom solutions for unique applications</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/tri-layer-acrylic-sample.png"
                  alt="Tri-layer acrylic sample showing precision"
                  width={250}
                  height={200}
                  className="rounded-lg"
                />
                <Image
                  src="/images/tri-layer-acrylic-precision.png"
                  alt="Close-up of tri-layer engraving precision"
                  width={250}
                  height={200}
                  className="rounded-lg"
                />
                <Image
                  src="/images/tri-layer-industrial-labels.png"
                  alt="Industrial tri-layer labels"
                  width={250}
                  height={200}
                  className="rounded-lg"
                />
                <Image
                  src="/images/tri-color-business-signage.png"
                  alt="Business signage examples"
                  width={250}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#002B5C] mb-4">
            Ready for Professional Tri-Layer Acrylic Engraving?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experts handle your tri-layer acrylic engraving project. Contact us today for a 
            consultation and quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#002B5C] hover:bg-[#004080]">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#002B5C] text-[#002B5C] hover:bg-[#002B5C] hover:text-white">
              <Link href="/services">Explore Other Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
