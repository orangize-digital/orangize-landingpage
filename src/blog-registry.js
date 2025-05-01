// Import all blog post components
import GoogleAdsRoi from "./components/blog-posts/GoogleAdsROI.vue";
import BlogPostTemplate from "./components/blog-posts/BlogPostTemplate.vue";
import GoogleAdsEinfuehrung from "./components/blog-posts/GoogleAdsEinfuehrung.vue";
import LandingPageOptimierung from "./components/blog-posts/LandingPageOptimierung.vue";

// Export the blog post components
export const blogComponents = {
  "wie-du-mit-google-ads-deinen-roi-steigerst": GoogleAdsRoi,
  "blogpost-template": BlogPostTemplate,
  "google-ads-einfuehrung": GoogleAdsEinfuehrung,
  "landing-page-psychologie": LandingPageOptimierung,
};

// Function to get all blog posts metadata
export function getAllPosts() {
  // This would be populated at build time
  return [
    {
      id: 1,
      title:
        "Google Ads für Einsteiger: Was ist das eigentlich und warum solltest du es nutzen?",
      slug: "google-ads-einfuehrung",
      excerpt:
        "Eine unterhaltsame Einführung in die Welt von Google Ads - ohne kompliziertes Fachchinesisch, dafür mit vielen praktischen Tipps und einem Augenzwinkern erklärt.",
      image: "/src/assets/images/blog-posts/google-ads-intro.jpg",
      category: "Google Ads",
      date: "28. April 2025",
      readTime: 8,
      author: {
        name: "Naumche Joshevski",
        title: "Google Ads Spezialist",
        avatar: "/src/assets/images/Naumche.jpg",
        bio: "Google Ads Experte mit über 10 Jahren Erfahrung im digitalen Marketing. Spezialisiert auf Performance Marketing und Conversion-Optimierung für mittelständische Unternehmen.",
      },
    },
    {
      id: 2,
      title: "Landing Pages, die konvertieren: 7 Geheimnisse für mehr Leads",
      slug: "landing-page-psychologie",
      excerpt:
        "Entdecke die 7 bewährten Strategien für hochkonvertierende Landing Pages. Von psychologischen Tricks bis zu Design-Hacks – alles, was du brauchst, um deine Conversion Rate zu verdoppeln!",
      image: "/src/assets/images/blog-posts/landingpage.jpg",
      category: "Webdesign",
      date: "19. April 2025",
      readTime: 12,
      author: {
        name: "Naumche Joshevski",
        title: "Conversion-Rate-Optimierer",
        avatar: "/src/assets/images/Naumche.jpg",
        bio: "Webdesign-Experte mit über 12 Jahren Erfahrung. Spezialisiert auf Conversion-Rate-Optimierung und nutzerorientiertes Design für maximale Performance.",
      },
    },
    // {
    //   id: 3,
    //   title: "Wie du mit Google Ads deinen ROI um 300% steigerst",
    //   slug: "wie-du-mit-google-ads-deinen-roi-steigerst",
    //   excerpt:
    //     "Erfahre, wie du mit gezielten Optimierungen und einer durchdachten Strategie den Return on Investment deiner Google Ads Kampagnen deutlich verbessern kannst.",
    //   image: "/src/assets/images/blog-posts/roi-steigern.jpg",
    //   category: "Google Ads",
    //   date: "15. April 2025",
    //   readTime: 12,
    //   author: {
    //     name: "Naumche Joshevski",
    //     title: "Google Ads Spezialist",
    //     avatar: "/src/assets/images/Naumche.jpg",
    //     bio: "Google Ads Experte mit über 10 Jahren Erfahrung im digitalen Marketing. Spezialisiert auf Performance Marketing und Conversion-Optimierung für mittelständische Unternehmen.",
    //   },
    // },
  ];
}

// Function to get featured post
export function getFeaturedPost() {
  return getAllPosts()[0]; // Just return the first post as featured
}

// Function to get post by slug
export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug);
}

// Function to get related posts
export function getRelatedPosts(currentSlug, category, limit = 3) {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}
