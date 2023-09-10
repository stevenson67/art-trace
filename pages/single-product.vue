<template>
  <section class="singleProduct">
    <div class="container">
      <div class="singleProduct-wrap">
        <button class="singleProduct-close">Закрыть</button>
        <div class="singleProduct-item">
          <div class="singleProduct-item-info">
            <div class="singleProduct-item-info-text">
              <h1 class="singleProduct-item-info-text__title">Plate  large number 23</h1>
              <p class="singleProduct-item-info-text__desc">Весьма интересная картина представлена на данном слайдер Весьма интересная картина представлена на данном слайдер Весьма интересная картина представлена на данном слайдер</p>
            </div>
            <div class="singleProduct-item-info-feature">
              <div class="singleProduct-item-info-feature__price">
                <h3 class="singleProduct-item-info-feature__price-title">цена</h3>
                <span class="singleProduct-item-info-feature__price-desc">230.000 ₽</span>
              </div>
              <div class="singleProduct-item-info-feature__size">
                <h3 class="singleProduct-item-info-feature__size-title">Размер (м)</h3>
                <span class="singleProduct-item-info-feature__size-desc">2х2</span>
              </div>
              <div class="singleProduct-item-info-feature__weight">
                <h3 class="singleProduct-item-info-feature__weight-title">Вес</h3>
                <span class="singleProduct-item-info-feature__weight-desc">32 кг</span>
              </div>
              <div class="singleProduct-item-info-feature__btn">
                <button>в корзину</button>
              </div>
            </div>
          </div>
          <div class="singleProduct-item-img">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="singleProduct-slide-item">
                    <img src="media/catalog.jpg" alt="Catalog">
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="singleProduct-slide-item">
                    <img src="media/catalog.jpg" alt="Catalog">
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="singleProduct-slide-item">
                    <img src="media/catalog.jpg" alt="Catalog">
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="singleProduct-slide-item">
                    <img src="media/catalog.jpg" alt="Catalog">
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="singleProduct-slide-item">
                    <img src="media/catalog.jpg" alt="Catalog">
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="singleProduct-slide-item">
                    <img src="media/catalog.jpg" alt="Catalog">
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="singleProduct-slide-item">
                    <img src="media/catalog.jpg" alt="Catalog">
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-scrollbar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "single-product",
  mounted() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      this.swiper = new this.$swiper(".swiper", {
        slidesPerView: 2.2,
        spaceBetween: 12,
        speed: 700,
        // loop: true,
        // mousewheel: true,
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
.singleProduct {
  height: 90%;
  //flex-grow: 1;
  &-close {
    font-style: italic;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    text-align: right;
    letter-spacing: -0.06em;
    text-transform: uppercase;
    margin: 12px 0;
    width: 100%;
  }
  &-wrap {
    height: 100%;
  }
  &-slide {
    &-item {
      height: 100%;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  &-item {
    display: flex;
    height: 100%;
    gap: 100px;
    &-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 40%;
      &-text {
        display: flex;
        flex-direction: column;
        gap: 24px;
        &__title {
          font-style: normal;
          font-weight: 400;
          font-size: 44px;
          line-height: 42px;
          text-transform: uppercase;
          font-stretch: ultra-condensed;
        }
        &__desc {
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;

        }
      }
      &-feature {
        &__price, &__size, &__weight {
          &-title {
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            text-transform: uppercase;
            color: rgba(0, 0, 0, 0.3);
          }
          &-desc {
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            text-transform: uppercase;
            font-stretch: ultra-condensed;
          }
        }
        &__btn {
          margin: 44px 0;
          button {
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            text-align: center;
            letter-spacing: -0.06em;
            text-transform: uppercase;
            border: 1px solid #000000;
            border-radius: 32px;
            padding: 12px;
            width: 100%;
          }
        }
      }
    }
    &-img {
      width: 60%;
      margin-bottom: 44px;
    }
  }
}
</style>
