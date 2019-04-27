<template>
  <div class="registerContainer">
    <head-top
      :head-title="headerTitle"
      :go-back="true">
    </head-top>

    <form class="registerForm">
      <el-row type="flex" class="row-bg">
        <el-col :span="5">
          <section class="span_register_data">
            昵称
          </section>
        </el-col>
        <el-col :span="18">
          <section class="input_container2">
            <input type="text" placeholder="例如:廿一" v-model="userData.userAccount">
          </section>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg">
        <el-col :span="5">
          <section class="span_register_data">
            手机号
          </section>
        </el-col>
        <el-col :span="18">
          <section class="input_container2">
            <input type="text" placeholder="请填写手机号" v-model="userData.userMobile">
          </section>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg">
        <el-col :span="5">
          <section class="span_register_data">
            密码
          </section>
        </el-col>
        <el-col :span="18">
          <section class="input_container2">
            <input type="password" placeholder="填写密码" v-model="userData.passWord">
          </section>
        </el-col>
      </el-row>
    </form>
    <div class="register_container" @click="forget" v-if="allInput">注册</div>
    <div class="display_register_container" v-else>注册</div>
    <p class="register_tips">吧啦吧啦吧啦一大堆，请点击<a>用户条款</a></p>

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
        headerTitle: '手机号注册',
        userData: {
          userAccount: null,
          userMobile: null,
          passWord: null,
        },
        showAlert: false, //显示提示组件
        alertText: null, //提示的内容
        allInput: false,
      }
    },
    methods: {
      forget(){
        // 验证账号是否存在

        let existing = false
        // 存在账号，提示框显示用户已存在
        if (existing) {
          this.showAlert = true
          this.allInput = '该手机号码已存在，请输入新的手机号码，或者直接登录'
          return false
        }

        // 跳转到登录页面

        this.$router.push('/login')
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
    watch: {
      userData: {
        handler: function () {   //特别注意，不能用箭头函数，箭头函数，this指向全局
          // 可以过滤是否是手机号,密码长度等

          // 使用filter，判断该数组是否存在空值
          this.allInput = this.$options.filters.validateArray(this.userData)
        },
        deep: true    //深度监听
      }
    },
    components: {
      headTop,
      alertTip,
    }
  }
</script>
<style lang='scss'>
  @import '../../assets/scss/mixin';

  .registerContainer {
    padding-top: 1.95rem;
    p, span, input {
      font-family: Helvetica Neue, Tahoma, Arial;
    }
  }

  .registerForm {
    //background-color: #fff;
    margin-top: 1.1rem;
  }

  .span_register_data {
    @include sc(.7rem, #44474e);
    margin: 0 .5rem 0.5rem;
  }

  .input_container2 {
    @include sc(.7rem, #44474e);
    /*& > 指当前class下面所有的*/
    & > input {
      @include sc(.6rem, #44474e);
      background-color: transparent;
      border: 0;
      width: 80%;
    }
  }

  .register_container {
    margin: 0 .5rem 1rem;
    @include sc(.7rem, #fff);
    background-color: #12b7f5;
    padding: .5rem 0;
    border: 1px;
    border-radius: 0.15rem;
    text-align: center;
  }

  .display_register_container {
    margin: 0 .5rem 1rem;
    @include sc(.7rem, #fff);
    background-color: #ccc;
    padding: .5rem 0;
    border: 1px;
    border-radius: 0.15rem;
    text-align: center;
  }

  .register_tips {
    @include sc(.5rem, red);
    padding: .4rem .6rem;
    line-height: .5rem;
    a {
      color: #3b95e9;
    }
  }
</style>

