<template>
  <div class="loginContainer">
    <head-top
      :head-title="headerTitle"
      :go-back="true">
    </head-top>
    <section class="span_data">
      新密码:
    </section>
    <form class="loginForm">
      <section class="input_container">
        <input v-if="!showPassword" class="new_password" type="password" placeholder="8-16位，至少含数字/字母/字符两种组合"
               v-model="newPassword">
        <input v-else type="text" class="new_password" placeholder="8-16位，至少含数字/字母/字符两种组合" v-model="newPassword">
        <div class="button_switch" :class="{change_to_text: showPassword}">
          <div class="circle_button" :class="{trans_to_right: showPassword}" @click="changePassWordType"></div>
        </div>
      </section>
    </form>
    <p class="login_tips"></p>
    <div class="login_container" @click="submitData">确定</div>


    <alert-tip
      v-if="showAlert"
      :showHide="showAlert"
      @closeTip="closeAlertTip"
      :alertText="alertText">
    </alert-tip>
  </div>
</template>

<script>
  import headTop from '../../components/header/header'
  import alertTip from '../../components/common/alertTip'
  import {Message} from 'element-ui'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data(){
      return {
        headerTitle: '设置新密码',
        isSendSms: false,
        userToken: null,
        newPassword: null,
        showAlert: false, //显示提示组件
        alertText: null, //提示的内容
        showPassword: false, // 是否显示密码

      }
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      // 确认提交
      submitData(){
        // 检验验证码是否通过

        // 重置密码

        let result = true
        if (result) {
          Message({
            message: '密码修改成功，请重新登录',
            type: 'success',
            duration: 2000,
            showClose: true
          })
          this.$router.push('/login')
        }
      }
      ,
      /*关闭弹框*/
      closeAlertTip(){
        this.showAlert = !this.showAlert
      },
      /*是否显示密码*/
      changePassWordType(){
        this.showPassword = !this.showPassword;
      },
    },
    created(){
      if (this.isLogined) {
        Message({
          message: '该用户已登录，请退出之后再登录',
          type: 'error',
          duration: 2000,
          showClose: true
        })
        this.$router.push('/')
      }
      if (!this.$route.query.userToken) {
        Message({
          message: '出错啦，请重新操作',
          type: 'error',
          duration: 2000,
          showClose: true
        })
        this.$router.push('/')
      }
      this.userToken = this.$route.query.userToken
      // 验证传参的数据是否存在

    },
    mounted(){
    },
    computed: {
      ...
        mapGetters([
          'isLogined'
        ]),
    },
    components: {
      headTop,
      alertTip,
    },
  }
</script>
<style lang='scss'>
  @import '../../assets/scss/mixin';
  @import '../../assets/scss/login';

  .loginForm {
    margin-top: .4rem !important;
  }

  .new_password {
    @include sc(.5rem !important, #666 !important);
    width: 100%;
  }
</style>

