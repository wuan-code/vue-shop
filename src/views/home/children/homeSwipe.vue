<template>
  <swiper :options="swiperOption" ref="mySwiper" class="home-swipe">
    <swiper-slide v-for="item in homeSwipeData" :key="item.id">
      <a :href="item.url">
        <!--懒加载:使用 v-lazy 代替 :src-->
        <!--<img v-lazy="item.img" alt=""/>-->
        <img :src="item.img" class="swiper-lazy">
        <span class="fadingEffect">{{item.title}}</span>
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    data(){
      return {
        swiperOption: {
          loop: true,          //循环
          autoplay: {      //自动播放
            delay: 3000
          },
          speed: 800,          //滑动速度
          direction: 'horizontal',          //滑动方向
          effect: 'fade',
          grabCursor: true,
          lazyLoading: true,//懒加载开启
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
          },
        }
      }
    },
    methods: {
      ...mapActions([
        'homeSwipe',
      ])
    },
    computed: {
      ...mapGetters([
        'homeSwipeData',
      ]),
    },
    created(){
      if (this.homeSwipeData.length == 0) {
        this.homeSwipe()
      }
    },
    mounted(){
    },
    watch: {},
    components: {
      swiper,
      swiperSlide
    },
  }
</script>
<style lang="scss">
  .home-swipe {
    height: 11.5rem;
    margin-top: 1px;
    img {
      width: 100%;
      height: 11.5rem;
    }
  }

  .fadingEffect {
    position: absolute;
    top: 1rem;
    left: 2rem;
    opacity: 0; /*实先规定文字的状态是不显示的*/
    animation: fade-in 4s ease 0s 1; /*调用名称为fade-in的动画，全程动画显示时间4S，进入方式为ease，延时0S进入，播放次数1次*/
    -webkit-animation: fade-in 4s ease 0s 1;
    -moz-animation: fade-in 4s ease 0s 1;
    -o-animation: fade-in 4s ease 0s 1;
    -ms-animation: fade-in 4s ease 0s 1;

    /*规定动画的最后状态为结束状态*/
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    -ms-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
