<template>
  <div class="box">
    <!-- 　　　　//这里往下的class类一定不要改变，改变就会报错　　　　// -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <div class="pagecontent">
            <div v-for="listitem in item.list" :key="listitem.id" class="man">
              <img
                class="animate__animated animate__heartBeat animate__infinite infinite"
                src="../assets/sjsimages/sjs05.png"
              />
              <p class="name">{{ listitem.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script>
import { getDesigner } from "@/api/swiperApi.js";
import Swiper from "swiper";
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getDesigner();
  },
  mounted() {
    this.getBanner(); //轮播
  },
  methods: {
    //封装轮播函数
    getBanner() {
      //调用延迟加载 $nextTick
      this.$nextTick(() => {
        let swiper = new Swiper(".swiper-container", {
          //是否循环
          loop: true,
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
        this.list = newlist;
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
  .swiper-container {
    width: 100%;
    height: 100%;
    background: #000;
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
        .man {
          width: 25%;
          margin-top: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 20px;
          box-sizing: border-box;
          img {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
          }
          .name {
            font-size: 20px;
            font-weight: 600;
            color: #fff;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
// .swiper-container
//   border 1px solid #0f0
//   width 600px
//   img
//     width 600px
//     height 400px
</style>
