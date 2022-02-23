<template>
  <div class="box">
    <!-- 　　　　//这里往下的class类一定不要改变，改变就会报错　　　　// -->
    <div class="swiper-containerjtjg">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <div class="swiperContent" :style="item | filterBack">
          </div>
        </div>
      </div>
      <!-- <div class="swiper-pagination"></div> -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script>
import headerimage from "@/assets/sjsimages/sjs05.png";
import { getjiagou } from "@/api/swiperApi.js";
let img = require('@/assets/groupimg/20220221170353.jpg')
import Swiper from "swiper";
export default {
  data() {
    return {
      dialogVisible: false,
      list: ["http://mfyfile.greatorange.cn/Design/jtjg2.png", "http://mfyfile.greatorange.cn/Design/jtjg4.png"],
      headerimage,
    };
  },
  filters: {
    filterBack(data) {
      return `background-image: url('${data}')`;
    },
  },
  computed: {
    classname() {
      return "swiper-containerjtjg" + new Date().getTime();
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
        let swiper = new Swiper(".swiper-containerjtjg", {
          //是否循环
          loop: true,
          observer: true,
          observeParents: false,
          autoplay: false,
          // autoplay: {
          //   //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
          //   disableOnInteraction: false,
          //   // 自动播放时间：毫秒
          //   delay: 5000,
          // },
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
      getjiagou().then((res) => {
        // this.list = res;
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
    background: #fff;
    overflow: hidden;
    .swiper-containerjtjg {
        width: 100%;
        height: 100%;
        // background: #000;
        .swiper-slide {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .swiperContent {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: top;
                background-repeat: no-repeat;
            }
        }
    }
    .swiper-button-prev,
    .swiper-button-next {
        background: rgba(0, 0, 0, 0.7);
        padding: 20px;
        border-radius: 5px;
        color: #fff;
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
