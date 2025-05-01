<script setup>
// Define the blog post metadata - customize this for each new post
const post = {
  id: 999, // Assign a unique ID
  title: "Your Blog Post Title",
  slug: "blogpost-template", // URL-friendly version of the title
  excerpt: "A brief summary of your blog post that will appear in listings.",
  image: "",
  category: "Category", // e.g., 'Google Ads', 'Webdesign', 'SEO', 'Marketing'
  date: "1. Januar 2025", // Publication date
  readTime: 10, // Estimated reading time in minutes
  author: {
    name: "Your Name",
    title: "Your Title",
    avatar: "/src/assets/images/Naumche.jpg",
    bio: "A brief bio about yourself or the author.",
  },
  tags: ["Tag1", "Tag2", "Tag3"], // Related keywords
  relatedPosts: [
    {
      slug: "wie-du-mit-google-ads-deinen-roi-steigerst",
      title: "Wie du mit Google Ads deinen ROI um 300% steigerst",
    },
  ],
};

// Export the post metadata so it can be used in the blog listing
defineExpose({ post });
</script>

<template>
  <div>
    <!-- Table of Contents -->
    <div
      class="mb-10 p-6 bg-black border border-[#f60] rounded-lg"
      data-aos="fade-up"
    >
      <h3 class="text-xl font-bold text-white mb-4">Inhaltsverzeichnis</h3>
      <ul class="space-y-2">
        <li>
          <a
            href="#section-1"
            class="text-white hover:text-[#f60] transition-colors flex items-center gap-2"
          >
            <span class="text-[#f60]">1.</span> Section Title 1
          </a>
        </li>
        <li>
          <a
            href="#section-2"
            class="text-white hover:text-[#f60] transition-colors flex items-center gap-2"
          >
            <span class="text-[#f60]">2.</span> Section Title 2
          </a>
        </li>
        <!-- Add more sections as needed -->
      </ul>
    </div>

    <!-- Post Content -->
    <div class="prose prose-lg max-w-none" data-aos="fade-up">
      <!-- Section 1 -->
      <div id="section-1">
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">
          Section Title 1
        </h2>
        <p class="text-white mb-6">
          Your content goes here. You can write paragraphs of text.
        </p>

        <!-- Example of an image -->
        <div class="my-8" data-aos="zoom-in">
          <img
            src=""
            alt="Description of image"
            class="rounded-lg w-full h-auto shadow-lg"
          />
          <p class="text-center text-sm text-white opacity-75 mt-2">
            Image caption goes here
          </p>
        </div>

        <p class="text-white mb-6">More content after the image.</p>
      </div>

      <!-- Section 2 -->
      <div id="section-2">
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">
          Section Title 2
        </h2>

        <!-- Example of a list -->
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li class="text-white">List item 1</li>
          <li class="text-white">List item 2</li>
          <li class="text-white">List item 3</li>
        </ul>

        <!-- Example of a quote -->
        <div class="bg-black border-l-4 border-[#f60] p-6 my-8 rounded-r-lg">
          <p class="text-white italic">
            This is a quote or testimonial that you want to highlight.
          </p>
          <p class="text-[#f60] mt-2 font-semibold">— Author Name</p>
        </div>

        <!-- Example of a tip box -->
        <div class="bg-[#f60]/10 border border-[#f60] p-6 my-8 rounded-lg">
          <div class="flex items-start gap-4">
            <div class="p-2 bg-[#f60] rounded-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-white mb-2">Pro Tip</h4>
              <p class="text-white">
                Here's a helpful tip or important information you want to
                highlight.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Add more sections as needed -->
    </div>
  </div>
</template>
