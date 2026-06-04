<template>
  <div>
    <Navigation />

    <!-- Hero — same dark shell as service pages -->
    <section class="hero-shell hero-shell--short">
      <div class="hero-shell__bg" aria-hidden="true"></div>
      <div class="hero-shell__inner container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <p class="hero-shell__eyebrow" data-aos="fade-up">Das Orangize Journal</p>
          <h1 class="hero-shell__headline blog-headline" data-aos="fade-up" data-aos-delay="80">
            Marketing-Insights,<br />
            <span class="hero-shell__accent">die wirklich helfen.</span>
          </h1>
          <p class="hero-shell__sub blog-sub" data-aos="fade-up" data-aos-delay="160">
            Google Ads, Webdesign, Automation, SEO — kuratierte Beiträge für Unternehmer, die ihr Marketing nicht dem Zufall überlassen wollen.
          </p>
        </div>
      </div>
    </section>

    <!-- Category filter -->
    <section class="blog-filter">
      <div class="container mx-auto px-4">
        <div class="blog-filter__row">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            :class="['blog-filter__btn', { 'is-active': activeCategory === category.id }]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Featured post -->
    <section class="blog-featured-wrap">
      <div class="container mx-auto px-4">
        <p class="blog-section-eyebrow">Featured</p>
        <article class="blog-featured" data-aos="fade-up">
          <figure class="blog-featured__media">
            <img :src="featuredPost.image" :alt="featuredPost.title" />
          </figure>
          <div class="blog-featured__body">
            <div class="blog-meta">
              <span class="blog-meta__cat">{{ featuredPost.category }}</span>
              <span class="blog-meta__dot"></span>
              <span class="blog-meta__date">{{ featuredPost.date }}</span>
            </div>
            <h2 class="blog-featured__title">{{ featuredPost.title }}</h2>
            <p class="blog-featured__excerpt">{{ featuredPost.excerpt }}</p>
            <div class="blog-author">
              <img class="blog-author__avatar" :src="featuredPost.author.avatar" :alt="featuredPost.author.name" />
              <div>
                <p class="blog-author__name">{{ featuredPost.author.name }}</p>
                <p class="blog-author__role">{{ featuredPost.author.title }}</p>
              </div>
            </div>
            <router-link :to="`/blog/${featuredPost.slug}`" class="blog-cta">
              Weiterlesen
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <!-- Posts grid -->
    <section class="blog-grid-wrap">
      <div class="container mx-auto px-4">
        <p class="blog-section-eyebrow">Mehr Lesen</p>
        <div class="blog-grid">
          <router-link
            v-for="(post, index) in filteredPosts"
            :key="post.id"
            :to="`/blog/${post.slug}`"
            class="blog-card"
            data-aos="fade-up"
            :data-aos-delay="index * 80"
          >
            <figure class="blog-card__media">
              <img :src="post.image" :alt="post.title" />
              <span class="blog-card__cat">{{ post.category }}</span>
            </figure>
            <div class="blog-card__body">
              <div class="blog-meta blog-meta--small">
                <span class="blog-meta__date">{{ post.date }}</span>
                <span class="blog-meta__dot"></span>
                <span class="blog-meta__read">{{ post.readTime }} min</span>
              </div>
              <h3 class="blog-card__title">{{ post.title }}</h3>
              <p class="blog-card__excerpt">{{ post.excerpt }}</p>
              <span class="blog-card__cta">
                Weiterlesen
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <CTA />
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
// useHead is auto-imported by Nuxt
import { useRoute } from "vue-router";
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import CTA from "../components/CTA.vue";
import NewsletterForm from "../components/NewsletterForm.vue";
import { getAllPosts, getFeaturedPost } from "../blog-registry";

const route = useRoute();

// SEO Meta for Blog Home
useHead({
  title: "Blog – Tipps zu Webdesign, Google Ads & Marketing | Orangize Digital",
  meta: [
    {
      name: "description",
      content:
        "Entdecke spannende Artikel über Webdesign, Google Ads, SEO und digitales Marketing. Wissen & Tipps von Orangize Digital für dein Business!",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content:
        "Blog – Tipps zu Webdesign, Google Ads & Marketing | Orangize Digital",
    },
    {
      property: "og:description",
      content:
        "Wertvolle Insights rund um Online Marketing, Websiten und Werbeanzeigen. Von Experten geschrieben.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://orangize.de/blog",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content:
        "Blog – Tipps zu Webdesign, Google Ads & Marketing | Orangize Digital",
    },
    {
      name: "twitter:description",
      content:
        "Wissen und Tipps über Webdesign, Google Ads, SEO und digitales Marketing von Orangize Digital.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://orangize.de${route.path}`,
    },
  ],
});

// Categories
const categories = [
  { id: "all", name: "Alle Artikel" },
  { id: "google-ads", name: "Google Ads" },
  { id: "webdesign", name: "Webdesign" },
  { id: "seo", name: "SEO" },
  { id: "online-marketing", name: "Marketing" },
];

const activeCategory = ref("all");
const featuredPost = getFeaturedPost();
const allPosts = getAllPosts();
const displayedPosts = ref([]);

// Filter posts by category
const filteredPosts = computed(() => {
  if (activeCategory.value === "all") {
    return displayedPosts.value;
  }
  return displayedPosts.value.filter((post) => {
    const category = post.category.toLowerCase().replace(" ", "-");
    return category === activeCategory.value;
  });
});

// Load initial posts
onMounted(() => {
  // Remove the featured post from the list
  const postsWithoutFeatured = allPosts.filter(
    (post) => post.id !== featuredPost.id
  );
  displayedPosts.value = postsWithoutFeatured;
});
</script>

<style scoped>
/* Shorter hero for blog (60vh instead of 100vh) */
.hero-shell--short :deep(.hero-shell__inner) {
  min-height: 60vh;
}
.hero-shell--short {
  min-height: 60vh;
}
.blog-headline {
  font-size: clamp(2.5rem, 6vw, 4.5rem) !important;
  margin-bottom: 1.25rem;
}
.blog-sub {
  margin-left: auto;
  margin-right: auto;
  max-width: 48ch;
}

/* Category filter */
.blog-filter {
  background: hsl(var(--b1));
  padding: 3rem 0 1rem;
}
.blog-filter__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding-bottom: 1rem;
}
.blog-filter__btn {
  padding: 0.65rem 1.25rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: transparent;
  color: hsl(var(--bc) / 0.55) !important;
  cursor: pointer;
  border: none;
  border-bottom: 2px solid transparent;
  transition: color 0.25s ease, border-color 0.25s ease;
}
.blog-filter__btn:hover {
  color: hsl(var(--bc)) !important;
}
.blog-filter__btn.is-active {
  color: #f60 !important;
  border-bottom-color: #f60;
}

/* Section eyebrows */
.blog-section-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #f60 !important;
  margin-bottom: 1.5rem;
}

/* Featured post */
.blog-featured-wrap {
  background: hsl(var(--b1));
  padding: 4rem 0;
}
.blog-featured {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  background: #ffffff;
  box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
@media (min-width: 1024px) {
  .blog-featured {
    grid-template-columns: 1fr 1fr;
  }
}
.blog-featured__media {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
}
.blog-featured__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.blog-featured:hover .blog-featured__media img {
  transform: scale(1.04);
}
.blog-featured__body {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (min-width: 1024px) {
  .blog-featured__body {
    padding: 3.5rem;
  }
}
.blog-featured__title {
  font-family: "Bricolage Grotesque", sans-serif !important;
  font-size: clamp(1.6rem, 2.6vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
  color: hsl(var(--bc)) !important;
  margin-bottom: 1rem;
}
.blog-featured__excerpt {
  font-size: 1.05rem;
  color: hsl(var(--bc) / 0.75) !important;
  line-height: 1.55;
  margin-bottom: 1.75rem;
}

/* Meta strip */
.blog-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
}
.blog-meta--small {
  margin-bottom: 0.75rem;
}
.blog-meta__cat {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #f60 !important;
  padding: 0.3rem 0.6rem;
  background: rgba(255, 102, 0, 0.1);
}
.blog-meta__dot {
  width: 3px;
  height: 3px;
  background: hsl(var(--bc) / 0.3);
}
.blog-meta__date,
.blog-meta__read {
  font-size: 0.78rem;
  font-weight: 500;
  color: hsl(var(--bc) / 0.55) !important;
  letter-spacing: 0.05em;
}

/* Author */
.blog-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
.blog-author__avatar {
  width: 40px;
  height: 40px;
  object-fit: cover;
  flex-shrink: 0;
}
.blog-author__name {
  font-size: 0.95rem;
  font-weight: 700;
  color: hsl(var(--bc)) !important;
  margin: 0;
  line-height: 1.2;
}
.blog-author__role {
  font-size: 0.78rem;
  color: hsl(var(--bc) / 0.55) !important;
  margin: 0;
  line-height: 1.3;
}

/* Featured CTA */
.blog-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.9rem 1.5rem;
  background: var(--brand-gradient) !important;
  background-size: 200% 200% !important;
  color: #ffffff !important;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  width: max-content;
  transition: background-position 0.5s ease, transform 0.2s ease, box-shadow 0.3s ease;
}
.blog-cta svg {
  width: 1rem;
  height: 1rem;
  color: #ffffff !important;
  stroke: #ffffff !important;
  transition: transform 0.3s ease;
}
.blog-cta:hover {
  background-position: 100% 0 !important;
  transform: translateY(-2px);
  box-shadow: 0 18px 36px -12px rgba(255, 102, 0, 0.55);
}
.blog-cta:hover svg {
  transform: translateX(4px);
}

/* Grid */
.blog-grid-wrap {
  background: hsl(var(--b2));
  padding: 5rem 0;
}
.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.blog-card {
  background: #ffffff;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 8px 24px -10px rgba(0, 0, 0, 0.15);
  transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1),
    box-shadow 0.35s ease;
}
.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 50px -20px rgba(255, 102, 0, 0.3),
    0 8px 20px -10px rgba(0, 0, 0, 0.2);
}
.blog-card__media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}
.blog-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s ease;
}
.blog-card:hover .blog-card__media img {
  transform: scale(1.05);
}
.blog-card__cat {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.35rem 0.7rem;
  background: var(--brand-gradient);
  color: #ffffff !important;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.blog-card__body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.blog-card__title {
  font-family: "Bricolage Grotesque", sans-serif !important;
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.2;
  color: hsl(var(--bc)) !important;
  margin-bottom: 0.75rem;
}
.blog-card__excerpt {
  font-size: 0.95rem;
  color: hsl(var(--bc) / 0.7) !important;
  line-height: 1.55;
  margin-bottom: 1.5rem;
  flex: 1;
}
.blog-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #f60 !important;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.blog-card__cta svg {
  width: 0.95rem;
  height: 0.95rem;
  color: #f60 !important;
  stroke: #f60 !important;
  transition: transform 0.3s ease;
}
.blog-card:hover .blog-card__cta svg {
  transform: translateX(6px);
}

@media (max-width: 640px) {
  .blog-featured__body { padding: 1.75rem; }
  .blog-card__body { padding: 1.25rem; }
  .blog-grid-wrap { padding: 3rem 0; }
}
</style>
