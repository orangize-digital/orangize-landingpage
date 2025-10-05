<template>
  <div class="w-full max-w-[75rem] mx-auto">
    <div class="text-center mb-6">
      <p class="text-base-content/70">Vertrauen von über 30+ Unternehmen</p>
    </div>

    <!-- Infinite Scrolling Carousel -->
    <div class="overflow-hidden relative">
      <div class="flex animate-scroll whitespace-nowrap">
        <!-- First set of logos -->
        <div class="flex items-center gap-16 px-8 flex-shrink-0">
          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/Dasautoeck.svg"
              alt="DAS Autoeck"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>

          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/Mastersolar.svg"
              alt="Master-Solar GmbH"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>

          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/Metallbaumeister.svg"
              alt="Metallbaumeister Albrecht"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>

          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/WfmInkasso.svg"
              alt="WFM Inkasso"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>

          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/Wiwila.svg"
              alt="Wiwila"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>

          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/Dtconnect.svg"
              alt="DT Connect"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>

          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/Glueckumzuege.svg"
              alt="Glück Umzüge"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>
        </div>

        <!-- Duplicate set for seamless loop -->
        <div class="flex items-center gap-16 px-8 flex-shrink-0">
          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/Dasautoeck.svg"
              alt="DAS Autoeck"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>

          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/Mastersolar.svg"
              alt="Master-Solar GmbH"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>

          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/Metallbaumeister.svg"
              alt="Metallbaumeister Albrecht"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>

          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/WfmInkasso.svg"
              alt="WFM Inkasso"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>

          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/Wiwila.svg"
              alt="Wiwila"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>

          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/Dtconnect.svg"
              alt="DT Connect"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>

          <div
            class="bg-base-content/5 px-6 py-4 rounded-lg flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src="@/assets/images/clients-logo/Glueckumzuege.svg"
              alt="Glück Umzüge"
              class="h-12 w-auto max-w-full transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Infinite scroll animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 25s linear infinite;
  display: flex;
  flex-shrink: 0;
}
</style>
