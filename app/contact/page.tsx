import type { Metadata } from "next"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Hub City Engraving",
  description:
    "Get in touch with Hub City Engraving for custom quotes, project consultations, and laser service inquiries. Professional laser cutting, engraving, and marking services in Hagerstown, Maryland.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#002B5C] mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700">
              Ready to start your project? Get in touch for a custom quote or consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-[#A5ACAF]">
                <CardHeader>
                  <CardTitle className="text-[#002B5C]">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-[#A5ACAF]">
                <CardHeader>
                  <CardTitle className="text-[#002B5C]">Get In Touch</CardTitle>
                  <CardDescription>Multiple ways to reach us for your laser service needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#002B5C]" />
                    <div>
                      <p className="font-semibold text-[#002B5C]">Phone</p>
                      <p className="text-gray-700">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#002B5C]" />
                    <div>
                      <p className="font-semibold text-[#002B5C]">Email</p>
                      <p className="text-gray-700">info@hubcityengraving.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#002B5C]" />
                    <div>
                      <p className="font-semibold text-[#002B5C]">Location</p>
                      <p className="text-gray-700">
                        Hagerstown, Maryland
                        <br />
                        Serving the Mid-Atlantic Region
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#002B5C]" />
                    <div>
                      <p className="font-semibold text-[#002B5C]">Business Hours</p>
                      <p className="text-gray-700">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="relative h-64 w-full rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                <Image
                  src="/images/hub-city-logo-blue.png"
                  alt="Hub City Engraving - Professional laser services in Hagerstown, Maryland"
                  width={200}
                  height={200}
                  className="h-32 w-auto opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
