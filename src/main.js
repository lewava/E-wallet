import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMask from 'v-mask'

Vue.use(VueMask);

Vue.config.productionTip = false

new Vue({
  router,
  data: () => {
    return {
      cards: [
        {
          holder: "Leon Wass Vallin",
          vendor: "bitcoin",
          number: "1111 1111 1111 1111",
          month: "01",
          year: "21",
        },
        {
          holder: "Leon Wass Vallin",
          vendor: "blockchain",
          number: "2222 2222 2222 2222",
          month: "02",
          year: "22",
        },
        {
          holder: "Leon Wass Vallin",
          vendor: "evil",
          number: "3333 3333 3333 3333",
          month: "03",
          year: "23",
        },
        {
          holder: "Leon Wass Vallin",
          vendor: "ninja",
          number: "4444 4444 4444 4444",
          month: "04",
          year: "24",
        },
      ]
    }
  },
  render: h => h(App)
}).$mount('#app')
