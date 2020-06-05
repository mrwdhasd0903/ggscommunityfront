import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'assets/global.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/mono-blue.css' //样式文件
import App from './App.vue'
import router from './router'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre', 'code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.use(ElementUI);
Vue.use(mavonEditor)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')