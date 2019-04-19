<template>
  <div class="loginContainer">
    <head-top
      :head-title="headerTitle"
      :second-title="secondTitle"
      :go-back="true"
      @transferchange="changeLoginWay">
    </head-top>

    <form class="loginForm" v-if="!loginWay">
      <section class="input_container phone_number">
        <input type="text" placeholder="手机号" name="phone" maxlength="11" v-model="phoneNumber">
        <button @click.prevent="getVerifyCode" :class="{right_phone_number:rightPhoneNumber}" v-show="!computedTime">
          获取验证码
        </button>
        <button @click.prevent v-show="computedTime">已发送({{computedTime}}s)</button>
      </section>
      <section class="input_container">
        <input type="text" placeholder="验证码" name="mobileCode" maxlength="6" v-model="mobileCode">
      </section>
    </form>
    <form class="loginForm" v-else>
      <section class="input_container">
        <input type="text" placeholder="手机/邮箱/用户名" v-model.lazy="userAccount">
      </section>
      <section class="input_container">
        <input v-if="!showPassword" type="password" placeholder="密码" v-model="passWord">
        <input v-else type="text" placeholder="密码" v-model="passWord">
        <div class="button_switch" :class="{change_to_text: showPassword}">
          <div class="circle_button" :class="{trans_to_right: showPassword}" @click="changePassWordType"></div>
        </div>
      </section>
    </form>

    <p class="login_tips">
      温馨提示：该登录只是测试使用，只需要用户名和密码都输入即可
    </p>
    <p class="login_tips">
    </p>
    <div class="login_container" @click="loginAction">登录</div>
    <router-link to="/forget" class="to_forget">忘记密码?</router-link>
    <router-link to="/register" class="to_register">新用户注册</router-link>

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
  import {mapGetters, mapActions} from 'vuex'
  import {Message} from 'element-ui'

  export default {
    data () {
      return {
        headerTitle: '登录',
        secondTitle: '密码登录',
        loginWay: false, //登录方式，默认手机登录

        userAccount: null, //用户名
        passWord: null, //密码
        showPassword: false, // 是否显示密码


        phoneNumber: null, //电话号码
        mobileCode: null, //短信验证码
        validate_token: null, //获取短信时返回的验证值，登录时需要
        computedTime: 0, //倒数记时

        showAlert: false, //显示提示组件
        alertText: null, //提示的内容
      }
    },
    methods: {
      ...mapActions([
        'login' // 将 `this.login()` 映射为 `this.$store.dispatch('login')`
      ]),
      //获取短信验证码
      async getVerifyCode(){
        if (this.rightPhoneNumber) {
          this.computedTime = 60;
          this.timer = setInterval(() => {
            this.computedTime--;
            if (this.computedTime == 0) {
              clearInterval(this.timer)
            }
          }, 1000)
          //判读用户是否存在

          // 发送短信验证码

          this.showAlert = true;
          this.alertText = "短信服务暂未开通";
        }
      },

      loginAction(){
        // 验证是否全部数据
        let loginData = {}
        if (this.loginWay) {
          loginData = {
            'userNumber': this.userAccount,
            'password': this.passWord,
            'type': 'account'
          }
        } else {
          loginData = {
            'userNumber': this.phoneNumber,
            'password': this.mobileCode,
            'type': 'phone'
          }
        }
        let validateResult = this.$options.filters.validateArray(loginData)
        if (!validateResult) {
          Message({
            message: '请输入正确的登录信息',
            type: 'error',
            duration: 2000,
            showClose: true
          })
          return false
        }
        // 验证返回的验证码

        // 验证手机号码是否正确
        let result = this.login(loginData)
        if (result) {
          Message({
            message: '登录成功',
            type: 'success',
            duration: 2000,
            showClose: true
          })
          this.$router.push('/')
        }
      },

      /*是否显示密码*/
      changePassWordType(){
        this.showPassword = !this.showPassword;
      },
      /*是否修改登录方式*/
      changeLoginWay(){
        [this.headerTitle, this.secondTitle] = [this.secondTitle, this.headerTitle]
        this.loginWay = !this.loginWay
      },
      /*关闭弹框*/
      closeAlertTip(){
        this.showAlert = !this.showAlert
      }
    },
    created () {
      let that = this
      if (that.$route.query.type && that.isLogined) {
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

    /* 计算属性 computed: {
     ...mapState({
     users: state => state.user.users,
     })
     }
     或者created时候调用:
     this.$store.getters.users
     */
    computed: {
      // ... 扩展运算符，主要用于函数调用
      // 动态计算属性，相当于this.$store.getters.users
      ...mapGetters([
        'users',
        'isLogined'
      ]),
      //判断手机号码
      rightPhoneNumber: function () {
        return /^1\d{10}$/gi.test(this.phoneNumber)
      }
    },
    watch: {},
    components: {
      headTop,
      alertTip,
    },
  }
</script>

<style lang='scss'>
  @import '../../assets/scss/mixin';
  @import '../../assets/scss/login';
</style>
