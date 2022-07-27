<template>
  <div class="dtdetail">
    <!-- 头部 -->
    <div class="nav" ref="nav">
      <div class="logo" @click="gohome">
        <img :src="logo" style="height: 100%;display:block"></img>
      </div>
    </div>
    <div class="swiper-containerdetail">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <div class="pagecontent" :style="{ '--bgurl': 'url(' + item + ')' }">
            <div class="imageStyle">
            <el-image v-if="item" style="width:100%;height: 100%;" :src="item" fit="contain"></el-image>
                    <!-- 详情 -->
        <div class="desc" v-if="desc">
           <div v-html="desc"></div>
        </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

    </div>
    <div class="foolter" @click="back">
      <!-- animate__animated  animate__rotateOut animate__slower animate__infinite -->
      <!-- <img class="animate__animated  animate__rotateOut animate__slower animate__infinite" src="../assets/backicon2.png" alt=""> -->
       <img class="" src="../assets/backicon3.png" alt="">
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo6.png";
import dt1 from "@/assets/dtdetailimage/dtDetail.png";
import dt2 from "@/assets/dtdetailimage/dtDetail1.png";
import Swiper from "swiper";
import { getDynamicDetails } from "@/api/swiperApi.js";
import { getToken, setToken, removeToken, getdetail, setdetail } from "@/utils/auth.js";
export default {
  data() {
    return {
      list: [],
      logo,
      desc:'',
    };
  },
  mounted() {
    this.getDynamicDetails()
  },
  methods: {
    //封装轮播函数
    getBanner() {
      //调用延迟加载 $nextTick
      this.$nextTick(() => {
        let swiper = new Swiper(".swiper-containerdetail", {
          //是否循环
          loop: false,
          effect: "fade", //切换效果"fade"（淡入）、"cube"（方块）、"coverflow"（3d流）、"flip"（3d翻转）、"cards"(cards)、"creative"（创意性
          observer: true,
          sleep: 1000,
          observeParents: false,
          autoplay: false,
          // autoplay: {
          //   //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
          //   disableOnInteraction: false,
          //   // 自动播放时间：毫秒
          //   delay: 6000,
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
        console.log(swiper)
      });
    },
    gohome() {
      this.$router.push({
        path: "/"
      })
    },
    back() {
      setdetail('3')
      this.loading = this.$loading({
        lock: true,
        text: "加载中",
                spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      this.$router.go(-1)
      this.loading.close()
    },
    deactivated() {
      this.loading.close()

    },
    async getDynamicDetails() {
      let id = this.$route.query.id
      let res = await getDynamicDetails({ id })
      this.list = JSON.parse(res.desc_img)
      this.desc=res.content
      console.log(this.list)
      this.getBanner(); //轮播
    },
  }
};
</script>

<style lang="scss" scoped>
.dtdetail {
    width: 100%;
    height: 100vh;
    background: #efefef;
    .swiper-containerdetail {
        width: 100%;
        height: 100%;
        position: relative;
        // background: #000;
        .swiper-slide {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .pagecontent {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                position: relative;
                z-index: 1;
                .imageStyle{
                height: 100%;
                 width: 100%;
                position: relative;
             .desc{
                  position: absolute;
                  z-index: 10;
                  left: 0;
                  right: 0;
                  margin: auto;
                  bottom: 10px;
                  min-width: 180px;
                  max-width: 60%;
                  min-height: 100px;
                  max-height: 120px;
                  overflow-y: auto;
                  background: rgba(0,0,0,.3);
                  padding: 20px;
                  border-radius: 5px;
                  box-shadow: 0 0 30px rgba(0,0,0,1);
                  color: #fff;
                }
                }

                &::before {
                    content: "";
                    position: absolute;
                z-index: -1;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: transparent var(--bgurl) center center no-repeat;
                    filter: blur(9px);
                    z-index: -1;
                    background-size: cover;
                }
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

    .nav {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;
        width: 100%;
        box-sizing: border-box;
        padding: 40px;
        display: flex;
        justify-content: flex-end;
        .logo {
            height: 40px;
            cursor: pointer;
            background:rgba(255,255,255,0.01);
        }
    }
    .foolter {
        position: absolute;
        bottom: 50px;
        right: 50px;
        height: 60px;
        z-index: 999;
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
        background: rgba(0, 0, 0, 0.7);
        box-sizing: border-box;
        padding: 8px;
        cursor: pointer;
        img {
            height: 100%;
        }
    }
}
</style>
