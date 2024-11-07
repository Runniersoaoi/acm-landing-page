export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  experimental: { typedPages: true },

  runtimeConfig: {
    public: {
      strapiImage: "http://localhost:1337",
      strapiHost: "http://localhost:1337/api/",
      strapiToken:
        "f041d838728fe6e14d744eab540d5aec555c06965a06c1e883cf43a65650f70eb8d2aa8a1ccf97a471f5fb9f0532698f25538349910243bb278a89d48ba1a04a3a340e819e9d4f8164d1d8649c7f0c76cd592afe091078689e622e519fa70313c3336c1ca402b645fbbf217893ca3910981d97d71ed04f570b8841b1617431f8",
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
