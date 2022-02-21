<template>
  <div class="box">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <!-- 　　　　//这里往下的class类一定不要改变，改变就会报错　　　　// -->
    <!-- <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <div class="pagecontent">
            <div class="left">
              <div class="left_block">
                <img :src="item.cover" alt="">
                <h5>{{item.title}}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div> -->
    <!-- <el-dialog :visible.sync="dialogVisible" width="80%">
      <el-image :src="headerimage" style="display: block"></el-image>
    </el-dialog> -->
  </div>
</template>
<script>
import headerimage from "@/assets/sjsimages/sjs05.png";
import { getDesigner } from "@/api/swiperApi.js";
import Swiper from "swiper";
export default {
  data() {
    return {
      dialogVisible: false,
      list: [{
        title: '天橙书写新答卷，赋能五好新淄博',
        link: 'https://mp.weixin.qq.com/s/zosvylLZnJt_P3TCg9qxdg',
        cover: require('../assets/groupimg/20220221170353.jpg')

      }],
      headerimage,
    };
  },
  computed: {
    classname() {
      return "swiper-container" + new Date().getTime();
    },
  },
  created() {
    this.getDesigner();
  },
  mounted() {
    this.getBanner(); //轮播
  },
  methods: {
    lookButton() {
      this.dialogVisible = true;
    },
    //封装轮播函数
    getBanner() {
      //调用延迟加载 $nextTick
      this.$nextTick(() => {
        let swiper = new Swiper(".swiper-container", {
          //是否循环
          loop: false,
          observer: true,
          observeParents: false,
          autoplay: {
            //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
            disableOnInteraction: false,
            // 自动播放时间：毫秒
            delay: 6000,
          },
          navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          },
          pagination: {
            //小圆点
            el: ".swiper-pagination",
          },
        });
      });
    },

    // h获取人像
    getDesigner() {
      getDesigner().then((res) => {
        let newlist = [];
        let num = parseInt(res.length / 8);
        for (let index = 0; index <= num; index++) {
          newlist.push({ list: res.slice(index * 8, (index + 1) * 8) });
        }
        console.log(newlist);
        // this.list = newlist;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/xkcss/style.css";
.box {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    overflow: hidden;
    .swiper-container {
        width: 100%;
        height: 100%;
        // background: #000;
        .swiper-slide {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .pagecontent {
                margin-top: 100px;
                width: 100%;
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                flex-wrap: wrap;
                padding: 0 40px;
                box-sizing: border-box;
                .left {
                }
            }
        }
    }
}
</style>
<style>
.el-dialog .el-dialog__header {
    padding: 0;
}
.el-dialog .el-dialog__body {
    padding: 0;
    background: rgba(0, 0, 0, 0);
}
</style>
