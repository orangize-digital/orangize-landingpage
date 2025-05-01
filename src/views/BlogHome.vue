<template>
  <div>
    <Navigation />
    <!-- Blog Header Section -->
    <div
      class="hero min-h-[60vh] min-h relative bg-[url('@/assets/images/blog-header-1.jpg')]"
    >
      <div class="hero-overlay bg-black bg-opacity-80"></div>
      <div class="hero-content text-center text-neutral-content relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-5xl font-bold text-[#f60]" data-aos="fade-down">
            The Orangize Journal
          </h1>
          <p
            class="py-6 text-2xl text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Insights, Tipps und Strategien für dein digitales Marketing
          </p>
          <p
            class="mb-8 text-lg text-white"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Erfahre mehr über Google Ads, Webdesign und erfolgreiche
            Online-Strategien für dein Business.
          </p>
        </div>
      </div>
    </div>

    <!-- Blog Categories -->
    <section class="py-12 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4 md:mb-12 mb-0">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            class="btn border-none transition-all duration-300"
            :class="
              activeCategory === category.id
                ? 'bg-[#f60] text-white'
                : 'bg-base-200 text-white hover:bg-[#f60] hover:text-white'
            "
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="py-8 bg-base-100">
      <div class="container mx-auto px-4">
        <div
          class="card lg:card-side bg-black shadow-xl border-blog-card overflow-hidden"
          data-aos="fade-up"
        >
          <figure class="lg:w-1/2">
            <img
              :src="featuredPost.image"
              :alt="featuredPost.title"
              class="h-full w-full object-cover"
            />
          </figure>
          <div class="card-body lg:w-1/2">
            <div class="flex items-center gap-2 mb-2">
              <span class="badge badge-lg border-none bg-[#f60] text-white">{{
                featuredPost.category
              }}</span>
              <span class="text-white text-sm">{{ featuredPost.date }}</span>
            </div>
            <h2 class="card-title text-3xl text-white">
              {{ featuredPost.title }}
            </h2>
            <p class="text-white mb-4">{{ featuredPost.excerpt }}</p>
            <div class="flex items-center gap-4 mb-6">
              <div class="avatar">
                <div class="w-10 rounded-full">
                  <img
                    :src="featuredPost.author.avatar"
                    :alt="featuredPost.author.name"
                  />
                </div>
              </div>
              <div>
                <p class="font-semibold text-white">
                  {{ featuredPost.author.name }}
                </p>
                <p class="text-sm text-white opacity-75">
                  {{ featuredPost.author.title }}
                </p>
              </div>
            </div>
            <div class="card-actions justify-end">
              <router-link
                :to="`/blog/${featuredPost.slug}`"
                class="btn btn-primary bg-[#f60] border-none hover:bg-[#ff751a]"
              >
                Weiterlesen
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(post, index) in filteredPosts"
            :key="post.id"
            class="card bg-black border-blog-card shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px]"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <figure class="relative h-56 overflow-hidden">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4">
                <span class="badge badge-lg border-none bg-[#f60] text-white">{{
                  post.category
                }}</span>
              </div>
            </figure>
            <div class="card-body">
              <div class="flex justify-between items-center mb-2">
                <span class="text-white text-sm">{{ post.date }}</span>
                <span class="text-white text-sm"
                  >{{ post.readTime }} min Lesezeit</span
                >
              </div>
              <h2 class="card-title text-xl text-white">{{ post.title }}</h2>
              <p class="text-white mb-4">{{ post.excerpt }}</p>
              <div class="flex items-center gap-3 mb-4">
                <div class="avatar">
                  <div class="w-8 rounded-full">
                    <img :src="post.author.avatar" :alt="post.author.name" />
                  </div>
                </div>
                <p class="text-sm text-white">{{ post.author.name }}</p>
              </div>
              <div class="card-actions justify-end">
                <router-link
                  :to="`/blog/${post.slug}`"
                  class="btn btn-outline text-white hover:bg-[#f60] hover:border-[#f60]"
                >
                  Weiterlesen
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <NewsletterForm />

    <CTA />
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useHead } from "@vueuse/head"; // ✅ Add this
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import CTA from "../components/FloatingCallButton.vue";
import NewsletterForm from "../components/NewsletterForm.vue";
import { getAllPosts, getFeaturedPost } from "../blog-registry";

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
        "Wertvolle Insights rund um Online Marketing, Webseiten und Werbeanzeigen. Von Experten geschrieben.",
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
});

// Categories
const categories = [
  { id: "all", name: "Alle Artikel" },
  { id: "google-ads", name: "Google Ads" },
  { id: "webdesign", name: "Webdesign" },
  { id: "seo", name: "SEO" },
  { id: "marketing", name: "Marketing" },
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
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 25px rgba(255, 102, 0, 0.2);
}

.badge {
  font-weight: 500;
  letter-spacing: 0.5px;
}
</style>
