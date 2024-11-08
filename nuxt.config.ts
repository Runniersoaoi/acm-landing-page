export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  experimental: { typedPages: true },

  runtimeConfig: {
    public: {
      strapiImage: "http://localhost:1337",
      strapiHost: "http://localhost:1337/api/",
      strapiToken:
        "fc06b1632acfabe929b667a26d2557511aba0739d73fc64ba1507f37636d46e7ba4183d6ea36e175ad3fda44d88690d3973e2d971d18be05db076ddb482554bd23248e91047a1d16161d36d5d42bfc8a7155708d322bddea2ecad438c19e6d9ce7dd6729fd9fc12f30539cc817e79e086a9116606046aed13928dfebf80150f9",
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxtjs/strapi",
    "@pinia/nuxt",
    "@nuxtjs/strapi",
    "@nuxt/icon",
    "nuxt-swiper",
  ],

  swiper: {
    modules: ["autoplay", "grid"],
    prefix: "Swiper",
    styleLang: "css",
  },

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
    ],
  },

  app: {
    head: {
      title: "Contact App",
      titleTemplate: "%s - Contact App",
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/pdfmake.min.js",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/vfs_fonts.min.js",
          defer: true,
        },
      ],
    },
  },

  strapi: {
    auth: { populate: ["role"] },
    cookie: { maxAge: 60 * 60 * 24 * 20 },
  },

  routeRules: {
    "/": {
      redirect: "/home",
    },
  },
});
