const bodyParser = require('body-parser')
const axios = require('axios')

export default {
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tutorial-nuxt!!!',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/global-components.js',
    '~plugins/date-filter.js',
    '~plugins/vue-kinesis.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  env: {
    fbAPIKey: 'AIzaSyAjSDpwlbu69TaTOF4mZ5azShwM-idYV00',
  },

  router: {
    //middleware: 'log',
  },

  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],
  // generate: {
  //   routes: function() {
  //     return axios.get('https://tutorial-nuxt-6f9a8-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
  //       .then(res => {
  //         console.log(res.data)
  //         const routes = []
  //         for (const key in res.data) {
  //           console.log('KEY:', key)
  //           routes.push('/posts/' + key)
  //         }
  //         console.log('done')
  //       })

  //   }
  // }
}
