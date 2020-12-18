import axios from 'axios'

export default async () => {
  // example async function here to grab data
  // theoretically needed for other elements in the config
  const data = await axios.get('https://api.nuxtjs.dev/posts')

  const config = {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
      title: 'nuxt-sitemap-vercel-404',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
      '@nuxtjs/sitemap'
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    }
  }
  return config
}
