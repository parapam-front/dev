<template>
 <div class="first__video-button-container">
  <div class="first__video-company-descr">
   Компания PACIFIC ASIA GROUP 
   <br>с 2007 года предоставляет качественный сервис по 
   доставке грузов из Китая.
  </div>
  <button class="first__video-button" @mouseover="over" @mouseout="out" @click="videoOpen()">
   <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L11 5L0 10V0Z" fill="#F2F5FA"/>
   </svg>
   <span class="first__video-button-span">Смотреть видео</span>
  </button>
 </div>
</template>

<script>
export default {
 methods: {
  over(e) {
   this.$store.commit('over')
  },
  out() {
   this.$store.commit('out')
  },
  videoOpen() {
   this.$store.commit('videoOpen', true)
  }
 }
}
</script>