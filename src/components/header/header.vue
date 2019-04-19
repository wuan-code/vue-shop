<template>
  <div class="header">
    <el-row>
      <el-col :span="3">
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
          </svg>
        </section>
      </el-col>
      <el-col :span="lastSpan" v-if="headTitle">
        <div class="title_text">{{headTitle | text(5)}}</div>
      </el-col>
      <el-col :span="secondSpan" v-if="secondTitle">
        <!--<div class="grid-content bg-purple">{{ secondTitle |text(5) }}</div>-->
        <div class="title_text2" @click="changeTitle">{{ secondTitle | text(5) }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  export default {
    props: ['headTitle', 'goBack', 'secondTitle'],
    data(){
      return {
        lastSpan: null,
        secondSpan: null,
      }
    },
    created () {
    },
    mounted () {
      this.lastSpan = this.secondSpan = null
      if (this.secondTitle) {
        this.lastSpan = 10
        this.secondSpan = 9
      } else {
        this.lastSpan = 10
      }
    },
    computed: {},
    methods: {
      changeTitle(){
        this.$emit('transferchange', true)
      }
    },
    watch: {
      headTitle(value, OldValue){
//        console.log(value, OldValue)
      },
    },
    components: {
      ElCol,
      ElRow
    },
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/scss/mixin';

  .header {
    background-color: $blue;
    @include fixedView;
    z-index: 100;
    @include wh(100%, 1.95rem);
  }

  .head_goback {
    left: 0.4rem;
    @include wh(0.6rem, 1rem);
    line-height: 2.5rem;
    margin-left: .4rem;
  }

  .head_login {
    right: 0.55rem;
    @include sc(0.65rem, #fff);
    @include ct;
    .login_span {
      color: #fff;
    }
    .user_avatar {
      fill: #fff;
      @include wh(.8rem, .8rem);
    }
  }

  .title_text {
    @include sc(0.8rem, #fff);
    /*text-align: center;*/
    font-weight: bold;
    margin: .4rem;
  }

  .title_text2 {
    @include sc(0.6rem, #fff);
    text-align: center;
    font-weight: bold;
    padding: 0;
    margin: .7rem;
  }

</style>
