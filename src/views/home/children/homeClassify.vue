<template>
  <section class="home-classify">
    <el-row :gutter="24">
      <el-col :span="6" v-for="item in homeClassify" :key="item.id">
        <router-link :to="item.link" class="link_to_classify">
          <div>
            <img :src="item.image_url" :alt="item.description">
            <figcaption :style="{color: item.title_color ? item.title_color:''}">{{item.title}}</figcaption>
          </div>
        </router-link>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  export default {
    data(){
      return {}
    },
    methods: {},
    computed: {
      ...mapGetters([
        'homeClassify',
      ]),
    },
    created(){
    },
    mounted(){
    },
    watch: {},
    components: {
      ElCol,
      ElRow
    },
  }
</script>
<style lang="scss">
  @import '../../../assets/scss/mixin';

  .el-row {
    margin: 0 !important;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .link_to_classify {
    padding: 0.3rem 0;
    @include fj(center);
    img {
      @include wh(1.8rem, 1.8rem);
    }
    figcaption {
      text-align: center;
      @include sc(0.55rem, #666);
    }
  }

</style>
