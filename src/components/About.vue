<template>
  <div class="box">
    <!-- 　　　　//这里往下的class类一定不要改变，改变就会报错　　　　// -->
    <div class="swiper-containerabout">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <div class="swiperContent" :style="item | filterBack">
            <div class="left" v-show="index == currentIndex">
              <p>{{ desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <!-- <el-dialog :visible.sync="dialogVisible" width="80%">
      <el-image :src="headerimage" style="display: block"></el-image>
    </el-dialog> -->
  </div>
</template>
<script>
import headerimage from "@/assets/sjsimages/sjs05.png";
import { getAbout } from "@/api/swiperApi.js";
import Swiper from "swiper";
export default {
  data() {
    return {
      dialogVisible: false,
      desc: "",
      list: [],
      headerimage,
      currentIndex: "",
    };
  },
  computed: {
    classname() {
      return "swiper-containerabout" + new Date().getTime();
    },
  },
  filters: {
    filterBack(data) {
      return `background-image: url('${data}')`;
    },
  },
  created() {
    this.getAbout();
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
      let that = this;
      this.$nextTick(() => {
        let swiper = new Swiper(".swiper-containerabout", {
          //是否循环
          loop: true,
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
          on: {
            slideChangeTransitionEnd: function() {
              that.currentIndex = this.activeIndex;
            },
          },
          //   pagination: {
          //     //小圆点
          //     el: ".swiper-pagination",
          //   },
        });
      });
    },

    // h获取人像
    getAbout() {
      getAbout().then((res) => {
        this.desc = res.desc;
        this.list = res.imgs;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fafafa;
    overflow: hidden;
    .swiper-containerabout {
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
                background-position: 50%;
                background-repeat: no-repeat;
                .left {
                    background: rgba(0, 0, 0, 0.4);
                    width: 450px;
                    min-height: 280px;
                    max-height: 340px;
                    overflow-y: auto;
                    margin-left: 100px;
                    color: #fff;
                    line-height: 1.5;
                    text-indent: 40px;
                    font-size: 18px;
                    padding: 16px;
                    text-align: left;
                    border-radius: 5px;
                    //   animation: zoomInDown;
                    //   animation: slideInDown;
                    animation: zoomInLeft;
                    animation-duration: 0.8s;
                }
            }
            .pagecontent {
                // margin-top: 100px;
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
