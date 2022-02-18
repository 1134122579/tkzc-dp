<template>
    <div class="box">　　　　//这里往下的class类一定不要改变，改变就会报错　　　　//
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" >
              <img :src="require('../../assets/img/Ctom1.jpg')"/>
            </div>
            <div class="swiper-slide" >
              <img :src="require('../../assets/img/Ctom2.jpg')"/>
            </div>
            <div class="swiper-slide" >
              <img :src="require('../../assets/img/error404.png')"/>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
        </div>
    </div>
</template>
<script>
import Swiper from "Swiper"; // 引入swiper依赖  在使用过程中我发现有时候开头字母大写可以成功 、有时候小写 若报错就换成另一个，两者引入取其一
// import Swiper from "swiper"; //引入swiper依赖
    export default {
        data() {
            return {

            };
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
                  delay: 5000
                },
                pagination: {
                  //小圆点
                  el: ".swiper-pagination"
                }
              });
            });
          },
        },
        mounted() {
          this.getBanner(); //轮播
        }
    };
</script>
<style lang="scss" scoped>
.box{
  position: absolute;
  width :100%;
  height: 100%;
}
// .swiper-container
//   border 1px solid #0f0
//   width 600px
//   img 
//     width 600px
//     height 400px

</style>