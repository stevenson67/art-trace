import Vue from "vue";

// import Swiper from "swiper";
import Swiper, {Navigation, Pagination, FreeMode, Mousewheel, Scrollbar} from "swiper";
Swiper.use([Navigation, Pagination, FreeMode, Mousewheel, Scrollbar])

Vue.prototype.$swiper = Swiper

