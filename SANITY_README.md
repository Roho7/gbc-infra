# Sanity Integration Guide

This document provides information on how to use the Sanity integration in your Next.js project.

## Environment Variables

Make sure you have the following environment variables set in your `.env.local` file:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Available Utilities

### Sanity Client

The Sanity client is configured in `app/_actions/sanity.ts` and provides the following utilities:

- `client`: The main Sanity client instance
- `urlFor`: A function to generate image URLs from Sanity image references
- `fetchSanity<T>`: A typed function to fetch data from Sanity

### Querying Data

Create your queries in `app/_actions/queries.ts`. Example:

```typescript
// Define TypeScript interfaces for your data
export interface MyDataType {
  title: string;
  description: string;
  // Add other fields
}

// Create a query
const myQuery = `*[_type == "myType"] {
  title,
  description,
  // Add other fields
}`;

// Create a function to fetch the data
export async function getMyData(): Promise<MyDataType[]> {
  return await fetchSanity<MyDataType[]>(myQuery);
}
```

### Using Portable Text

For rich text content, use the `SanityContent` component:

```tsx
import { SanityContent } from '@/components/SanityContent';
import { fetchSanity } from '@/actions/sanity';

// In your page component
export default async function MyPage() {
  const content = await fetchSanity(`*[_type == "page" && slug.current == "my-page"][0].content`);
  
  return (
    <div>
      <h1>My Page</h1>
      <SanityContent content={content} />
    </div>
  );
}
```

### Working with Images

Use the image utilities in `app/_actions/imageUtils.ts`:

```tsx
import { getImageUrl, getResponsiveImageUrls } from '@/actions/imageUtils';
import Image from 'next/image';

// In your component
export function MyImage({ image }) {
  const imageUrl = getImageUrl(image, { width: 800, format: 'webp' });
  
  return (
    <Image 
      src={imageUrl}
      alt="My image"
      width={800}
      height={600}
    />
  );
}
```

## Example Queries

Here are some example GROQ queries for common use cases:

### Get a single page by slug

```groq
*[_type == "page" && slug.current == "about"][0] {
  title,
  description,
  content,
  "image": featuredImage.asset->url
}
```

### Get a list of items with references

```groq
*[_type == "post"] | order(publishedAt desc) {
  title,
  excerpt,
  "slug": slug.current,
  "author": author->{name, "image": image.asset->url},
  "categories": categories[]->title
}
```

### Get nested content

```groq
*[_type == "page" && slug.current == "home"][0] {
  title,
  "sections": sections[] {
    _type,
    heading,
    "items": items[] {
      title,
      description,
      "image": image.asset->url
    }
  }
}
```

## Further Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Next.js and Sanity](https://www.sanity.io/docs/nextjs) 