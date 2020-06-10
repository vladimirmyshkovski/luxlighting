export default {
  mode: 'universe',
  head: {
    title: 'Lux Lighting',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ]
  },
  css: ['./assets/style/_base.scss'],
  router: {
    linkExactActiveClass: 'nav-active-link'
  },
  plugins: [{ src: '~/plugins/ymapPlugin.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/component-cache'
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://lux-light.herokuapp.com'
  }
}
