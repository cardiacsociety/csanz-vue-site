const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#3B8070'},

  /*
  ** Global CSS
  */
  css: [
    // loaded via bulma slim module
    // { src: '~assets/styles/custom.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global-components.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // Note - wanted to override bulma scss vars, ref: http://bgraphic.no/using-bulma-font-awsome-nuxt/
    // line above in CSS field loads the custom css but was being overriden by loading the module below.
    // so have commented out.
    //'@nuxtjs/bulma',

    // https://github.com/mustardamus/nuxt-bulma-slim
    // don't use ~ path shortcut!
    [
      'nuxt-bulma-slim',
      {
        variablesPath: 'assets/styles/custom.scss'
      }
    ],

    '@nuxtjs/font-awesome',
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-cssnext': {
          features: {
            customProperties: false
          }
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
