<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
        v-for="item in imageList"
        :key="item.id"
        class="imageStylelist"
      >
        <div
          class="swiperContent"
          v-if="item.img"
          :style="item.img | filterBack"
        >
          <div class="swiperContent_text">
            <h5>{{ item.name || "我是标题" }}</h5>
            <p>我是内容介绍</p>
          </div>
        </div>
        <!-- <img style="width: 100%" :src="item.img" alt="" /> -->
        <!-- <el-image :src="item.img"></el-image> -->
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- 切换 -->
    </swiper>
    <div class="dropdownStyle">
      <div class="flexStyle">
        <div class="flexStylebutton">
          <div class="swiperbuttonprev" slot="button-prev">
            <i class="el-icon-caret-left"></i>
          </div>
          <div class="swiperbuttonnext" slot="button-next">
            <i class="el-icon-caret-right"></i>
          </div>
        </div>
        <!-- @click="typebutton" -->
        <p class="swipername">{{ value || "全部" }}</p>
        <!-- v-show="istypelist" -->
        <ul class="typeList">
          <li v-for="item in typelist" :key="item.id" @click="sureType(item)">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- <el-dropdown>
        <span class="el-dropdown-link">
          动效选择<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="item in effectList"
            :key="item.typr"
            @click="command(item)"
            >{{ item.name }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown> -->
    </div>
  </div>
</template>

<script>
// 引入插件
import { getTopClass, getClass, getFlimList } from "@/api/swiperApi.js";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Home",
  props: {
    list: {
      //  轮播数据
      type: Array,
    },
    navheight: {
      type: Number,
    },
    typelist: {
      // 数据类型
      type: Array,
    },
    typename: {
      // 数据类型
      type: String,
    },
  },

  components: {
    swiper,
    swiperSlide,
  },
  filters: {
    filterBack(data) {
      return `background-image: url('${data}')`;
    },
  },
  data() {
    return {
      value: "",
      istypelist: false,
      imageList: this.list,
      effectList: [
        {
          type: "fade",
          name: "淡入",
        },
        {
          type: "cube",
          name: "方块",
        },
        {
          type: "coverflow",
          name: "3d流",
        },
        {
          type: "cards",
          name: "cards",
        },
      ],
      swiperOption: {
        loop: true,
        // loopAdditionalSlides: 1,
        speed: 1000, //默认就是300毫秒
        // direction: "vertical",
        followFinger: false,
        mousewheel: true,
        // keyboard: true,
        // virtualTranslate: true,
        // slidesPerView: "auto",
        // loopedSlides: 8,
        // parallax: true,
        // loopPreventsSlide: false, //默认true，阻止
        keyboardControl: false, //设置为true时，能使用键盘方向键控制slide滑动。
        // preloadImages: true, //默认为true，Swiper会强制加载所有图片。
        effect: "fade", //切换效果"fade"（淡入）、"cube"（方块）、"coverflow"（3d流）、"flip"（3d翻转）、"cards"(cards)、"creative"（创意性
        // fade: true,
        autoplay: 3000,
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false,
        // },

        // 显示分页
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true, //允许分页点击跳转
        // },
        // 设置点击箭头
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        // navigation: {
        //   nextEl: ".swiperbuttonnext",
        //   prevEl: ".swiperbuttonprev",
        // },
        navigation: {
          nextEl: ".el-icon-caret-left",
          prevEl: ".el-icon-caret-right",
        },
      },
    };
  },
  watch: {
    list(newV, oldV) {
      this.imageList = newV;
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log(this.swiper);
    // startAutoplay
    // this.swiper.slideTo(50, 1000, false);
  },
  methods: {
    startAutoplay() {
      this.swiper.startAutoplay();
    },
    stopAutoplay() {
      this.swiper.stopAutoplay();
    },
    slideNext() {
      console.log(2);
      //   this.swiper.slideNext();
    },
    slidePrev() {
      console.log(1);
      //   this.swiper.slidePrev();
    },
    getFlimList(id) {
      getFlimList({ class_id: id }).then((res) => {
        this.imageList = res;
        console.log(this.imageList);
        this.swiper.update();
      });
    },
    sureType(item) {
      console.log(item);
      this.value = item.name;
      this.istypelist = !this.istypelist;
      //   this.getFlimList(item.id);
    },
    typebutton() {
      this.istypelist = !this.istypelist;
    },
    command(vale) {
      console.log(vale);
      console.log(this.swiper);
    },
    buttonprev() {
      this.swiper.allowSlidePrev();
    },
    buttonnext() {
      this.swiper.allowSlideNext();
    },
  },
};
</script>

<style lang="scss" scoped>
.recommendPage {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .swiper-container {
    position: relative;
    width: 100%;
    height: 100%;
    .swiper-slide {
    }
    .imageStylelist {
      background: #edeceb;
      width: 100%;
      height: 100%;
      .swiperContent {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        .swiperContent_text {
          margin-left: 40px;
          padding: 20px;
          background: rgba(0, 0, 0, 0.2);
          width: 250px;
          height: 180px;
          color: #fff;
          font-size: 18px;
          h5 {
            font-size: 30px;
            line-height: 1.5;
          }
        }
      }
    }
  }
  .dropdownStyle {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    z-index: 55;
    bottom: 100px;
    right: 60px;
    height: 80px;
    .flexStyle {
      display: flex;
      align-items: center;
      width: 260px;
      font-size: 20px;
      line-height: 1.5;
      border: 1px solid #595656;
      text-align: center;
      font-weight: 600;
      position: relative;
      background: rgba(0, 0, 0, 0.2);
      p {
        padding: 0;
        margin: 0;
        width: 100%;
        display: inline-block;
        color: #fff;
      }
      &:hover .typeList {
        display: block;
      }
      .swipername {
        padding: 0 10px;
      }
      .typeList {
        display: none;
        position: absolute;
        bottom: 80px;
        height: 300px;
        overflow-y: auto;
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        line-height: 1.5;
        overflow-x: hidden;
        font-size: 20px;
        li {
          padding: 10px 0;
          overflow-x: hidden;
          word-wrap: normal;
          &:hover {
            background: #fdb732;
            color: #595656;
          }
        }
      }
      .flexStylebutton {
        background: #595656;
        width: 60px;
        height: 100%;
        flex-shrink: 0;
        font-size: 25px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
