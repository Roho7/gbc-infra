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

export interface DocumentType {
  title: string
  category: string
  url: string
  caption: string
}
export interface ImageType {
  title: string
  alt: string
  caption: string
  imageUrl: string
  dimensions: ImageDimensions
  section: string
  route: string
  // Add any other fields you need
}

export interface ProjectType {
  _id: string;
  title: string;
  description: string;
  mainImage: string;
  categories: {_ref: string}[];
  startedAt: string;
  completedAt: string;
}

export interface CategoryType {
  _id: string;
  title: string;
  description: string;
}

const categoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  description
}`;

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
  return images
}

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


const projectsQuery = groq`*[_type == "gbc-projects"] {
  _id,
  title,
  description,
  "mainImage": mainImage.asset->url,
categories,
  startedAt,
  completedAt
}| order(position asc)`;

const imageQuery = (route?: string) => groq`*[_type == "gbc-pictures" ${route ? `&& route == "${route}"` : ""} && route != "/"] {
  title,
  alt,
  caption,
  route,
  "imageUrl": image.asset->url,
  "dimensions": image.asset->metadata.dimensions,
  section
}`;

const documentsQuery = groq`*[_type == "documents"] {
  title,
  category,
  "url": file.asset->url,
  caption
}`;

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
  
export async function getProjects(): Promise<ProjectType[]>{
  return await client.fetch<ProjectType[]>(projectsQuery)
}

export async function getCategories(): Promise<CategoryType[]> {
  return await client.fetch<CategoryType[]>(categoriesQuery);
}

export async function getImages(route?: string): Promise<ImageType[]> {
  return await client.fetch<ImageType[]>(imageQuery(route));
}

export async function getDocuments(): Promise<DocumentType[]> {
  return await client.fetch<DocumentType[]>(documentsQuery);
}