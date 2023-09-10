<template>
 <header class="header">
   <div class="container">
     <div class="header-wrap">
       <div class="header-logo">
         <img src="/icons/logo.svg" alt="Logo">
       </div>
       <div class="header-cat">
         <div class="header-cat__item">
           Картины
           <span></span>
         </div>
       </div>
       <div class="header-nav">
         <div class="header-nav__basket">Корзина</div>
         <input class="header-nav__menuInput" type="checkbox" id="menu">
         <label for="menu">
           <div class="header-nav__menu"></div>
         </label>
         <!--Menu-->
         <div class="menu">
           <div class="container">
             <div class="menu-content">
               <div class="menu-contentText">
                 <!--Menu header-->
                 <div class="menu-header">
                   <div class="menu-header-logo">
                     <img src="/icons/menuLogo.svg" alt="Logo">
                   </div>
                   <div class="menu-header-basket">
                     Корзина
                     <label for="menu">
                       <div class="header-nav__menuClose"></div>
                     </label>
                   </div>
                 </div>
                 <!--Menu main-->
                 <div class="menu-main">
                   <div class="menu-main-info">
                     <a class="menu-main-info-link">Каталог</a>
                     <a class="menu-main-info-link">О нас</a>
                     <a class="menu-main-info-link">Контакты</a>
                   </div>
                   <div class="menu-main-faq">

                   </div>
                   <div class="menu-contentImg">
                     <div class="menu-contentImg-left">
                       <client-only>
                         <dynamic-marquee direction="column" :repeat="true" :hoverPause="true" :speed="{type: 'pps', number: 100}">
                           <img src="media/catalog.jpg">
                         </dynamic-marquee>
                       </client-only>
                     </div>
                     <div class="menu-contentImg-right">
                       <client-only>
                         <dynamic-marquee direction="column" :reverse="true" :repeat="true" :hoverPause="true" :speed="{type: 'pps', number: 100}">
                           <img src="media/catalog.jpg">
                         </dynamic-marquee>
                       </client-only>
                     </div>
                   </div>
                 </div>
                 <!--Menu footer-->
                 <div class="menu-footer">
                   <div class="menu-footer-link">
                     <a class="menu-footer-linkInst">( instagram )</a>
                     /
                     <a class="menu-footer-linkYoutube">( Youtube )</a>
                   </div>
                   <div class="menu-footer-contact">
                     <p>Россия, Москва, ул. Пушкин 7, оф 2</p>
                   </div>
                 </div>
               </div>

             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </header>
</template>

<script>
import DynamicMarquee from "vue-dynamic-marquee";

export default {
  components: {DynamicMarquee },
  name: "header"
}
</script>

<style lang="scss">
.header-nav__menuInput:checked ~ .menu {
  opacity: 1;
  display: block;
}
.header-nav__menuClose {
  position: relative;
  width: 33px;
  height: 33px;
}
.header-nav__menuClose:before {
  content: '';
  position: absolute;
  top: 35%; left: 0;
  width: 100%;
  height: 2px;
  background: #FFFFFF;
}
.header-nav__menuClose:after {
  content: '';
  position: absolute;
  top: 50%; right: 0;
  width: 75%;
  height: 2px;
  background: #FFFFFF;
}
.menu {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: #131313;
  opacity: 0;
  transition: 0.5s;
  &-content {
    display: flex;
    height: 100vh;
    gap: 20px;
  }
  &-contentText {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    &-basket {
      display: flex;
      align-items: center;
      gap: 36px;
      font-style: italic;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      text-align: right;
      letter-spacing: -0.06em;
      text-transform: uppercase;
      color: #FFFFFF;
    }
  }
  &-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    &-info {
      &-link {
        font-weight: 400;
        font-size: 64px;
        line-height: 77px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-stretch: ultra-condensed;
        color: #FFFFFF;
      }
    }
  }
  &-footer {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    &-link, &-link a {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
      color: #FFFFFF;
    }
    &-contact {
      font-style: italic;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      text-align: right;
      letter-spacing: -0.06em;
      text-transform: uppercase;
      color: #FFFFFF;
    }
  }
  &-contentImg {
    display: flex;
    width: 30%;
    height: 100%;
    gap: 20px;
    &-left, &-right {
      width: 50%;
      height: 100%;
    }
  }
}
.header {
  &-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
  &-logo {
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-cat {
    border: 1px solid rgba(0, 0, 0, 0.94);
    border-radius: 32px;
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      width: 160px;
      font-style: italic;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -0.06em;
      text-transform: uppercase;
      span {
        background: #000000;
        border-radius: 50%;
        width: 8px;
        height: 8px;
      }
    }
  }
  &-nav {
    display: flex;
    align-items: center;
    gap: 36px;
    &__basket {
      font-style: italic;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      text-align: right;
      letter-spacing: -0.06em;
      text-transform: uppercase;
    }
    &__menu {
      position: relative;
      width: 33px;
      height: 33px;
    }
    &__menuInput {
      position: absolute;
      opacity: 0;
      overflow: visible;
    }
    &__menu:before {
      content: '';
      position: absolute;
      top: 35%; left: 0;
      width: 100%;
      height: 2px;
      background: #000000;
    }
    &__menu:after {
      content: '';
      position: absolute;
      top: 50%; right: 0;
      width: 75%;
      height: 2px;
      background: #000000;
    }
  }
  &-menu {

  }
}
</style>
