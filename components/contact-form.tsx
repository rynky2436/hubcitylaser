"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { submitContactForm } from "@/app/actions/contact"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! We'll get back to you within 24 hours.",
        })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id="contact-form" action={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" className="text-[#002B5C]">
            First Name *
          </Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="border-[#A5ACAF] focus:border-[#002B5C]"
          />
        </div>
        <div>
          <Label htmlFor="lastName" className="text-[#002B5C]">
            Last Name *
          </Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="border-[#A5ACAF] focus:border-[#002B5C]"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="text-[#002B5C]">
          Email Address *
        </Label>
        <Input id="email" name="email" type="email" required className="border-[#A5ACAF] focus:border-[#002B5C]" />
      </div>

      <div>
        <Label htmlFor="phone" className="text-[#002B5C]">
          Phone Number
        </Label>
        <Input id="phone" name="phone" type="tel" className="border-[#A5ACAF] focus:border-[#002B5C]" />
      </div>

      <div>
        <Label htmlFor="company" className="text-[#002B5C]">
          Company/Organization
        </Label>
        <Input id="company" name="company" type="text" className="border-[#A5ACAF] focus:border-[#002B5C]" />
      </div>

      <div>
        <Label htmlFor="projectType" className="text-[#002B5C]">
          Project Type
        </Label>
        <select
          id="projectType"
          name="projectType"
          className="w-full px-3 py-2 border border-[#A5ACAF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#002B5C] focus:border-[#002B5C]"
        >
          <option value="">Select a project type</option>
          <option value="signage">Signage & Displays</option>
          <option value="industrial">Industrial Marking</option>
          <option value="gifts">Personalized Gifts</option>
          <option value="professional">Professional Items</option>
          <option value="promotional">Promotional Materials</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <Label htmlFor="message" className="text-[#002B5C]">
          Project Details *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Please describe your project, including materials, quantities, timeline, and any specific requirements..."
          className="border-[#A5ACAF] focus:border-[#002B5C]"
        />
      </div>

      {submitStatus.type && (
        <div
          className={`p-4 rounded-md ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#002B5C] hover:bg-[#A5ACAF] hover:text-[#002B5C]"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
