<template>
 <main class="first__container" data-page="1">
  <div class="first__main-container" v-show="pageNumber === 1">
   <app-title-block></app-title-block>
   <app-video-button-block></app-video-button-block>
   <!-- <div class="first__main-title-box">
    
   </div> -->
  </div>
  <div class="first__number-page-container">
   <div class="first__this-number"  :style="{color: pageNumber === 1 ? '' : '#2A323B', letterSpacing: pageNumber === 2 ? '-5.5px' : ''}">
    0{{pageNumber}}
   </div>
   <div class="first__total-number-block" :style="{color: pageNumber === 1 ? '' : '#D9DDE3'}">
    <span class="first__total-slash">/</span>
    <span class="first__total-number">05</span>
   </div>
  </div>
 </main>
</template>

<script>
import appTitleBlock from './firstComponents/titleblock.vue'
import appVideoButtonBlock from './firstComponents/videobuttonblock.vue'

export default {
 components: {
  appTitleBlock,
  appVideoButtonBlock
 },
 computed: {
  pageNumber() {
    return this.$store.getters.SLIDENUMB
  }
 },
}
</script>