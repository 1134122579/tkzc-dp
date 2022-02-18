import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/common.css";
import "./assets/iconfont.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "animate.css";
import "swiper/js/swiper.min.js";
import "swiper/css/swiper.min.css";
// 适配
// import "lib-flexible";
// import VueAwesomeSwiper from "vue-awesome-swiper";
// import style (>= Swiper 6.x)
// import "swiper/swiper-bundle.css";
// import "swiper/css";

// import style (<= Swiper 5.x)
// import "swiper/css/swiper.css";
Vue.use(ElementUI);
// Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
