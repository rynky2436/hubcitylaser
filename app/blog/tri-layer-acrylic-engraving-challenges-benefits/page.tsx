import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, Zap, Award, Shield, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: "Tri-Layer Acrylic Engraving: Why Most Engravers Won't Touch It | EZ Engrave Everything",
  description:
    "Discover why tri-layer acrylic engraving is one of the most challenging laser engraving processes, its applications for signs and patches, and why finding the right specialist matters for your business.",
}

export default function TriLayerAcrylicBlogPost() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#002B5C]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#002B5C]">Blog</Link>
          <span>/</span>
          <span className="text-[#002B5C]">Tri-Layer Acrylic Engraving</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mb-12">
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/tri-layer-acrylic-hero.png"
            alt="Tri-layer acrylic engraving samples showing precision work"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-[#A5ACAF] mb-4">January 8, 2025 • 8 min read</div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#002B5C] mb-6">
            Tri-Layer Acrylic Engraving: Why Most Engravers Won't Touch It & Why You Should Care
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tri-layer acrylic engraving represents one of the most technically demanding processes in the laser engraving industry. 
            While the results are stunning and highly professional, the complexity involved means most engravers simply won't take on these projects. 
            Here's why this specialized service is so challenging—and why it's worth finding an expert who can deliver.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* What is Tri-Layer Acrylic */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-6">What is Tri-Layer Acrylic?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p className="text-gray-700 mb-4">
                Tri-layer acrylic consists of three distinct layers: a colored top layer, a contrasting middle core, 
                and a protective backing. When laser engraved, the top layer is precisely removed to reveal the 
                contrasting color beneath, creating crisp, professional-looking text and graphics.
              </p>
              <p className="text-gray-700">
                This material is ideal for applications requiring high contrast, durability, and a premium appearance—
                making it perfect for business signage, equipment labels, hat patches, awards, and decorative elements.
              </p>
            </div>
            <div className="relative h-64">
              <Image
                src="/images/tri-color-acrylic-process.png"
                alt="Tri-layer acrylic process diagram"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Why Most Engravers Avoid It */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-6">
            <AlertTriangle className="inline-block mr-3 h-8 w-8 text-red-500" />
            Why Most Engravers Won't Touch Tri-Layer Acrylic
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#002B5C] mb-3">Precise Power Control Required</h3>
                <p className="text-gray-700">
                  The laser must remove exactly the right amount of material—too little and the engraving is incomplete, 
                  too much and you burn through to the backing layer, ruining the piece.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#002B5C] mb-3">Speed & Frequency Mastery</h3>
                <p className="text-gray-700">
                  Each color combination requires different settings. What works for white-on-black won't work for 
                  red-on-white, requiring extensive testing and expertise.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#002B5C] mb-3">Material Inconsistencies</h3>
                <p className="text-gray-700">
                  Different manufacturers and even different batches can behave differently under laser engraving, 
                  requiring constant adjustment and testing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#002B5C] mb-3">High Waste Potential</h3>
                <p className="text-gray-700">
                  Mistakes are costly—tri-layer acrylic is expensive, and ruined pieces can't be salvaged, 
                  making many engravers hesitant to take on these projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Common Applications */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-6">Popular Applications for Tri-Layer Acrylic</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="relative h-48 mb-4">
                <Image
                  src="/images/tri-color-business-signage.png"
                  alt="Business signage made with tri-layer acrylic"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#002B5C] mb-2">Business Signage</h3>
              <p className="text-gray-600 text-sm">
                Professional door signs, office nameplates, and directional signage with crisp, high-contrast text.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-4">
                <Image
                  src="/images/tri-color-awards.png"
                  alt="Awards and recognition items"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#002B5C] mb-2">Awards & Recognition</h3>
              <p className="text-gray-600 text-sm">
                Employee recognition plaques, achievement awards, and commemorative pieces with professional appearance.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-48 mb-4">
                <Image
                  src="/images/tri-color-industrial.png"
                  alt="Industrial labels and equipment tags"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#002B5C] mb-2">Industrial Labels</h3>
              <p className="text-gray-600 text-sm">
                Equipment tags, safety labels, and control panel markers that need to withstand harsh environments.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#002B5C] mb-4">Other Popular Uses:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Hat patches and uniform accessories</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Control panel labels and buttons</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Decorative architectural elements</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Memorial and commemorative plaques</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Trade show displays and booth signage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Custom promotional items</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-6">Why Tri-Layer Acrylic is Worth the Investment</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-6">
                <Shield className="h-8 w-8 text-[#002B5C] mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#002B5C] mb-2">Exceptional Durability</h3>
                  <p className="text-gray-700">
                    Unlike printed signs that fade or peel, tri-layer acrylic engraving is permanent. The contrasting 
                    color is integral to the material, not applied on top, ensuring longevity even in harsh conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Zap className="h-8 w-8 text-[#002B5C] mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#002B5C] mb-2">Superior Contrast</h3>
                  <p className="text-gray-700">
                    The high contrast between layers creates exceptional readability, making it ideal for safety signage, 
                    equipment labels, and any application where visibility is critical.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-6">
                <Award className="h-8 w-8 text-[#002B5C] mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#002B5C] mb-2">Professional Appearance</h3>
                  <p className="text-gray-700">
                    The clean, crisp edges and consistent depth create a premium look that elevates your brand image 
                    and communicates quality and attention to detail.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Wrench className="h-8 w-8 text-[#002B5C] mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#002B5C] mb-2">Versatile Applications</h3>
                  <p className="text-gray-700">
                    From indoor office signage to outdoor industrial labels, tri-layer acrylic performs consistently 
                    across a wide range of environments and applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Finding the Right Specialist */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-6">Finding the Right Tri-Layer Acrylic Specialist</h2>
          
          <div className="bg-[#002B5C] text-white p-8 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">What to Look For:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Experience & Portfolio</h4>
                <p className="text-gray-200 mb-4">
                  Ask to see examples of their tri-layer work. Quality specialists will have a portfolio showcasing 
                  various color combinations and applications.
                </p>
                
                <h4 className="font-semibold mb-2">Material Knowledge</h4>
                <p className="text-gray-200">
                  They should understand different manufacturers, color combinations, and be able to recommend 
                  the best material for your specific application.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Testing Process</h4>
                <p className="text-gray-200 mb-4">
                  Professional shops will test settings on sample pieces before running your job, ensuring 
                  perfect results without waste.
                </p>
                
                <h4 className="font-semibold mb-2">Quality Guarantee</h4>
                <p className="text-gray-200">
                  Reputable specialists stand behind their work and will remake pieces that don't meet 
                  their quality standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion & CTA */}
        <section className="mb-12">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002B5C] mb-4">
              Ready for Professional Tri-Layer Acrylic Engraving?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              At EZ Engrave Everything, we've mastered the art and science of tri-layer acrylic engraving. 
              With years of experience and specialized equipment, we deliver the precision and quality your 
              business deserves—every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#002B5C] hover:bg-[#A5ACAF]">
                <Link href="/services/tri-layer-acrylic-engraving">View Our Tri-Layer Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#002B5C] text-[#002B5C] hover:bg-[#002B5C] hover:text-white">
                <Link href="/contact">Get Your Quote Today</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold text-[#002B5C] mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/precision-laser-engraving-solutions" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-105">
                <div className="relative w-full h-32">
                  <Image
                    src="/images/uid-laser-marking.png"
                    alt="Precision laser engraving solutions"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#002B5C] mb-2 group-hover:underline">
                    Precision Laser Engraving Solutions for B2B
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover high-performance laser engraving solutions for B2B clients, including UID tags and medical devices.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog/your-business-deserves-the-right-laser" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-105">
                <div className="relative w-full h-32">
                  <Image
                    src="/images/industrial-lasers-benefit-business.png"
                    alt="Industrial laser benefits"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#002B5C] mb-2 group-hover:underline">
                    Your Business Deserves the Right Laser
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Learn how different laser types empower diverse industries with precision marking capabilities.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
