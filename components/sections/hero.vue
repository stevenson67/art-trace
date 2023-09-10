<template>
  <section class="hero">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="hero-slide-item">
              <img src="media/catalog.jpg" alt="Catalog">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-slide-item">
              <img src="media/catalog.jpg" alt="Catalog">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-slide-item">
              <img src="media/catalog.jpg" alt="Catalog">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-slide-item">
              <img src="media/catalog.jpg" alt="Catalog">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-slide-item">
              <img src="media/catalog.jpg" alt="Catalog">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-slide-item">
              <img src="media/catalog.jpg" alt="Catalog">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-slide-item">
              <img src="media/catalog.jpg" alt="Catalog">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-slide-item">
              <img src="media/catalog.jpg" alt="Catalog">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-slide-item">
              <img src="media/catalog.jpg" alt="Catalog">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-slide-item">
              <img src="media/catalog.jpg" alt="Catalog">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-slide-item">
              <img src="media/catalog.jpg" alt="Catalog">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-slide-item">
              <img src="media/catalog.jpg" alt="Catalog">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-slide-item">
              <img src="media/catalog.jpg" alt="Catalog">
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-scrollbar"></div>
      </div>
  </section>
</template>

<script>
export default {
  name: "hero",
  mounted() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      this.swiper = new this.$swiper(".swiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        speed: 700,
        loop: true,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        }
      })
    }
  }

}
</script>

<style lang="scss">
.hero {
  height: 100%;
  &-slide {
    &-item {
      width: 100%;
      img {
        position: relative;
        transition: 0.3s ease-in-out;
        z-index: 1;
      }
    }
    &-item:hover img {
      transform: scale(1.2);
      z-index: 2;
    }
  }
}
.swiper {
  height: 100%;
  &-slide {
    display: flex;
    align-items: center;
  }
}
</style>
