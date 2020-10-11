<template>
 <section class=" second__container">
  <div class="second__title-container">
   <h1 class="second__title">
    Транспортные услуги
   </h1>
   <div class="second__tab-container">
    <input type="radio" id="tab-first" class="tab-first" v-model="tab" :value="1">
    <label for="tab-first">Основные</label>
    <input type="radio" id="tab-second" class="tab-second" v-model="tab" :value="2">
    <label for="tab-second">Дополнительные</label>
   </div>
  </div>
  <transition name='first'>
   <app-second-slide v-show="tab === 1"></app-second-slide>
  </transition>
  <transition name="second">
  <app-second-descr v-show="tab === 2"></app-second-descr>
  </transition>
 </section>
</template>

<script>
import appSecondSlide from './secondComponents/secondslide.vue'
import appSecondDescr from './secondComponents/seconddescr.vue'
export default {
 data() {
  return {
   tab: 1
  }
 },
 components: {
  appSecondSlide,
  appSecondDescr
 }
}
</script>

<style lang="scss">
 .first-enter-active, 
 .first-leave-active {
   transition: .5s;
   
 }
 .first-enter, .first-leave-to{
 opacity: 0;
 transform: translateX(200px);
 }
 .second-enter-active, .second-leave-active {
  transition: .5s;
   
 }
 .second-enter, .second-leave-to{
 opacity: 0;
 transform: translateX(-200px);
 }
</style>