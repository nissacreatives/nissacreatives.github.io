// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  app: {
    baseURL: '',
    head: {
      title: 'Nissa Abayan — Graphics Designer & 3D Modeler',
      meta: [
        { name: 'description', content: 'Portfolio of Nissa Abayan — Graphics Designer & 3D Modeler with 8+ years creating brand identity, web layouts, packaging, and 3D mockups for digital-first brands.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Poppins:wght@300;400;500;600;700&display=swap' }
      ]
    }
  }
});
