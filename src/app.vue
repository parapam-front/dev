<template>
 <div class="main-container" data-type="safariMobileHeight" >
  <div class="video-wrapper" :style="{zIndex: videoOpen == true ? '1': '0'}">
   <video loop muted class="video-bg" data-type="video" src="img/video/bg.mp4" :style="{opacity: videoOpen == true ? '1' : '0'}">
     <source src="img/video/bg.mp4" type="video/mp4">
     <source src="img/video/bg.webm" type="video/webm">
     video не поддерживается вашим браузером
   </video>
  </div>
  <app-header></app-header >
  <transition name="fade">
   <app-first v-show="!videoOpen"></app-first>
  </transition>
  <app-footer></app-footer>
  <app-second v-show="!videoOpen"></app-second>
 </div>
</template>

<script>
import appHeader from './components/header.vue'
import appFirst from './components/first.vue'
import appFooter from './components/footer.vue'
import appSecond from './components/second.vue'
export default {
 components: {
  appHeader,
  appFirst,
  appFooter,
  appSecond
 },
 mounted() {
 },
 methods: {
 },
 computed: {
  videoOpen() {
   return this.$store.getters.VIDEOPLAY
  }
 },
 mounted() {
   // Для того чтобы избавиться от бага с высотой в safari mobile
   const main = document.querySelector('[data-type="safariMobileHeight"]')
   main.style.height = window.innerHeight+'px'
   // чтобы не было бага в хром мобайл при скрытии строчки ввода из-за предыдущего действия
   window.addEventListener('resize', e => {
     main.style.height = window.innerHeight+'px'
     console.log(main.style.height);
   })
 }
}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  }
</style>