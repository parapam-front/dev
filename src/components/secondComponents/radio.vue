<template>
 <div class="second__slide-radio-container" >
  <input class="second__slide-radio" data-radio="1"  type="radio"  v-model="swipe" :value="0" id="slideradio1">
  <label for="slideradio1"></label>
  <input class="second__slide-radio" data-radio="2" type="radio" v-model="swipe" :value="1" id="slideradio2"> 
  <label for="slideradio2"></label>
  <input class="second__slide-radio" data-radio="3" type="radio" v-model="swipe" :value="2" id="slideradio3">
  <label for="slideradio3"></label>
  <input class="second__slide-radio" data-radio="4" type="radio" v-model="swipe" :value="3" id="slideradio4">
  <label for="slideradio4"></label>

 </div>
</template>

<script>
export default {
 computed: {
  swipe: {
   get() {
    return this.$store.getters.SWIPERNUMB
   },
   set(value) {
    this.$store.commit('swiper', value)
   }
  },
 },
 methods: {

 }
}
</script>