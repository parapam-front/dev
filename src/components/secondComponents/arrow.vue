<template>
 <div class="second__slide-arrows-container">
  <button class="second__slide-arrow-left" @click="prev">
   <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5227 0.5L0.777673 5.26627L15.5227 9.98075L15.5227 0.5Z" fill="#2E363F"/>
   </svg>
  </button><button class="second__slide-arrow-right"  @click="next">
   <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5227 0.5L0.777673 5.26627L15.5227 9.98075L15.5227 0.5Z" fill="#2E363F"/>
   </svg>
  </button>
 </div>
</template>

<script>
export default {
 computed: {
  swiperNumb() {
    return this.$store.getters.SWIPERNUMB
  },
 },
 methods: {
  prev() {
   if (this.swiperNumb === 3) {
    this.$store.commit('swiper', 2)
   } else if (this.swiperNumb === 2) {
     this.$store.commit('swiper', 1)
   } else if (this.swiperNumb === 1) {
     this.$store.commit('swiper', 0)
   }
  },
  next() {
   if (this.swiperNumb === 0) {
    this.$store.commit('swiper', 1)
   } else if (this.swiperNumb === 1) {
     this.$store.commit('swiper', 2)
   } else if (this.swiperNumb === 2) {
     this.$store.commit('swiper', 3)
   }
  }
 }
}
</script>