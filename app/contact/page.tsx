"use client"

import type React from "react"
import { useState } from "react"
import HeroSection from "../components/HeroSection"
import { Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    usageType: "", // Added for business or personal use
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage(data.message)
        setFormData({ name: "", email: "", message: "", usageType: "" })
      } else {
        setSubmitMessage(data.error || "An error occurred")
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <HeroSection
        title="Contact Engrave Everything Hagerstown MD"
        description="Ready to discuss your laser engraving project? Get in touch with Hagerstown Maryland's premier laser engraving service for a personalized quote on wood, metal, glass cutting and engraving. Serving businesses throughout Maryland, Delaware, and Virginia."
        backgroundImage="/images/professional.png"
      />

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl font-bold text-hub-blue mb-6">Get Your Free Laser Engraving Quote</h1>
              <p className="text-gray-700 mb-6">
                Contact Engrave Everything for professional laser engraving services in Hagerstown, Maryland. We provide
                laser cutting and engraving on wood, metal, glass, and all materials for businesses throughout MD, DE,
                and VA.
              </p>

              <div className="mb-8">
                <a
                  href="tel:+12401234567" // Replace with your actual phone number
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium text-white bg-hub-blue rounded-lg hover:bg-opacity-90 transition-colors"
                  aria-label="Call us now"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us Now</span>
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hub-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hub-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Laser Engraving Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hub-blue focus:border-transparent"
                    placeholder="Please describe your laser engraving project including materials (wood, metal, glass), quantities, timeline, and any specific requirements..."
                  />
                </div>

                {/* New: Business or Personal Use Checkbox */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Is this for business or personal use? *
                  </label>
                  <div className="flex items-center space-x-4">
                    <label htmlFor="usage-business" className="flex items-center">
                      <input
                        type="radio"
                        id="usage-business"
                        name="usageType"
                        value="business"
                        checked={formData.usageType === "business"}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 text-hub-blue border-gray-300 focus:ring-hub-blue"
                      />
                      <span className="ml-2 text-gray-700">Business Use</span>
                    </label>
                    <label htmlFor="usage-personal" className="flex items-center">
                      <input
                        type="radio"
                        id="usage-personal"
                        name="usageType"
                        value="personal"
                        checked={formData.usageType === "personal"}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 text-hub-blue border-gray-300 focus:ring-hub-blue"
                      />
                      <span className="ml-2 text-gray-700">Personal Use</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Get Free Laser Engraving Quote"}
                </button>

                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg ${submitMessage.includes("error") || submitMessage.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
                    role="alert"
                    aria-live="assertive"
                  >
                    {submitMessage}
                  </div>
                )}
              </form>
              <p className="text-sm text-gray-500 mt-4">
                *Note: File upload functionality is not available directly through this form. Please mention your file
                requirements in the message, and we will follow up to arrange file submission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-hub-blue mb-6">Why Choose Engrave Everything Hagerstown MD?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-hub-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Precision Laser Craftsmanship</h3>
                    <p className="text-gray-600">
                      State-of-the-art laser technology ensures perfect results on wood, metal, glass, and all materials
                      every time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="w-3 h-3 bg-hub-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Turnaround Maryland DE VA</h3>
                    <p className="text-gray-600">
                      Quick project completion for businesses throughout Maryland, Delaware, and Virginia without
                      compromising quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="w-3 h-3 bg-hub-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Competitive Laser Engraving Pricing</h3>
                    <p className="text-gray-600">
                      Fair, transparent pricing for laser engraving projects of all sizes in the Hagerstown MD area.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="w-3 h-3 bg-hub-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Laser Consultation</h3>
                    <p className="text-gray-600">
                      Professional guidance on materials, design, and laser engraving techniques to bring your vision to
                      life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-hub-blue mb-3">Service Areas</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Hagerstown, Maryland (Primary Location)</li>
                  <li>• Maryland (MD) - Statewide Service</li>
                  <li>• Delaware (DE) - All Counties</li>
                  <li>• Virginia (VA) - Northern Virginia</li>
                  <li>• Washington County MD</li>
                  <li>• Frederick County MD</li>
                </ul>
              </div>

              <div className="mt-6 p-6 bg-hub-blue text-hub-white rounded-lg">
                <h3 className="font-semibold mb-3">Materials We Laser Engrave</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• Wood laser engraving</div>
                  <div>• Metal laser cutting</div>
                  <div>• Glass laser etching</div>
                  <div>• Acrylic laser cutting</div>
                  <div>• Plastic laser marking</div>
                  <div>• Everything else!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
