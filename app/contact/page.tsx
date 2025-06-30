import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Hub City Laser | Get a Custom Engraving Quote",
  description:
    "Contact Hub City Laser for custom laser engraving services in Washington DC, Maryland, and Northern VA. Request a quote for your business signage, awards, gifts, and more.",
  keywords:
    "contact laser engraving, custom engraving quote, laser engraving services DC, laser engraving Maryland, laser engraving Northern VA, business engraving, custom signs, awards, personalized gifts",
}

export default function ContactPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-hub-blue mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Have a project in mind or need a custom quote? Reach out to us! We're here to help with all your laser
          engraving needs in Washington DC, Maryland, and Northern VA.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-white shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-hub-blue">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" required type="text" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="your@example.com" required type="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project Inquiry" required type="text" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea className="min-h-[120px]" id="message" placeholder="Tell us about your project..." required />
              </div>
              <Button className="w-full bg-hub-blue text-hub-white hover:bg-hub-blue/90" type="submit">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-8">
          <Card className="bg-white shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-hub-blue">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-hub-blue" />
                <a href="tel:2403247110" className="text-lg text-gray-800 hover:underline">
                  (240) 324-7110
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-hub-blue" />
                <a href="mailto:info@engraveeverything.us" className="text-lg text-gray-800 hover:underline">
                  info@engraveeverything.us
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-hub-blue mt-1" />
                <p className="text-lg text-gray-800">Serving Washington DC, Maryland & Northern VA</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-hub-blue">Our Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>1. **Consultation:** Share your ideas and requirements with our team.</p>
              <p>2. **Design & Quote:** We'll create a custom design and provide a detailed quote.</p>
              <p>
                3. **Production:** Our skilled technicians bring your vision to life with precision laser engraving.
              </p>
              <p>4. **Delivery:** Receive your high-quality, custom-engraved products.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
