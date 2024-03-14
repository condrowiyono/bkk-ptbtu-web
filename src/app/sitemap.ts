import { MetadataRoute } from "next";

const baseURI = "hhttps://bkk-ptbtu-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURI,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
