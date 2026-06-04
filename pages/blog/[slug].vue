<template>
  <div>
    <Navigation />

    <!-- Hero — dark shell, post meta + huge title -->
    <section v-if="post && post.title" class="hero-shell hero-shell--post">
      <div class="hero-shell__bg" aria-hidden="true"></div>
      <div class="hero-shell__inner container mx-auto px-4">
        <div class="post-hero">
          <div class="post-hero__meta" data-aos="fade-up">
            <span v-if="post.category" class="post-hero__cat">{{ post.category }}</span>
            <span class="post-hero__dot"></span>
            <span v-if="post.date" class="post-hero__date">{{ post.date }}</span>
            <span v-if="post.readTime" class="post-hero__dot"></span>
            <span v-if="post.readTime" class="post-hero__read">{{ post.readTime }} min Lesezeit</span>
          </div>
          <h1 class="hero-shell__headline post-hero__title" data-aos="fade-up" data-aos-delay="80">
            {{ post.title }}
          </h1>
          <div v-if="post.author" class="post-hero__author" data-aos="fade-up" data-aos-delay="160">
            <img class="post-hero__avatar" :src="post.author.avatar" :alt="post.author.name" />
            <div>
              <p class="post-hero__author-name">{{ post.author.name }}</p>
              <p v-if="post.author.title" class="post-hero__author-role">{{ post.author.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-shell__scroll">
        <a href="#content" @click.prevent="scrollToContent" aria-label="Zum Artikel scrollen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Optional cover image strip just below hero -->
    <div v-if="post && post.image" class="post-cover-wrap">
      <figure class="post-cover">
        <img :src="post.image" :alt="post.title" />
      </figure>
    </div>

    <!-- Article body -->
    <section id="content" class="post-body-section">
      <div class="container mx-auto px-4">
        <article class="post-article">
          <div class="post-prose">
            <component :is="currentPostComponent" />
          </div>

          <!-- Tags -->
          <div v-if="post && post.tags && post.tags.length" class="post-tags">
            <span class="post-tags__label">Tags</span>
            <div class="post-tags__list">
              <span
                v-for="(tag, index) in post.tags"
                :key="index"
                class="post-tags__tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Share -->
          <div class="post-share">
            <span class="post-share__label">Teilen</span>
            <div class="post-share__row">
              <a class="post-share__btn" :href="`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`" target="_blank" rel="noopener" aria-label="Auf Facebook teilen">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>
              </a>
              <a class="post-share__btn" :href="`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`" target="_blank" rel="noopener" aria-label="Auf X teilen">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>
              </a>
              <a class="post-share__btn" :href="`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`" target="_blank" rel="noopener" aria-label="Auf LinkedIn teilen">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
              </a>
              <a class="post-share__btn" :href="`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`" target="_blank" rel="noopener" aria-label="Per WhatsApp teilen">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
              </a>
            </div>
          </div>
        </article>

        <!-- Author bio -->
        <aside v-if="post && post.author && post.author.bio" class="post-author-card" data-aos="fade-up">
          <img class="post-author-card__avatar" :src="post.author.avatar" :alt="post.author.name" />
          <div>
            <p class="post-author-card__eyebrow">Geschrieben von</p>
            <h3 class="post-author-card__name">{{ post.author.name }}</h3>
            <p class="post-author-card__bio">{{ post.author.bio }}</p>
          </div>
        </aside>
      </div>
    </section>

    <!-- Related posts -->
    <section v-if="relatedPosts && relatedPosts.length > 0" class="post-related">
      <div class="container mx-auto px-4">
        <p class="post-related__eyebrow">Weiterlesen</p>
        <h3 class="post-related__title" data-aos="fade-up">Ähnliche Artikel</h3>
        <div class="blog-grid">
          <router-link
            v-for="(relatedPost, index) in relatedPosts"
            :key="index"
            :to="`/blog/${relatedPost.slug}`"
            class="blog-card"
            data-aos="fade-up"
            :data-aos-delay="index * 80"
          >
            <figure v-if="relatedPost.image" class="blog-card__media">
              <img :src="relatedPost.image" :alt="relatedPost.title" />
              <span v-if="relatedPost.category" class="blog-card__cat">{{ relatedPost.category }}</span>
            </figure>
            <div class="blog-card__body">
              <p v-if="relatedPost.date" class="blog-card__date">{{ relatedPost.date }}</p>
              <h3 class="blog-card__title">{{ relatedPost.title }}</h3>
              <span class="blog-card__cta">
                Lesen
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

    <FloatingCallButton />
    <Footer />
  </div>
</template>

<script setup>
import {
  blogComponents,
  getPostBySlug,
  getRelatedPosts,
} from "~/blog-registry";

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

// Load post data
const loadPost = (postSlug) => {
  const currentPost = getPostBySlug(postSlug);
  if (currentPost) {
    post.value = currentPost;
    currentPostComponent.value = blogComponents[postSlug] || null;
    if (post.value && post.value.category) {
      relatedPosts.value = getRelatedPosts(postSlug, post.value.category);
    }
  }
};

// Initial load
onMounted(() => {
  loadPost(slug.value);
});

// Watch for route changes
watch(slug, (newSlug) => {
  if (newSlug) {
    loadPost(newSlug);
  }
});

// SEO Meta Tags
useSeoMeta({
  title: () => post.value?.title || 'Blogpost | Orangize Digital',
  description: () => post.value?.excerpt || 'Spannender Blogartikel von Orangize Digital.',
  ogTitle: () => post.value?.title || 'Blogpost | Orangize Digital',
  ogDescription: () => post.value?.excerpt || 'Spannender Blogartikel von Orangize Digital.',
  ogImage: () => post.value?.image ? `https://orangize.de${post.value.image}` : 'https://orangize.de/default-image.jpg',
  ogUrl: () => `https://orangize.de/blog/${slug.value}`,
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: () => post.value?.title || 'Blogpost | Orangize Digital',
  twitterDescription: () => post.value?.excerpt || 'Spannender Blogartikel von Orangize Digital.',
  twitterImage: () => post.value?.image ? `https://orangize.de${post.value.image}` : 'https://orangize.de/default-image.jpg',
});

useHead({
  link: [
    { rel: 'canonical', href: () => `https://orangize.de/blog/${slug.value}` }
  ]
});

const shareUrl = computed(() => encodeURIComponent(`https://orangize.de/blog/${slug.value}`));
const shareTitle = computed(() => encodeURIComponent(post.value?.title || 'Orangize Journal'));
</script>

<style scoped>
/* Post hero overrides the default shell to fit a single column */
.hero-shell--post {
  min-height: 70vh;
}
.hero-shell--post :deep(.hero-shell__inner) {
  min-height: 70vh;
}

.post-hero {
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
}

.post-hero__meta {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
  justify-content: center;
}
.post-hero__cat {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #ffffff !important;
  background: var(--brand-gradient);
  padding: 0.4rem 0.85rem;
}
.post-hero__dot {
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 50%;
}
.post-hero__date,
.post-hero__read {
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65) !important;
  font-weight: 500;
}

.post-hero__title {
  font-size: clamp(2rem, 5.5vw, 4.5rem) !important;
  line-height: 1.05;
  letter-spacing: -0.025em;
  margin-bottom: 2.5rem;
  max-width: 22ch;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff !important;
}

.post-hero__author {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}
.post-hero__avatar {
  width: 44px;
  height: 44px;
  object-fit: cover;
  flex-shrink: 0;
}
.post-hero__author-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff !important;
  line-height: 1.2;
  margin: 0;
}
.post-hero__author-role {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6) !important;
  letter-spacing: 0.1em;
  margin: 0;
  line-height: 1.4;
}

/* Cover image strip */
.post-cover-wrap {
  background: hsl(var(--b1));
  padding: 0;
  position: relative;
  margin-top: -6rem;
  z-index: 5;
}
.post-cover {
  max-width: 64rem;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.35);
}
.post-cover img {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

/* Article body */
.post-body-section {
  background: hsl(var(--b1));
  padding: 5rem 0;
}

.post-article {
  max-width: 44rem;
  margin: 0 auto;
}

.post-prose :deep(p),
.post-prose :deep(li) {
  font-size: 1.0625rem;
  line-height: 1.75;
  margin-bottom: 1.25rem;
}
/* Default prose color, but only when NOT inside a .bg-black callout */
.post-prose :deep(p:not(.bg-black p):not(.bg-black *)),
.post-prose :deep(li:not(.bg-black *)) {
  color: hsl(var(--bc) / 0.85);
}
.post-prose :deep(h2) {
  font-family: "Bricolage Grotesque", sans-serif !important;
  font-size: clamp(1.6rem, 2.6vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-top: 3rem;
  margin-bottom: 1rem;
}
.post-prose :deep(h2:not(.bg-black *)) {
  color: hsl(var(--bc));
}
.post-prose :deep(h3) {
  font-family: "Bricolage Grotesque", sans-serif !important;
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 700;
  margin-top: 2.25rem;
  margin-bottom: 0.75rem;
}
.post-prose :deep(h3:not(.bg-black *)) {
  color: hsl(var(--bc));
}
.post-prose :deep(a) {
  text-decoration: underline;
  text-underline-offset: 3px;
}
.post-prose :deep(a:not(.bg-black *)) {
  color: #f60;
}
.post-prose :deep(ul),
.post-prose :deep(ol) {
  margin: 1rem 0 1.5rem 1.25rem;
}
.post-prose :deep(blockquote) {
  margin: 2rem 0;
  padding: 1.25rem 0 1.25rem 1.5rem;
  border-left: 3px solid #f60;
  font-style: italic;
  font-size: 1.15rem;
  color: hsl(var(--bc) / 0.8) !important;
}
.post-prose :deep(img) {
  width: 100%;
  height: auto;
  display: block;
  margin: 2rem 0;
}

/* Tags */
.post-tags {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid hsl(var(--bc) / 0.1);
}
.post-tags__label {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: hsl(var(--bc) / 0.5) !important;
  margin-bottom: 0.75rem;
}
.post-tags__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.post-tags__tag {
  padding: 0.4rem 0.75rem;
  background: hsl(var(--bc) / 0.05);
  color: hsl(var(--bc) / 0.75) !important;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Share */
.post-share {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid hsl(var(--bc) / 0.1);
}
.post-share__label {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: hsl(var(--bc) / 0.5) !important;
  margin-bottom: 0.75rem;
}
.post-share__row {
  display: flex;
  gap: 0.5rem;
}
.post-share__btn {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: hsl(var(--bc) / 0.06);
  color: hsl(var(--bc) / 0.7) !important;
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
}
.post-share__btn:hover {
  background: var(--brand-gradient) !important;
  color: #ffffff !important;
  transform: translateY(-2px);
}
.post-share__btn svg {
  width: 18px;
  height: 18px;
}

/* Author card */
.post-author-card {
  max-width: 44rem;
  margin: 4rem auto 0;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 2rem;
  background: hsl(var(--b2));
  box-shadow: 0 12px 30px -15px rgba(0, 0, 0, 0.18);
}
.post-author-card__avatar {
  width: 80px;
  height: 80px;
  object-fit: cover;
  flex-shrink: 0;
}
.post-author-card__eyebrow {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #f60 !important;
  margin: 0 0 0.4rem;
}
.post-author-card__name {
  font-family: "Bricolage Grotesque", sans-serif !important;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 0.75rem;
  color: hsl(var(--bc)) !important;
}
.post-author-card__bio {
  font-size: 0.95rem;
  line-height: 1.55;
  color: hsl(var(--bc) / 0.75) !important;
  margin: 0;
}

@media (max-width: 640px) {
  .post-author-card {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
  .post-cover-wrap {
    margin-top: -3rem;
  }
}

/* Related posts (reuse blog-card structure) */
.post-related {
  background: hsl(var(--b2));
  padding: 5rem 0;
}
.post-related__eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #f60 !important;
  margin-bottom: 0.5rem;
  text-align: center;
}
.post-related__title {
  font-family: "Bricolage Grotesque", sans-serif !important;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: hsl(var(--bc)) !important;
  text-align: center;
  margin-bottom: 3rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .blog-grid { grid-template-columns: repeat(3, 1fr); }
}

.blog-card {
  background: hsl(var(--b1));
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
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.blog-card__date {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: hsl(var(--bc) / 0.55) !important;
  margin-bottom: 0.5rem;
}
.blog-card__title {
  font-family: "Bricolage Grotesque", sans-serif !important;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: hsl(var(--bc)) !important;
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
</style>
