// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
    css: ["~/assets/css/tailwind.css"],
    components: true,
    app: {
        head: {
          script: [
            { src: 'https://www.googletagmanager.com/gtag/js?id=G-1CXM95S50C', async: true },
          ],
        },
      },
})
