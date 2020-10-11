export default {
  state: {
    videoPlay: false,
    slideNumber: 1,
    tabNumber: 1,
    swiperNumb: 0
  },
  mutations: {
    // при наведении мыши получаем доступ к видео и включаем его
    over: function() {
      const vid = document.querySelector('[data-type="video"]')
      vid.style.opacity = '0.3'
      console.log('ssss');
      vid.play()
    },
    // когда убираешь ховер с кнопки видео ставится на паузу и скрывается
    out: function(state) {
      // eslint-disable-next-line indent
      const vid = document.querySelector('[data-type="video"]')
      if (state.videoPlay == false) {
        vid.style.opacity = '0'
        vid.pause()
      }
    },
    // при клике на кнопку активируем видео и скрываем ненужные компоненты
    // при клике на крестик возвращаем всё обратно
    videoOpen: function(state, payload) {
      state.videoPlay = payload
    },
    changeSlide: function(state) {
      const first = document.querySelector('[data-page="1"]')
      if (state.slideNumber === 1) {
        first.style.height = '0'
        state.slideNumber++
      } else {
        first.style.height = ''
        state.slideNumber--
      }
    },
    swiper: function(state, payload) {
      state.swiperNumb = payload
      const swiper = document.querySelector('[data-type="swiper"]')
      swiper.style.left = `${-state.swiperNumb*100}%`
      console.log(swiper.style.left);
    }
  },
  getters: {
    // значение для v-show компонентов зависящее от активности видео
    VIDEOPLAY: state => state.videoPlay,
    SLIDENUMB: state => state.slideNumber,
    SWIPERNUMB: state => state.swiperNumb,
    TABNUMB: state => state.TabNumb
  }
}
