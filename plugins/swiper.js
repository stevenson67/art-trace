import Vue from "vue";
// import Swiper from "swiper";
import Swiper, {Navigation, Pagination} from "swiper";
Swiper.use([Navigation, Pagination])

Vue.prototype.$swiper = Swiper
