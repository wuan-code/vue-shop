<template>
  <section class="foot_guide">
    <section @click="linkTo('/home')" class="guide_item">
      <svg class="icon" aria-hidden="true" id="home">
        <use xlink:href="#icon-shouyex" :style="{color:active ==='home' ?'#3a8ee6':''}">
        </use>
      </svg>
      <span :style="{color:active ==='home' ?'#3a8ee6':''}">
        首页
      </span>
    </section>

    <section @click="linkTo('/classify')" class="guide_item">
      <svg class="icon" aria-hidden="true" id="home">
        <use xlink:href="#icon-fenlei" :style="{color:active ==='classify' ?'#3a8ee6':''}">
        </use>
      </svg>
      <span :style="{color:active ==='classify' ?'#3a8ee6':''}">分类</span>
    </section>

    <section @click="linkTo('/news')" class="guide_item">
      <svg class="icon" aria-hidden="true" id="home">
        <use xlink:href="#icon-news_icon" :style="{color:active ==='news' ?'#3a8ee6':''}">
        </use>
      </svg>
      <span :style="{color:active ==='news' ?'#3a8ee6':''}">新闻</span>
    </section>
    <section @click="linkTo('/my')" class="guide_item">
      <svg class="icon" aria-hidden="true" id="home">
        <use xlink:href="#icon-iconfonticon5" :style="{color:active ==='my' ?'#3a8ee6':''}">
        </use>
      </svg>
      <span :style="{color:active ==='my' ?'#3a8ee6':''}">我的</span>
    </section>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        active: 'home',
      }
    },
    methods: {
      linkTo(path){
        this.$router.push(path)
      }

    },
    computed: {},
    created(){
    },
    mounted(){
      let newActive = this.$route.path.slice(1)
      if (newActive) {
        this.active = newActive
      }
      console.log(this.active)
    },
    watch: {},
    components: {},
  }
</script>


<style lang="scss" scoped>
  @import '../../assets/scss/mixin';

  .foot_guide {
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    @include wh(100%, 1.95rem);
    display: flex;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, .1);
  }

  .guide_item {
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding-top: 0.15rem;
    .icon_style {
      @include wh(.8rem, .8rem);
      margin-top: .3rem;
      fill: #ccc;
    }
    span {
      @include sc(.45rem, #666);
    }
  }

</style>
