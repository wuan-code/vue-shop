<template>
  <div class="loginContainer">
    <head-top
      :head-title="headerTitle"
      :go-back="true">
    </head-top>
    <section class="span_data">
      账号:
    </section>
    <form class="loginForm">
      <section class="input_container">
        <input type="text" placeholder="手机/邮箱/用户名" v-model="userAccount">
      </section>
    </form>
    <p class="login_tips"></p>
    <div class="login_container" @click="forget">确定</div>
    <alert-tip
      v-if="showAlert"
      :showHide="showAlert"
      @closeTip="closeAlertTip"
      :alertText="alertText">
    </alert-tip>
    <router-view></router-view>
  </div>
</template>

<script>
  import headTop from '../../components/header/header'
  import alertTip from '../../components/common/alertTip'
  import {Message} from 'element-ui'
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return {
        headerTitle: '输入账号',
        userAccount: null,
        showAlert: false, //显示提示组件
        alertText: null, //提示的内容
      }
    },
    methods: {
      forget(){
        if (!this.userAccount) {
          Message({
            message: '请输入您的账号',
            type: 'error',
            duration: 2000,
            showClose: true
          })
          return false
        }
        // 验证账号是否存在

        let userMobile = 18069855937
        // 存在账号，跳转到短信验证页面
        this.$router.push({
          path: '/forget/smsForget',
          query: {'userAccount': this.userAccount, 'userMobile': userMobile}
        })
      },
      /*关闭弹框*/
      closeAlertTip(){
        this.showAlert = !this.showAlert
      }
    },
    created () {
      if (this.isLogined) {
        Message({
          message: '该用户已登录，请退出之后再登录',
          type: 'error',
          duration: 2000,
          showClose: true
        })
        this.$router.push('/')
      }
    },
    mounted () {
    },
    computed: {
      ...mapGetters([
        'isLogined'
      ]),
    },
    components: {
      headTop,
      alertTip,
    }
  }
</script>
<style lang='scss'>
  @import '../../assets/scss/mixin';
  @import '../../assets/scss/login';

  .loginForm {
    margin-top: .4rem !important;
  }

</style>

