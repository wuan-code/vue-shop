<template>
  <section class="home-news">
    <el-row :gutter="24" :class="{anim:animate==true}">
      <el-col :span="4" :style="{color:newsInfo.type_color?newsInfo.type_color:''}" >
        {{newsInfo.type}}
      </el-col>
      <el-col :span="2" class="news-show">
        <img src="/static/img/notice.png">
      </el-col>
      <el-col :span="12" :style="{color:newsInfo.title_color?newsInfo.title_color:''}" style="padding-left: 1.2rem">
        {{newsInfo.sort_title}}
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
      return {
        animate: false,
        newsInfo: {
          id: 0,
          type: "资讯",
          type_color: "",
          sort_title: "欢迎来到武安阁",
          title: "欢迎来到武安阁",
          title_color: "",
          link: "",
          time: "2019-05-01"
        },
      }
    },
    methods: {
      showNewsQueue: function () {
        this.animate = true;     // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        // setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
        setTimeout(() => {      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.newsInfo = this.homeNews[0]
          this.homeNews.push(this.homeNews[0]); // 将数组的第一个元素添加到数组的
          this.homeNews.shift();  //删除数组的第一个元素
          this.animate = false;   // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        }, 500)
      },
    },
    computed: {
      ...mapGetters([
        'homeNews',
      ]),
    },
    created(){
      //setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式
      setInterval(this.showNewsQueue, 1500)
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

  .home-news {
    height: .8rem;
    font-size: 12px;
    left:.8rem;
  }
  .el-row{
    margin: 0 !important;
    padding-left: .8rem;
  }

  .news-show {
    img {
      @include wh(.8rem, .8rem)
    }
  }

</style>
