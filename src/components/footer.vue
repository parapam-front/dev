<template>
 <footer class="footer__container" v-show="!videoOpen">
  <button class="footer__button" @click="changeSlide">
   <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.259078L10.2481 10.5071L20.7552 0L0 0.259078Z"/>
   </svg>
   <span class="footer__button-span">Листайте вниз</span>
  </button>
  <div class="footer__social-container">
   <app-facebook></app-facebook>
   <app-twitter></app-twitter>
  </div>  
 </footer>
</template>

<script>
import appFacebook from './footerComponents/facebook.vue'
import appTwitter from './footerComponents/twitter.vue'

export default {
 components: {
  appFacebook,
  appTwitter
 },
 methods: {
  changeSlide() {
   this.$store.commit('changeSlide', this.slideNumb)
  }
 },
 computed: {
  videoOpen() {
   return this.$store.getters.VIDEOPLAY
  },
  slideNumb() {
   return this.$store.getters.SLIDENUMB
  }
 },
}
</script>