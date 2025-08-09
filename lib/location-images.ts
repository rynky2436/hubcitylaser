// Utility to produce a default image path for a given location name.
// Example: "Cathedral Heights & AU Park, DC" -> "/images/locations/cathedral-heights-au-park-dc.png"

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-")
}

export function defaultLocationImage(locationName: string): string {
  const slug = slugify(locationName || "")
  if (!slug) return "/images/brand-default-og.png"
  return `/images/locations/${slug}.jpg`
}
