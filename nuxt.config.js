
export default {
  mode: 'universal',
  
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  loading: { color: '#fff' },
  
  css: [
    '~assets/css/reset.css'
  ],

  transitions: {
    name: 'fade',
    mode: 'out-in'
  },

  components: true,
  
  plugins: [
    {
      src: '~/plugins/vant',
      ssr: true
    },
    {
      src: '~/plugins/lib-flexible',
      mode: 'client'
    }
  ],
  
  buildModules: [
  ],
  
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://glasses-ecommerce-nuxtjs.netlify.app' : 'http://localhost:3000'
    // baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  
  build: {    
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          rootValue: 37.5,
          propList: ['*']
        }
      },
      preset: {
        autoprefixer: true
      }
    }
  }
}
