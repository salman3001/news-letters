import '../css/app.css'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { Quasar } from 'quasar'
import { initRoutes } from '@eidellev/adonis-stardust/client'

initRoutes()

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(Quasar, {
        config: {
          brand: {
            primary: '#050101',
            secondary: '#c58422',
          },
          // notify: {}, // default set of options for Notify Quasar plugin
          // loading: {}, // default set of options for Loading Quasar plugin
          // loadingBar: {}, // settings for LoadingBar Quasar plugin
          // ..and many more (check Installation card on each Quasar component/directive/plugin)
        },
      })
      .mount(el)
  },
  progress: {
    // The delay after which the progress bar will appear, in milliseconds...
    delay: 250,

    // The color of the progress bar...
    color: '#c58422',

    // Whether to include the default NProgress styles...
    includeCSS: true,

    // Whether the NProgress spinner will be shown...
    showSpinner: false,
  },
})
