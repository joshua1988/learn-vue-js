import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// var App = {
//   template: '<div>app</div>'
// }

new Vue({
  render: h => h(App),
  // components: {
  //   'app': App
  // }
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App),
// })