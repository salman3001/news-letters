const { ref } = Vue
const searchInputApp = Vue.createApp({
  setup() {
    const text = ref(false)

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
    }
  },
})

searchInputApp.use(Quasar, {
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
searchInputApp.mount('#search-input')
