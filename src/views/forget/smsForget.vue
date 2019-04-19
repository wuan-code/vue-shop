<template>
  <div class="loginContainer">
    <head-top
      :head-title="headerTitle"
      :go-back="true">
    </head-top>
    <section class="span_data" v-if="!isSendSms">
      您的密保手机号码是
      <span :key="userMobile">{{ userMobile | formatAllPhone }}</span>

      ,请点击"获取验证码":
    </section>
    <section class="span_data" v-else>
      我们已经给您的密保手机号码{{userMobile | formatAllPhone}}发送了一条验证短信:
    </section>
    <form class="loginForm">
      <section class="input_container phone_number">
        <input type="text" placeholder="请输入验证码" name="mobileCode" v-model="mobileCode">
        <button @click.prevent="getVerifyCode" class="right_phone_number" v-show="!computedTime">
          获取验证码
        </button>
        <button @click.prevent v-show="computedTime">已发送({{computedTime}}s)</button>
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
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return {
        headerTitle: '短信验证',
        isSendSms: false,
        userAccount: null,
        userMobile: '10000000000',
        mobileCode: null, //短信验证码
        validate_token: null, //获取短信时返回的验证值，登录时需要
        computedTime: 0, //倒数记时

        showAlert: false, //显示提示组件
        alertText: null, //提示的内容
      }
    },
    methods: {
      //获取短信验证码
      async getVerifyCode(){
        this.computedTime = 60
        this.isSendSms = true
        this.timer = setInterval(() => {
          this.computedTime--;
          if (this.computedTime == 0) {
            this.isSendSms = false
            clearInterval(this.timer)
          }
        }, 1000)
        //判读用户是否存在

        // 发送短信验证码

        this.showAlert = true;
        this.alertText = "短信服务暂未开通";

      },
      // 确认提交
      submitData(){
        // 检验验证码是否通过
        this.$router.push({
          path: '/forget/newPassword',
          query: {'userToken': '34623746gsaduiye=='}
        })
      }
      ,
      /*关闭弹框*/
      closeAlertTip(){
        this.showAlert = !this.showAlert
      }
    },
    created()
    {
      this.$nextTick(function () {
        if (this.isLogined) {
          Message({
            message: '该用户已登录，请退出之后再登录',
            type: 'error',
            duration: 2000,
            showClose: true
          })
          this.$router.push('/')
        }
        if (!this.$route.query.userAccount || !this.$route.query.userMobile) {
          Message({
            message: '出错啦，请重新操作',
            type: 'error',
            duration: 2000,
            showClose: true
          })
          this.$router.push('/')
        }
        this.userAccount = this.$route.query.userAccount
        this.userMobile = this.$route.query.userMobile
        // 验证传参的数据是否存在
      })
    },
    mounted()
    {

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
    watch: {
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

