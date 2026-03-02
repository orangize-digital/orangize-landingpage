// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'de'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'SeRlVe4a9vWrgh-Cjhkp6V1JS_SUUmcxXj0v8zqNvIo' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      script: [
        // Google Tag Manager
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5XC5FJ49');`
        }
      ]
    }
  },

  css: [
    '~/assets/css/app.css'
  ],

  nitro: {
    preset: 'netlify'
  },

  routeRules: {
    // Pre-render all static pages for better SEO
    '/': { prerender: true },
    '/google-ads': { prerender: true },
    '/google-ads-analyse': { prerender: true },
    '/google-ads-bielefeld': { prerender: true },
    '/google-ads-buende': { prerender: true },
    '/google-ads-herford': { prerender: true },
    '/google-ads-minden': { prerender: true },
    '/google-ads-porta-westfalica': { prerender: true },
    '/google-ads-handwerker': { prerender: true },
    '/google-ads-branchen': { prerender: true },
    '/website-erstellen-lassen': { prerender: true },
    '/website-erstellen-bielefeld': { prerender: true },
    '/website-erstellen-buende': { prerender: true },
    '/website-erstellen-herford': { prerender: true },
    '/website-erstellen-minden': { prerender: true },
    '/website-erstellen-porta-westfalica': { prerender: true },
    '/website-erstellen-bad-oeynhausen': { prerender: true },
    '/impressum': { prerender: true },
    '/datenschutz': { prerender: true },
    '/danke': { prerender: true },
    '/blog/**': { prerender: true }
  }
})
