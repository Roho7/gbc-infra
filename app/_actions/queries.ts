// Example query in your Next.js page

import { groq } from "next-sanity"
import { client, fetchSanity, } from "./sanity"

// Define TypeScript interfaces for your Sanity data
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface ImageDimensions {
  width: number
  height: number
  aspectRatio: number
}

export interface ImageType {
  title: string
  alt: string
  caption: string
  imageUrl: string
  dimensions: ImageDimensions
  section: string
  // Add any other fields you need
}

// Query for about page images
const aboutPageImagesQuery = groq`*[_type == "picture" && route == "/about"] {
  title,
  alt,
  caption,
  "imageUrl": image.asset->url,
  "dimensions": image.asset->metadata.dimensions,
  section
}| order(position asc)`

// Function to get about page images with proper typing
export async function getAboutPageImages(): Promise<ImageType[]> {
  const images = await client.fetch<ImageType[]>(aboutPageImagesQuery)
  console.log(images)
  return images
}

// Add more query functions as needed
// For example:

// Query for homepage content
const homePageQuery = `*[_type == "page" && slug.current == "home"][0]{
  title,
  description,
  "sections": sections[]{
    _type,
    heading,
    subheading,
    content,
    "image": image.asset->url
  }
}`

// Interface for homepage data
export interface HomePageData {
  title: string
  description: string
  sections: Array<{
    _type: string
    heading: string
    subheading?: string
    content?: string
    image?: string
  }>
}

// Function to get homepage data
export async function getHomePageData(): Promise<HomePageData> {
  return await fetchSanity<HomePageData>(homePageQuery)
}
  