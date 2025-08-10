"use client"

type JotformEmbedProps = {
  formUrl?: string
  height?: number
}

export default function JotformEmbed({
  formUrl = "https://form.jotform.com/251976010436051",
  height = 1400,
}: JotformEmbedProps) {
  return (
    <div className="w-full">
      <iframe
        title="Request a Quote — Engrave Everything"
        src={formUrl}
        loading="lazy"
        className="w-full rounded-lg border border-hub-silver bg-white"
        style={{ minHeight: height }}
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="mt-3 text-sm text-gray-600 text-center">
        Having trouble with the embedded form?{" "}
        <a href={formUrl} target="_blank" rel="noopener noreferrer" className="text-hub-blue underline">
          Open the form in a new tab
        </a>
        .
      </p>
    </div>
  )
}
