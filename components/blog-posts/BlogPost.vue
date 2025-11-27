<template>
  <div>
    <Navigation />

    <!-- Blog Post Header -->
    <div
      v-if="post && post.image"
      class="hero min-h-[60vh] relative"
      :style="`background-image: url('${post.image}')`"
    >
      <div class="hero-overlay bg-black bg-opacity-80"></div>
      <div class="hero-content text-center text-base-content relative z-10">
        <div class="max-w-3xl">
          <div
            class="flex items-center justify-center gap-3 mb-4"
            data-aos="fade-down"
          >
            <span
              v-if="post.category"
              class="badge badge-lg border-none bg-[#f60] text-white"
              >{{ post.category }}</span
            >
            <span v-if="post.date" class="text-base-content">{{
              post.date
            }}</span>
            <span v-if="post.readTime" class="text-base-content"
              >{{ post.readTime }} min Lesezeit</span
            >
          </div>
          <h1
            class="text-4xl md:text-5xl font-bold text-base-content mb-6"
            data-aos="fade-up"
          >
            {{ post.title || "Loading..." }}
          </h1>
          <div
            v-if="post.author"
            class="flex items-center justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="avatar">
              <div class="w-12 rounded-full">
                <img :src="post.author.avatar" :alt="post.author.name" />
              </div>
            </div>
            <div class="text-left">
              <p class="font-semibold text-base-content">
                {{ post.author.name }}
              </p>
              <p
                v-if="post.author.title"
                class="text-sm text-base-content opacity-75"
              >
                {{ post.author.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-8 w-full flex justify-center">
        <a
          href="#content"
          @click.prevent="scrollToContent"
          class="text-white animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Blog Post Content -->
    <section id="content" class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-base-200 rounded-xl">
            <!-- Dynamic Component for Blog Post Content -->
            <component :is="currentPostComponent" />

            <!-- Tags -->
            <div
              v-if="post && post.tags"
              class="mt-12 pt-8 border-t border-base-content/20"
            >
              <div class="flex flex-wrap gap-2">
                <span class="text-base-content mr-2">Tags:</span>
                <span
                  v-for="(tag, index) in post.tags"
                  :key="index"
                  class="badge bg-base-100 text-base-content border-primary"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Share Buttons -->
            <div class="mt-8">
              <h4 class="text-base-content font-semibold mb-4">
                Teile diesen Artikel:
              </h4>
              <div class="flex gap-3">
                <button
                  class="btn btn-circle btn-sm bg-[#3b5998] border-none hover:bg-[#3b5998]/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#fff"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    />
                  </svg>
                </button>
                <button
                  class="btn btn-circle btn-sm bg-[#1da1f2] border-none hover:bg-[#1da1f2]/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#fff"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                    />
                  </svg>
                </button>
                <button
                  class="btn btn-circle btn-sm bg-[#0077b5] border-none hover:bg-[#0077b5]/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#fff"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                </button>
                <button
                  class="btn btn-circle btn-sm bg-[#25D366] border-none hover:bg-[#25D366]/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#fff"
                    class="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Author Bio -->
          <div
            v-if="post && post.author && post.author.bio"
            class="mt-12 bg-base-200 p-6 rounded-xl"
            data-aos="fade-up"
          >
            <div class="flex flex-col md:flex-row items-center gap-6">
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img :src="post.author.avatar" :alt="post.author.name" />
                </div>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-base-content mb-2">
                  {{ post.author.name }}
                </h3>
                <p class="text-base-content mb-4">{{ post.author.bio }}</p>
                <div class="flex gap-3">
                  <a
                    href="#"
                    class="text-primary hover:text-base-content transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#fff"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="text-[#f60] hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#fff"
                      class="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Related Posts -->
          <div v-if="relatedPosts && relatedPosts.length > 0" class="mt-16">
            <h3
              class="text-2xl font-bold text-base-content mb-8"
              data-aos="fade-up"
            >
              Ähnliche Artikel
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                v-for="(relatedPost, index) in relatedPosts"
                :key="index"
                class="card bg-base-200 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px]"
                data-aos="fade-up"
                :data-aos-delay="index * 100"
              >
                <figure v-if="relatedPost.image" class="h-40">
                  <img
                    :src="relatedPost.image"
                    :alt="relatedPost.title"
                    class="w-full h-full object-cover"
                  />
                </figure>
                <div class="card-body bg-base-200">
                  <h4 class="card-title text-base-content text-lg">
                    {{ relatedPost.title }}
                  </h4>
                  <div class="flex justify-between items-center mt-4">
                    <span
                      v-if="relatedPost.date"
                      class="text-base-content text-sm"
                      >{{ relatedPost.date }}</span
                    >
                    <router-link
                      :to="`/blog/${relatedPost.slug}`"
                      class="text-primary hover:underline"
                    >
                      Lesen →
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <NewsletterForm /> -->

    <CTA />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head"; // ✅ Import useHead
import Navigation from "../Navigation.vue";
import Footer from "../Footer.vue";
import CTA from "../CTA.vue";
import NewsletterForm from "../NewsletterForm.vue";
import {
  blogComponents,
  getPostBySlug,
  getRelatedPosts,
} from "../../blog-registry";

const route = useRoute();
const slug = computed(() => route.params.slug);

// Post data
const post = ref({});
const currentPostComponent = ref(null);
const relatedPosts = ref([]);

// Method: scroll to content
const scrollToContent = () => {
  const element = document.getElementById("content");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Method: Update page meta dynamically
const updateMeta = (currentPost) => {
  if (!currentPost) return;

  useHead({
    title: currentPost.title || "Blogpost | Orangize Digital",
    meta: [
      {
        name: "description",
        content:
          currentPost.excerpt || "Spannender Blogartikel von Orangize Digital.",
      },
      {
        property: "og:title",
        content: currentPost.title || "Blogpost | Orangize Digital",
      },
      {
        property: "og:description",
        content:
          currentPost.excerpt || "Spannender Blogartikel von Orangize Digital.",
      },
      {
        property: "og:image",
        content: `https://orangize.de${
          currentPost.image || "/default-image.jpg"
        }`,
      },
      {
        property: "og:url",
        content: `https://orangize.de/blog/${currentPost.slug}`,
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: currentPost.title || "Blogpost | Orangize Digital",
      },
      {
        name: "twitter:description",
        content:
          currentPost.excerpt || "Spannender Blogartikel von Orangize Digital.",
      },
      {
        name: "twitter:image",
        content: `https://orangize.de${
          currentPost.image || "/default-image.jpg"
        }`,
      },
    ],
    link: [
      {
        rel: "canonical",
        href: `https://orangize.de${route.path}`,
      },
    ],
  });
};

// Lifecycle hooks
onMounted(() => {
  window.scrollTo(0, 0);

  post.value = {};
  currentPostComponent.value = null;
  relatedPosts.value = [];

  const currentPost = getPostBySlug(slug.value);
  if (currentPost) {
    post.value = currentPost;
    currentPostComponent.value = blogComponents[slug.value] || null;
    if (post.value && post.value.category) {
      relatedPosts.value = getRelatedPosts(slug.value, post.value.category);
    }

    updateMeta(currentPost); // ✅ Update meta when loaded
  }
});

// Watch for route changes
watch(
  () => route.params.slug,
  (newSlug) => {
    slug.value = newSlug;
    if (newSlug) {
      window.scrollTo(0, 0);

      const currentPost = getPostBySlug(newSlug);
      if (currentPost) {
        post.value = currentPost;
        currentPostComponent.value = blogComponents[newSlug] || null;
        if (post.value && post.value.category) {
          relatedPosts.value = getRelatedPosts(newSlug, post.value.category);
        }

        updateMeta(currentPost); // ✅ Update meta on route change
      }
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}
</style>
