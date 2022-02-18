<template>
  <div class="page">
    <div class="home" v-if="isauto">
      <!-- 头部 -->
      <div class="nav" ref="nav">
        <div class="logo">
          <el-image :src="logo" style="width: 100%; height: 100%"></el-image>
        </div>
        <!-- 选项 -->
        <el-menu
          mode="horizontal"
          class="menudie"
          :default-active="activeIndex"
          @select="handleSelect"
          :background-color="backgroundcolor"
          :active-text-color="textcolor"
          :text-color="textcolor"
        >
          <el-submenu
            popper-class="submenuStyle"
            v-for="item in navlist"
            :key="item.id"
            v-if="item.children.length > 0"
            :index="item.id"
          >
            <template slot="title"> {{ item.title }} </template>
            <el-menu-item
              v-for="childrenitem in item.children"
              :index="childrenitem.id"
              :key="childrenitem.id"
              >{{ childrenitem.title }}</el-menu-item
            >
          </el-submenu>
          <el-menu-item
            popper-class="submenuStyle"
            v-for="item in navlist"
            :key="item.id"
            v-if="item.children.length <= 0"
            :index="item.id"
            >{{ item.title }}</el-menu-item
          >
        </el-menu>
      </div>
      <!-- 设计案例 -->

      <div class="SwiperModelStyle" v-if="tabId == 2">
        <!-- 轮播内容-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in list" :key="item.id">
              <div class="swiperContent" :style="item.img | filterBack">
                <!-- <div class="swiperContent_text">
                <h5>{{ item.name || "我是标题" }}</h5>
                <p>我是内容介绍</p>
              </div> -->
              </div>
            </div>
          </div>
          <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-pagination"></div>
          <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
          <!-- 翻页 -->
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
              <p class="swipername">{{ value }}</p>
              <!-- v-show="istypelist" -->
              <ul class="typeList">
                <li
                  v-for="item in sonlist"
                  :key="item.id"
                  @click="sureType(item)"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="left">
            <div class="swiperbuttonprev">
              <div class="swiper-button-prev"></div>
            </div>
          </div>
          <div class="right">
            <div class="swiperbuttonnext">
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 天空之橙 -->
      <div class="tkzc_home" v-show="tabId == 1 && tabsonId == '1-1'">
        <!-- :src="videourl" -->
        <video
          src="http://video.greatorange.cn/zm_design.mp4"
          class="video"
          autoplay
          loop
          muted
          object-fit="cover"
        ></video>
        <div class="Desigin">
          <div class="Desiginbutton" @click="goDesigin">天空之橙Desigin</div>
        </div>
      </div>
      <!-- 精英 -->
      <div class="tkzc_home" v-if="tabId == 1 && tabsonId == '1-3'">
        <div class="jytdswiper">
          <!-- <el-carousel
            class="carouselSyle"
            :interval="3000"
            indicator-position="none"
            :autoplay="true"
            ref="carousel"
          >
            <el-carousel-item>
              <div class="imgallstyle">
                <img src="../assets/sjsimages/sjs.png" class="proper" alt="" />
              </div>
            </el-carousel-item>
                <el-carousel-item>
              <div class="imgallstyle">
                <img src="../assets/sjsimages/sjs05.png" class="proper" alt="" />
              </div>
            </el-carousel-item>
                 </el-carousel-item>
                <el-carousel-item>
              <div class="imgallstyle">
                <img src="../assets/sjsimages/sjs06.png" class="proper" alt="" />
              </div>
            </el-carousel-item>
          </el-carousel> -->
          <!-- <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="proper" src="../assets/sjsimages/sjs.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img
                  class="proper"
                  src="../assets/sjsimages/sjs05.png"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  class="proper"
                  src="../assets/sjsimages/sjs06.png"
                  alt=""
                />
              </div>
            </div>

            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div> -->
          <SwiperModel />
        </div>
      </div>
      <!--集团动态 -->
      <div class="tkzc_home" v-show="tabId == 3">
        <!-- :src="videourl" -->
        <div class="jtdt_content">
          <div class="swiper-container1">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in 10" :key="item">
                <div class="jtdt_content_page">
                  <img
                    src="../assets/sjsimages/sjs05.png"
                    class="jtdt_content_page_img"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
            <!-- <div class="swiper-pagination"></div> -->
            <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
            <!-- 翻页 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
      <!-- 联系我们 -->
      <div class="tkzcabout" v-if="tabId == 4">
        <ChinaEcharts />
      </div>
    </div>
    <!-- 密码页 -->
    <div class="suosttyle" v-else>
      <div class="suoblock">
        <p class="title">天空之橙Desigin</p>
        <img src="../assets/auth-icon.png" alt="" />
        <div class="inputstyle">
          <el-input
            placeholder="请输入密码"
            v-model="passwordvalue"
            show-password
            @change="passwordchange"
            center
          ></el-input>
        </div>
        <el-button color="#000" size="small" @click.enter="passwordchange" round
          >立即进入</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"; // 引入swiper依赖  在使用过程中我发现有时候开头字母大写可以成功 、有时候小写 若报错就换成另一个，两者引入取其一
import logo from "@/assets/logo.png";
import videourl from "@/assets/tkzc.mp4";
import ProperModel from "@/components/ProperModel.vue";
import SwiperModel from "@/components/SwiperModel.vue";

import {
  getTopClass,
  getClass,
  getFlimList,
  getCity,
} from "@/api/swiperApi.js";
import ChinaEcharts from "@/components/ChinaEcharts.vue";
import { getToken, setToken, removeToken } from "@/utils/auth.js";

export default {
  name: "carrousel",
  filters: {
    filterBack(data) {
      return `background-image: url('${data}')`;
    },
  },
  components: {
    ChinaEcharts,
    ProperModel,
    SwiperModel,
  },
  data() {
    return {
      tabsonId: "1-1",
      isauto: false,
      passwordvalue: "",
      videourl,
      tabId: 1,
      activeIndex: "1-1",
      textcolor: "#fdb732",
      backgroundcolor: "rgba(0,0,0,.3)",
      value: "",
      logo,
      type: 2,
      raneffectlist: ["cards", "fade", "flip", "creative"],
      swiperconfig: {
        //是否循环
        speed: 1000, //默认就是300毫秒
        // loopAdditionalSlides: 1,
        loop: true,
        observer: true,
        // mousewheel: true,
        effect: "fade", //切换效果"fade"（淡入）、"cube"（方块）、"coverflow"（3d流）、"flip"（3d翻转）、"cards"(cards)、"creative"（创意性
        // cubeEffect: {
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94,
        // },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
          //   disableOnInteraction: false,
          disableOnInteraction: false,
          // 自动播放时间：毫秒
          delay: 6500,
        },
        // pagination: {
        //   //小圆点
        //   el: ".swiper-pagination",
        // },
        navigation: {
          prevEl: ".el-icon-caret-left",
          nextEl: ".el-icon-caret-right",
        },
      },
      swiperconfig: {
        //是否循环
        speed: 1000, //默认就是300毫秒
        // loopAdditionalSlides: 1,
        loop: false,
        observer: true,
        observeParents: false,
        disableOnInteraction: true,
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: true,
        },
        // mousewheel: true,
        effect: "fade", //切换效果"fade"（淡入）、"cube"（方块）、"coverflow"（3d流）、"flip"（3d翻转）、"cards"(cards)、"creative"（创意性
        // cubeEffect: {
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94,
        // },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
          //   disableOnInteraction: false,
          disableOnInteraction: false,
          // 自动播放时间：毫秒
          delay: 6000,
        },
        // pagination: {
        //   //小圆点
        //   el: ".swiper-pagination",
        // },
        // navigation: {
        //   prevEl: ".el-icon-caret-left",
        //   nextEl: ".el-icon-caret-right",
        // },
        navigation: {
          prevEl: ".swiperbuttonprev",
          nextEl: ".swiperbuttonnext",
        },
      },
      swiperconfig2: {
        //是否循环
        speed: 1000, //默认就是300毫秒
        // loopAdditionalSlides: 1,
        loop: false,
        observer: true,
        observeParents: false,
        // mousewheel: true,
        effect: "fade", //切换效果"fade"（淡入）、"cube"（方块）、"coverflow"（3d流）、"flip"（3d翻转）、"cards"(cards)、"creative"（创意性
        // cubeEffect: {
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94,
        // },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          //swiper手动滑动之后自动轮播失效的解决方法,包括触碰，拖动，点击pagination,重新启动自动播放
          //   disableOnInteraction: false,
          disableOnInteraction: false,
          // 自动播放时间：毫秒
          delay: 6000,
        },

        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
      },
      navheight: null,
      jytdswiper: null,
      swipercaeated: null,
      swipercaeated1: null,
      swipercaeated2: null,
      list: [],
      sonlist: [],
      classList: [],
      navlist: [
        {
          id: "1",
          title: "天空之橙Desigin",
          children: [
            {
              id: "1-1",
              title: "关于我们",
            },
            {
              id: "1-2",
              title: "集团构架",
            },
            {
              id: "1-3",
              title: "精英团队",
            },
          ],
        },

        {
          id: "2",
          title: "设计案例",
          children: [],
        },
        {
          id: "3",
          title: "集团动态",
          children: [],
        },
        {
          id: "4",
          title: "联系我们",
          children: [],
        },
      ],
      numindex: 0,
      splitList: [],
    };
  },
  created() {
    if (getToken() == "123456") {
      this.isauto = true;
      this.getall();
    }
  },
  watch: {
    isauto(nvwv, oldv) {
      if (nvwv) {
        this.getall();
      }
    },
  },
  mounted() {
    // document.onclick =
    //   document.onkeydown =
    //   document.onmousemove =
    //     function () {
    //       (document.body || document.documentElement).requestFullscreen();
    //     };
    // document.onclick();
    // this.getBanner();
  },
  methods: {
    //   输入密码
    passwordchange(e) {
      if (this.passwordvalue == "123456") {
        this.isauto = true;
        setToken(this.passwordvalue);
      } else {
        this.$message({
          message: "密码错误，请重新输入",
          type: "warning",
        });
      }
    },
    // 进入
    goauth() {
      this.isauto = true;
    },
    getall() {
      this.getTopClass();
      if (this.tabId == 2) {
        this.getBanner(); //轮播
        // this.getFlimList();
      }
      if (this.activeIndex.split("-")[0] == 2) {
        this.getClass(this.activeIndex.split("-")[1]);
      } else {
        //   this.getFlimList();
      }
    },
    goDesigin() {
      this.tabId = 2;
      this.value = this.classList[0].title;
      this.activeIndex = this.classList[0].id;
      this.getBanner();
      this.getClass(this.activeIndex.split("-")[1]);
    },
    //   切换分类
    sureType(item) {
      this.value = item.name;
      this.getFlimList(item.id);
    },
    //封装轮播函数
    getBanner() {
      //调用延迟加载 $nextTick
      let that = this;
      this.swiperconfig.on = {
        reachEnd: function () {
          console.log("到了最后一个slide");
          let length = that.splitList.length;
          console.log(length, that.numindex);
          if (length > 0) {
            that.getFlimList(that.splitList[0]["id"]);
          } else {
            that.numindex++;
            if (that.numindex >= that.classList.length) {
              that.numindex = 0;
            }
            that.value = that.classList[that.numindex].name;
            that.getClass(that.classList[that.numindex].pid);
          }
        },
        observerUpdate: function (Swiper) {
          console.log(Swiper, "observer监测到了不可描述的事情发生");
          //   alert("observer监测到了不可描述的事情发生");
        },
      };
      //   this.swiperconfig.onSlideChangeEnd((swiper) => {
      //     swiper.update();
      //     that.swipercaeated.reLoop();
      //     that.swipercaeated.startAutoplay();
      //   });

      this.$nextTick(() => {
        that.swipercaeated = new Swiper(".swiper-container", that.swiperconfig);
        that.swipercaeated1 = new Swiper(
          ".swiper-container1",
          that.swiperconfig2
        );

        that.swipercaeated2 = new Swiper(
          ".swiper-container2",
          that.swiperconfig2
        );

        // that.jytdswiper = new Swiper(".swiper-container1", that.swiperconfig2);
      });
    },
    getdomStyle() {
      let { offsetHeight } = this.$refs["nav"];
      this.navheight = offsetHeight;
    },
    carouselprev() {
      this.$refs["carousel"].prev();
    },
    carouselnext() {
      this.$refs["carousel"].next();
    },
    // 获取 getTopClass
    async getTopClass() {
      let res = await getTopClass();
      res = res.map((item) => {
        item["pid"] = item["id"];
        item["id"] = "2-" + item["id"];
        item["title"] = item["name"];
        return item;
      });
      let index = this.navlist.findIndex((item) => item.title == "设计案例");
      this.classList = res;
      console.log(this.classList);
      this.$nextTick(() => {
        this.navlist[index].children = res;
      });
    },

    async getClass(pid) {
      let res = await getClass({ pid });
      this.numindex = this.classList.findIndex((item) => item.pid == pid);
      this.sonlist = res;
      this.splitList = res;
      this.getFlimList(res[0]["id"]);
    },
    async getFlimList(class_id = "") {
      let res = await getFlimList(class_id && { class_id });
      this.list = res;
      console.log(this.splitList, 1);
      this.splitList = this.splitList.filter((item) => item.id != class_id);
      console.log(this.splitList, 2, this.list);
      let index = this.getRandomNumberByRange(0, this.raneffectlist.length);
      this.getBanner();
      //   setTimeout(() => {
      //     this.swipercaeated.forEach((item) => {
      //       item.updateSlides(); //更新slide
      //       //   this.swiperconfig["effect"] = this.raneffectlist[index]; // 随机轮播样式
      //       //   this.swipercaeated.reLoop();
      //       //   this.swipercaeated.autoplayStart();
      //       item.autoplay.start(); //自动播放
      //       item.setGrabCursor(); //关闭鼠标的抓手形状。 unsetGrabCursors
      //       item.update();
      //     });
      //   }, 300);
    },
    upswiper() {
      return;
      console.log(this.swipercaeated, "jytdswiper");
      this.swipercaeated1.updateSlides(); //更新slide
      this.swipercaeated1.autoplay.start(); //自动播放
      this.swipercaeated1.setGrabCursor(); //关闭鼠标的抓手形状。 unsetGrabCursors
      this.swipercaeated1.update();
    },
    // nav 切换
    handleSelect(key, keyPath) {
      this.tabId = keyPath[0];
      this.tabsonId = key;
      if (keyPath[0] == 2) {
        let array = this.classList.filter((item) => item.id == key);
        this.getClass(key.split("-")[1]);
        this.value = array[0].title;
      } else {
        this.sonlist = [];
      }
      this.upswiper();
    },
    // 随机整数
    getRandomNumberByRange(start, end) {
      return Math.floor(Math.random() * (end - start) + start);
    },
  },
};
</script>
<style lang="scss">
.page {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  //   内容
  .home {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    background: #333;
    //   头部
    .nav {
      position: absolute;
      top: 60px;
      z-index: 10;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 5rem;
      align-items: center;
      box-sizing: border-box;
      .logo {
        height: 40px;
        // background: rgba(0, 0, 0, 0.1);
        // padding: 15px;

        img {
          // width: 100%;
          height: 100%;
        }
      }
      .navList {
        display: flex;
        justify-content: flex-start;
        .navli {
          width: 160px;
          height: 40px;
          text-align: center;
          // background: #edeceb;
          margin-left: 20px;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          .icon-sanjiao {
            font-size: 12px;
            transform: scale(0.5);
            margin-left: 5px;
          }
        }
        .navblock {
          position: absolute;
          top: 40px;
          width: 100%;
          li {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #e37a11;
            height: 40px;
            margin-top: 4px;
          }
        }
        :hover {
          background: #e37a11;
        }
      }
      .context {
        background: burlywood;
      }
    }
    .app-content {
      flex: 1;
      width: 100%;
      position: relative;
      background: #333;
      .carouselSyle {
        height: 100%;
        .el-carousel__container {
          height: 100%;
          .imgallstyle {
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .imgstyle {
              width: 100%;
              display: block;
            }
          }
        }
      }
    }
    //   设计案例
    .SwiperModelStyle {
      width: 100%;
      height: 100%;
      position: relative;
      .swiper-container {
        width: 100%;
        height: 100%;
        .swiper-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
        //   翻页
        .dropdownStyle {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          position: absolute;
          z-index: 55;
          bottom: 100px;
          right: 60px;
          height: 60px;
          // border-radius: 5px;
          .flexStyle {
            display: flex;
            align-items: center;
            width: 260px;
            font-size: 18px;
            line-height: 1.5;
            text-align: center;
            font-weight: 600;
            position: relative;
            background: rgba(0, 0, 0, 0.35);
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
              width: 100%;
              bottom: 60px;
              height: 400px;
              overflow-y: scroll;
              background: rgba(0, 0, 0, 0.4);
              color: #fff;
              line-height: 1.5;
              overflow-x: hidden;
              li {
                padding: 10px 0;
                overflow-x: hidden;
                word-wrap: normal;
                &:hover {
                  background: #fdb732;
                  color: #595656;
                }
              }
              /*修改某个div的滚动条样式*/
              &::-webkit-scrollbar {
                width: 5px;
                height: 5px;
                /**/
              }
              &::-webkit-scrollbar-track {
                background: #fff;
                border-radius: 2px;
              }
              &::-webkit-scrollbar-thumb {
                background: #fdb732;
                border-radius: 10px;
              }
              &::-webkit-scrollbar-thumb:hover {
                background: #999;
              }
              &::-webkit-scrollbar-corner {
                background: #204754;
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
    }
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
      .swiper-slide {
        transform: translateX(-200px);
        opacity: 0;
        transition: all 0.4s;
      }
      .ani-slide {
        transform: translateX(0);
        opacity: 1;
      }
    }
    // 首页
    .tkzc_home {
      width: 100%;
      height: 100%;
      background: #fff;
      position: relative;
      video {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
      .video {
        height: auto;
        max-width: 100%;
        width: 100%;
        height: 100%;
      }
      .Desigin {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .Desiginbutton {
          font-size: 24px;
          border-radius: 200px;
          border: 3px solid #ccc;
          width: 300px;
          height: 70px;
          line-height: 70px;
          background: rgba(0, 0, 0, 0.4);
          color: #fff;
          margin-top: 500px;
          &:hover {
            background: #e37a11;
          }
        }
      }
    }
    //   联系我
    .tkzcabout {
      width: 100%;
      height: 100%;
      background: #fff;
      position: relative;
    }
    // 精英团队
    .jytdswiper {
      width: 100%;
      height: 100%;
      overflow: hidden;
      .swiper-container2 {
        width: 100%;
        height: 100%;
      }
      .el-carousel__container {
        height: 100%;
      }
      .proper {
        width: 100%;
        height: 100%;
        display: block;
      }
      .carouselSyle {
        width: 100%;
        height: 100%;
      }
    }
    .jtdt_content {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #0000;
      .jtdt_title {
        font-size: 24px;
        font-weight: 600;
      }
      .swiper-container1 {
        width: 100%;
        height: 100%;
        .jtdt_content_page {
          width: 100%;
          height: 100%;
          background: #0000;
          .jtdt_content_page_img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
          }
        }
      }
    }
  }
  // 锁屏页
  .suosttyle {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #eef3fa;
    .suoblock {
      //   background: rgba(255, 255, 255, 0.22);
      box-shadow: 0 0 10px #c4c1c1;
      border-radius: 10px;
      width: 350px;
      min-height: 400px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 24px;
      }
      img {
        display: block;
        width: 60%;
        height: auto;
        margin: 20px 0;
      }
      .inputstyle {
        margin-bottom: 20px;
        text-align: center;
      }
    }
  }
}
</style>

<style lang="scss">
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  text-align: center;
  height: 80px;
  line-height: 40px;
}
.nav {
  .menudie {
    border: none !important;
    font-weight: 600;
    .el-submenu {
      background: rgba(0, 0, 0, 0.2);
      width: 200px;
      //   margin-right: 10px;
    }
    .el-menu-item {
      font-size: 20px;
      width: 200px;
    }
    .is-active {
      background: rgba(0, 0, 0, 0.8);
    }
    .submenuStyle {
      font-size: 20px;
      .el-menu {
        .el-menu-item {
          font-weight: 600;
          text-align: center;
        }
      }
    }
  }
  .el-submenu__title {
    font-weight: 600;
    font-size: 18px;
    // width: 180px;
    text-align: center;
    &:hover {
      background: #ff0000;
    }
  }
}
/* 整个滚动条 */
::-webkit-scrollbar {
  width: 1px;
  //   height: 0px;
}

/* 滚动条有滑块的轨道部分 */
::-webkit-scrollbar-track-piece {
  background-color: transparent;
  border-radius: 5px;
}

/* 滚动条滑块(竖向:vertical 横向:horizontal) */
::-webkit-scrollbar-thumb {
  cursor: pointer;
  background-color: #f2f2f2;
  border-radius: 5px;
}

/* 滚动条滑块hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #999999;
}

/* 同时有垂直和水平滚动条时交汇的部分 */
::-webkit-scrollbar-corner {
  display: block; /* 修复交汇时出现的白块 */
}
</style>
