<template>
  <div class="loading" v-show="show">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <section class="loading_text">
      {{showTxt ? showTxt : '加载中'}}
    </section>
  </div>
</template>

<script>
  export default {
    replace: true,
    props: ['show', 'showTxt']
  };
</script>
<style lang="scss">
  @import '../../assets/scss/mixin';

  .loading {
    width: 15rem;
    height: 10rem;
    margin-top: 5rem;
    margin-left: 6rem;
    & > span {
      display: inline-block;
      width: .4rem;
      border-radius: 4px;
      background: lightgreen;
      -webkit-animation: load 1s ease infinite;
    }

  }

  @-webkit-keyframes load {
    0%, 100% {
      height: 40px;
      background: lightgreen;
    }
    50% {
      height: 70px;
      margin: -15px 0;
      background: lightblue;
    }
  }

  .loading span:nth-child(2) {
    -webkit-animation-delay: 0.2s;
  }

  .loading span:nth-child(3) {
    -webkit-animation-delay: 0.4s;
  }

  .loading span:nth-child(4) {
    -webkit-animation-delay: 0.6s;
  }

  .loading span:nth-child(5) {
    -webkit-animation-delay: 0.8s;
  }

  .loading_text {
    @include sc(.9rem, #67c23a);
    margin-left: .2rem;
    /*left: .5rem;*/
  }
</style>
