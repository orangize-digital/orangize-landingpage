<template>
  <footer class="bg-black text-base-content py-6">
    <div
      class="footer container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-6 text-right"
    >
      <!-- Logo & Slogan -->
      <div class="md:text-left">
        <a href="#">
          <img
            src="/src/assets/images/logo/logo-new.svg"
            alt="Orangize Logo"
            class="h-14"
          />
        </a>
        <p class="mt-3 text-white">Orangize deine Bussiness</p>

        <!-- Kontaktinformationen -->
        <p class="mt-4 text-white flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M510.678 112.275c-2.308-11.626-7.463-22.265-14.662-31.054-1.518-1.915-3.104-3.63-4.823-5.345-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557 0-37.395 7.996-50.21 20.814-1.715 1.715-3.301 3.43-4.823 5.345-7.199 8.789-12.354 19.428-14.598 31.054-.922 4.487-1.386 9.124-1.386 13.812v259.833c0 9.968 2.114 19.55 5.884 28.203 3.497 8.26 8.653 15.734 14.926 22.001 1.59 1.586 3.169 3.044 4.892 4.494 12.286 10.175 28.145 16.32 45.319 16.32h369.958c17.18 0 33.108-6.145 45.323-16.384 1.718-1.386 3.305-2.844 4.891-4.43 6.27-6.267 11.425-13.741 14.994-22.001v-.064c3.769-8.653 5.812-18.171 5.812-28.138V126.087c0-4.688-.457-9.325-1.322-13.812zM46.509 101.571c6.345-6.338 14.866-10.175 24.512-10.175h369.958c9.646 0 18.242 3.837 24.512 10.175 1.122 1.129 2.179 2.387 3.112 3.637L274.696 274.203c-5.348 4.687-11.954 7.002-18.696 7.002-6.674 0-13.276-2.315-18.695-7.002L43.472 105.136c.858-1.25 1.915-2.436 3.037-3.565z"
              fill="#f60"
            />
          </svg>
          <a href="mailto:info@orangize.de" class="hover:text-[#f60]">
            info@orangize.de
          </a>
        </p>
        <p class="mt-2 text-white flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z"
              fill="#f60"
            />
          </svg>
          <a href="tel:015122031093" class="hover:text-[#f60]">
            0151 22031093
          </a>
        </p>
      </div>

      <!-- Navigation -->
      <nav
        class="flex bg-transparent border-none flex-col md:flex-row gap-4 mt-4 md:mt-0"
      >
        <a href="/impressum" class="text-white hover:text-[#f60]">Impressum</a>
        <a href="/datenschutz" class="text-white hover:text-[#f60]"
          >Datenschutz</a
        >
      </nav>

      <!-- Copyright -->
      <p class="mt-4 md:mt-0 text-white">
        &copy; 2025 - Alle Rechte vorbehalten
      </p>
    </div>
  </footer>
</template>
