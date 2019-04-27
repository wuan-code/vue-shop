<template>
  <div class="home">
    <home-swipe></home-swipe>
    <home-classify></home-classify>
    <home-news></home-news>
    <home-goods-list></home-goods-list>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import homeSwipe from "./children/homeSwipe.vue"
  import homeClassify from "./children/homeClassify.vue"
  import homeNews from "./children/homeNews.vue"
  import homeGoodsList from "./children/homeGoodsList.vue"
  import HomeFooter from "../../components/footer/index.vue"

  export default {
    data () {
      return {}
    },
    methods: {
      ...mapActions([
        'resetLogin',
        'homeInit'
      ])
    },
    created () {
      this.homeInit()
    },
    mounted () {
    },
    computed: {
      ...mapGetters([
        'users',
        'isLogined',
      ])
    },
    watch: {},
    components: {
      homeSwipe,
      homeClassify,
      homeNews,
      homeGoodsList,
      HomeFooter,
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/scss/mixin';

  h1, h2, h3 {
    text-align: center;
    font-weight: normal;
  }

  .el-button {
    width: 100%;
    .reset {
      @include sc(.8rem, #12b7f5);
    }
  }

  a {
    color: #12b7f5;
  }

</style>
