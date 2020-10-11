<template>
 <div class="second__slide-container" data-type="swiper" :style="{width: slider.length*100+'%'}">
  <div class="second__slide" v-for="(slide,index) in slider" :key="index" :style="{width: 100/slider.length+'%'}">
   <div class="second__slide-upper-container">
    <div class="second__slide-title">Экспресс авиа <br>доставка из Китая {{slide.number}}</div>
    <div class="second__slide-descr">
     Перевозка сборных грузов из Китая 
     в составе сборного контейнера оптимально 
     подходит для перевозки небольших партий в 
     разумные сроки 
     по низкой цене.
    </div>
    <transition name="bitmap">
     <img class="second-slide__img" v-show="slideNumb === 2" src="img/bitmap.png" alt="bitmap">
    </transition>
    
   </div>
   <div class="second__slide-lower-container">
    <button class="second__slide-detail-button">Подробнее</button>
    <div class="second__slide-lower-info" v-for="(inf , index) in info" :key="index">
     <span class="second__slide-lower-info-span">{{inf.light}} —</span>
     <span>{{inf.dark}}</span>
    </div>
   </div>
  </div>
  <div class="second__change-slide-container" 
  >
    <app-arrow></app-arrow>
    <app-slide-radio></app-slide-radio>
  </div>
 </div>
</template>

<script>
import appArrow from './arrow.vue'
import appSlideRadio from './radio.vue'
export default {
 data() {
  return {
   slider: [
    {
     number: 1
    },
    {
     number: 2
    },
    {
     number: 3
    },
    {
     number: 4
    }

   ],
   info: [
    {
     light: 'Минимальная партия груза',
     dark: '400 кг.'
    },
    {
     light: 'Срок доставки',
     dark: '45–50 дней'
    },
    {
     light: 'Стоимость доставки',
     dark: '0,9 $ / кг.'
    }
   ]
  }
 },
 components: {
  appArrow,
  appSlideRadio
 },
 computed: {
  slideNumb() {
   return this.$store.getters.SLIDENUMB
  },
  swiperNumb() {
    return this.$store.getters.SWIPERNUMB
  }
 },
}
</script>

<style lang="scss">
 .bitmap-leave-active {
  transition: opacity 1s;
 }
 .bitmap-enter-active{
   transition: 1s cubic-bezier(0.73,0.16,0.32,0.91) 1s;
   
 }
 .bitmap-leave-to{
  opacity: 0;
 }
 .bitmap-enter{
 opacity: 0;
 transform: translateX(-400px);
 }
</style>