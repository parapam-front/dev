<template>
 <header class="header__container">
  <app-phone v-show="!videoOpen" />
  <img class="logo" src="img/logo.png" alt="logo" v-show="!videoOpen">
  <app-nav v-show="!videoOpen"/>
  <button class="header-close" v-show="videoOpen" @click="videoClose">
   <span class="header-close-span"></span>
   <span class="header-close-span header-close-span-rotate"></span>
  </button>
  <div class="header-line"></div>
 </header>
</template>
<script>
import appPhone from './headerComponents/phone.vue'
import appNav from './headerComponents/nav.vue'
export default {
 components: {
  appPhone,
  appNav
 },
 methods: {
  videoClose() {
   this.$store.commit('videoOpen', false)
  }
 },
 computed: {
  videoOpen() {
   return this.$store.getters.VIDEOPLAY
  }
 },
}
// не понимаю почему бордер вокруг телефона обрывками
</script>
