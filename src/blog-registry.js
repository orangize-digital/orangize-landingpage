// src/blog-registry.js

// Import blog post components (only used in app, not in sitemap)
import GoogleAdsRoi from "./components/blog-posts/GoogleAdsROI.vue";
import BlogPostTemplate from "./components/blog-posts/BlogPostTemplate.vue";
import GoogleAdsEinfuehrung from "./components/blog-posts/GoogleAdsEinfuehrung.vue";
import LandingPageOptimierung from "./components/blog-posts/LandingPageOptimierung.vue";
import SocialMediaMarketing from "./components/blog-posts/SocialMediaMarketing.vue";

// Images and other full content
import avatarImage from "@/assets/images/Naumche.jpg";
import blogImage from "@/assets/images/blog-posts/google-ads-intro.jpg";
import blogImage1 from "@/assets/images/blog-posts/landingpage.jpg";
import blogImage2 from "@/assets/images/blog-posts/social-media-hero.jpg";

// Import clean metadata
import { blogPosts } from "./blog-meta.js";

// Export component registry
export const blogComponents = {
  "wie-du-mit-google-ads-deinen-roi-steigerst": GoogleAdsRoi,
  "blogpost-template": BlogPostTemplate,
  "google-ads-einfuehrung": GoogleAdsEinfuehrung,
  "landing-page-psychologie": LandingPageOptimierung,
  "social-media-marketing-leitfaden": SocialMediaMarketing,
};

// Enrich metadata with full post content
export function getAllPosts() {
  return blogPosts.map((meta) => {
    const sharedAuthor = {
      name: "Naumche Joshevski",
      avatar: avatarImage,
      bio: "Google Ads Experte mit über 5 Jahren Erfahrung im digitalen Marketing. Spezialisiert auf Performance Marketing und Conversion-Optimierung für mittelständische Unternehmen.",
    };

    const fullData = {
      "google-ads-einfuehrung": {
        id: 1,
        title:
          "Google Ads für Einsteiger: Was ist das eigentlich und warum solltest du es nutzen?",
        slug: "google-ads-einfuehrung",
        excerpt:
          "Eine unterhaltsame Einführung in die Welt von Google Ads - ohne kompliziertes Fachchinesisch, dafür mit vielen praktischen Tipps und einem Augenzwinkern erklärt.",
        image: blogImage,
        category: "Google Ads",
        readTime: 8,
        author: { ...sharedAuthor, title: "Google Ads Spezialist" },
      },
      "landing-page-psychologie": {
        id: 2,
        title: "Landing Pages, die konvertieren: 7 Geheimnisse für mehr Leads",
        slug: "landing-page-psychologie",
        excerpt: "Entdecke 7 Strategien für konvertierende Landing Pages.",
        image: blogImage1,
        category: "Webdesign",
        readTime: 12,
        author: { ...sharedAuthor, title: "Conversion-Rate-Optimierer" },
      },
      "social-media-marketing-leitfaden": {
        id: 3,
        title: "Social Media Marketing: Der ultimative Leitfaden für 2025",
        slug: "social-media-marketing-leitfaden",
        excerpt: "Neueste Strategien für Social Media 2025.",
        image: blogImage2,
        category: "Online Marketing",
        readTime: 8,
        author: { ...sharedAuthor, title: "Social Media Stratege" },
      },
    };

    return {
      ...meta,
      ...fullData[meta.slug],
    };
  });
}

export function getFeaturedPost() {
  return getAllPosts()[0];
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug, category, limit = 3) {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}
