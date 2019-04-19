<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <template v-if="isLogined">
      <h2>welcome {{users.username}}</h2>
      <h3>{{users.slogan}}</h3>
      <el-button>
        <router-link to="/login?type=reset" class="reset">
          重新登录
        </router-link>
      </el-button>
      <br/>
      <el-button @click="resetLogin()">
        清除缓存
      </el-button>
    </template>
    <template v-else>
      <h3>
        <router-link to="/login">
          登录
        </router-link>
      </h3>
    </template>

  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button"
  export default {
    components: {ElButton},
    data () {
      return {
        msg: 'Just a demo!',
      }
    },
    methods: {
      ...mapActions(
          ['resetLogin']
      )
    },
    created () {
    },
    mounted () {

    },
    computed: {
      ...mapGetters([
        'users',
        'isLogined'
      ])
    },
    watch:{
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/scss/mixin';
  h1, h2,h3 {
    text-align: center;
    font-weight: normal;
  }
  .el-button{
    width: 100%;
    .reset{
      @include sc(.8rem,#12b7f5);
    }
  }
  a {
    color: #12b7f5;
  }
</style>
