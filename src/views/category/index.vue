<template>
  <div>
    <head-top
      :head-title="headerTitle"
      :go-back="true"
    >
    </head-top>
    <el-tabs :tab-position="tabPosition" class="tab-position" v-if="categoryList.length>0">
      <el-tab-pane v-for="item in categoryList" :label="item.firstCategory.name">
        <goods-list
          :title="item.firstCategory.name"
          :promotionSpus="item.promotionSpus"
          :commoditySpus="item.commoditySpus"
          style="overflow:auto !important;"
        >
        </goods-list>
      </el-tab-pane>
    </el-tabs>
    <home-footer></home-footer>

  </div>
</template>

<script>
  import headTop from '../../components/header/header'
  import HomeFooter from "../../components/footer/index.vue"
  import goodsList from '../../components/common/goodsList.vue'
  import ElTabs from "../../../node_modules/element-ui/packages/tabs/src/tabs"
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data(){
      return {
        headerTitle: '全部分类',
        tabPosition: 'left',

      }
    },
    methods: {
      ...mapActions([
        'categoryInit',
      ])
    },
    computed: {
      ...mapGetters([
        'categoryList',
      ])
    },
    created(){
      this.categoryInit()
    },
    mounted(){
    },
    watch: {},
    components: {
      headTop,
      ElTabs,
      HomeFooter,
      goodsList
    },
  }
</script>

<style lang="scss">
  @import '../../assets/scss/mixin';
  @import '../../assets/scss/category';
</style>
