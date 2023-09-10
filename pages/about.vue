<template>
  <section class="about">
    <div class="container">
      <div class="about-wrap">
        <div class="about-hero">
          <div class="about-hero-left">
            <div class="about-hero-left-text">
              <h1 class="about-hero-left-text-title">О нас</h1>
              <p class="about-hero-left-text-desc">Продукция art.trace изготавливается в мастерской города Сочи. Создатели бренда мама и дочь.</p>
            </div>
            <div class="about-hero-left-img">
              <img src="media/catalog.jpg" alt="Img">
            </div>
          </div>
          <div class="about-hero-right">
            <div class="about-hero-right-marina">
              <img class="about-hero-tight-marina-img">
            </div>
            <div class="about-hero-right-cerol"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about"
}
</script>

<style lang="scss">
.about {
  height: 100%;
  &-wrap {
    overflow-x: scroll;
    display: flex;
    height: 100%;
  }
  &-hero {
    display: flex;
    width: 100%;
    &-left, &-right {
      width: 50%;
    }
    &-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-text {
        display: flex;
        flex-direction: column;
        &-title {
          font-weight: 400;
          font-size: 120px;
          line-height: 144px;
          text-transform: uppercase;
          font-stretch: ultra-condensed;
          margin-bottom: 20px;
        }
        &-desc {
          font-weight: 400;
          font-size: 18px;
          line-height: 21px;
          width: 50%;
        }
      }
      &-img {
        img {
          width: 100%;
          height: 600px;
          object-fit: cover;
        }
      }
    }
    &-right {
      &-marina, &-cerol {
        width: 50%;
      }
    }
  }
}
</style>
