export default {
    head: {
      title: 'Lux Lighting',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      ],
    },
    css: ['./assets/style/_base.scss'],
    router: {
      linkExactActiveClass: 'nav-active-link'
    },
    plugins: [
      { src: '~/plugins/ymapPlugin.js', mode: 'client' }
    ]
  }
  