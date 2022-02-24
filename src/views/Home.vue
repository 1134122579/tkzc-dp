<template>
  <div class="page">
    <div class="home" v-if="isauto">
      <!-- 头部 -->
      <div class="nav" ref="nav">
        <div class="logo" @click="gohome">
          <img v-if="tabId==2||tabId=='home'" :src="b_logo" style="height: 100%;display:block"></img>
          <img v-else :src="logo" style="height: 100%;display:block"></img>

        </div>
        <!-- 选项 -->
        <el-menu mode="horizontal" class="menudie" :default-active="activeIndex" @select="handleSelect" :background-color="backgroundcolor"
                 :active-text-color="activetextcolor" :text-color="textcolor">
          <el-submenu @click.native="onhandleClick(item)" popper-class="submenuStyle" v-for="item in navlist" :key="item.id"
                      v-if="item.children.length > 0" :index="item.id">
            <template slot="title"> {{ item.title }} <i class="el-icon-caret-bottom" style="color:#fff"></i></template>
            <el-menu-item v-for="childrenitem in item.children" :index="childrenitem.id" :key="childrenitem.id">{{ childrenitem.title }}
            </el-menu-item>
          </el-submenu>

          <el-menu-item popper-class="submenuStyle" v-for="item in navlist" :key="item.id" v-if="item.children.length <= 0" :index="item.id"
                        @click.native="onhandleClick(item)">
            {{ item.title }}</el-menu-item>
        </el-menu>
      </div>
      <!-- 设计案例 -->
      <div class=" SwiperModelStyle" v-show="tabId == 2">
        <div class="swiper-containersjal">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in list" :key="item.id">
              <div class="swiperContent" :style="item.img | filterBack">
                <!-- index==currentIndex&& -->
                <div class="swiperContent_text" v-show="!item.ishome">
                  <h5>{{ item.name }}</h5>
                  <div class="desc" v-html="item.desc"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- 分类 -->
          <div class="dropdownStyle" v-show="!ishome">
            <div class="flexStyle">
              <div class="flexStylebutton">
                <!-- class="swiperbuttonprev " -->
                <div slot="button-prev" @click="calssbuttonprev">
                  <i class="el-icon-caret-left"></i>
                </div>
                <!-- class="swiperbuttonnext"  -->
                <div slot="button-next" @click="calssbuttonnext">
                  <i class="el-icon-caret-right"></i>
                </div>
              </div>
              <p class="swipername">{{ value }}</p>
              <ul class="typeList">
                <li v-for="item in sonlist" :key="item.id" @click="sureType(item)">
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
        <!-- 缩略图 -->
        <div class="fz_stop" v-show="!ishome">
          <div class="swiper-containerJT">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in list" :key="item.id">
                <div class="slt_image">
                  <img :src="item.img_jt" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 案例首页 -->
      <!-- <div class="SwiperModelStye" :style="sjanfm_img|filterBack" v-show="isfm">

      </div> -->

      <!-- 天空之橙 首页 -->
      <div class="tkzc_home" v-show="tabId == 'home'">
        <!-- :src="videourl" -->
        <video src="http://video.greatorange.cn/zm_design.mp4" class="video" autoplay loop muted object-fit="cover"></video>
        <div class="Desigin">
          <div class="Desiginbutton" @click="goDesigin">
            天空之橙 <span>·</span> DESIGN
          </div>
        </div>
      </div>
      <!-- 关于我们-->
      <div class="tkzc_home" v-if="tabId == 1 && tabsonId == '1-1'">
        <!-- <About /> -->
        <video src="http://video.greatorange.cn/zm_design.mp4" class="video" autoplay loop muted object-fit="cover"></video>
        <div class="Desigin">
          <div class="Desiginbutton" @click="goDesigin">
            天空之橙 <span>·</span> DESIGN
          </div>
        </div>
      </div>
      <!-- 集团架构 -->
      <div class="tkzc_home" v-if="tabId == 1 && tabsonId == '1-2'">
        <Framework />
      </div>
      <!-- 精英 团队 -->
      <div class="tkzc_home" v-if="tabId == 1 && tabsonId == '1-3'">
        <div class="jytdswiper">
          <SwiperModel />
        </div>
      </div>
      <!--集团动态 -->
      <div class="tkzc_home" v-if="tabId == 3">
        <Group />
      </div>
      <!-- 联系我们 -->
      <div class="tkzcabout" v-if="tabId == 4">
        <ChinaEcharts />
      </div>
    </div>
    <!-- 密码页 -->
    <div class="suosttyle" v-else>
      <div class="suoblock">
        <p class="title">天空之橙 · DESIGN</p>
        <img src="../assets/auth-icon.png" alt="" />
        <div class="inputstyle">
          <el-input placeholder="请输入密码" v-model="passwordvalue" show-password @change="passwordchange" center></el-input>
        </div>
        <el-button color="#000" size="small" @click.enter="passwordchange" round>立即进入</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"; // 引入swiper依赖  在使用过程中我发现有时候开头字母大写可以成功 、有时候小写 若报错就换成另一个，两者引入取其一
import logo from "@/assets/logo2.png";
import b_logo from "@/assets/logo.png";

// import videourl from "@/assets/tkzc.mp4";
import ProperModel from "@/components/ProperModel.vue";
import SwiperModel from "@/components/SwiperModel.vue";
import Group from "@/components/Group.vue";
import Framework from "@/components/Framework.vue";
import About from "@/components/About.vue";
import Design from "@/components/Design.vue";

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
    filterJtBack(data) {
      return `background-image: url('${data}?imageView/1/w/300/h/300')`;
    },
  },
  components: {
    ChinaEcharts,
    ProperModel,
    SwiperModel,
    Framework,
    About,
    Group,
    Design
  },
  data() {
    return {
      ishome: false,
      sjanfm_img: require('../assets/fm.png'),
      b_logo,
      currentIndex: '',
      tabsonId: "1-1",
      isauto: false,
      passwordvalue: "",
      //   videourl,
      tabId: "home",
      activeIndex: "1-1",
      activetextcolor: "#fff",
      textcolor: "#fff",
      backgroundcolor: "#B6B6B6",
      value: "",
      logo,
      type: 2,
      raneffectlist: ["cards", "fade", "flip", "creative"],
      swipercaeatedJT: null,
      swiperconfig: {
        //是否循环
        speed: 1000, //默认就是300毫秒
        // loopAdditionalSlides: 1,
        loop: false,
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
          delay: 6000,
        },
        // pagination: {
        //   //小圆点
        //   el: ".swiper-pagination",
        // },
        navigation: {
          prevEl: ".swiperbuttonprev",
          nextEl: ".swiperbuttonnext",
        },
      },

      jytdswiper: null,
      swipercaeated: null,
      swipercaeated2: null,
      list: [{
        ishome: true,
        img: require('../assets/fm.png')
      }],
      sonlist: [],
      classList: [],
      isfm: false,
      navlist: [
        {
          id: "1",
          title: "天空·Design",
          children: [
            {
              id: "1-1",
              title: "关于我们",
            },
            {
              id: "1-2",
              title: "集团架构",
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
    if (getToken() == "tiancheng88") {
      this.isauto = true;
      this.getall();
    }
  },
  watch: {
    // tabId(neWv, oldV) {
    //   neWv == 2 && this.getBanner()
    // },
    isauto(nvwv, oldv) {
      if (nvwv) {
        this.getall();
      }
    },
  },
  mounted() {
    document.title = "天空之橙·Design";
    try {
      //   document.onclick =
      //     document.onkeydown =
      //     document.onmousemove =
      //     function() {
      //       (document.body || document.documentElement).requestFullscreen();
      //     };
      //   document.onclick();
    } catch (error) {
    }
    this.getBanner();
  },
  methods: {
    // 切换分类
    calssbuttonprev() {
      // this.value
      let index = this.classList.findIndex(item => item.title == this.value) - 1
      if (index < 1) {
        this.getClass(this.classList[this.classList.length - 1].pid);
        this.value = this.classList[this.classList.length - 1].title
      }
      console.log(this.classList, index, 'calssbuttonprev')
      this.value = this.classList[index].title
      this.getClass(this.classList[index].pid);
    },
    calssbuttonnext() {
      console.log('calssbuttonnext')
      // this.value
      let index = this.classList.findIndex(item => item.title == this.value) + 1
      if (index > this.classList.length) {
        this.getClass(this.classList[0].pid);
        this.value = this.classList[0].title
      }
      console.log(this.classList, index, 'calssbuttonprev')
      this.getClass(this.classList[index].pid);
      this.value = this.classList[index].title
    },
    gohome() {
      this.tabId = "home"
    },
    // 点击
    onhandleClick(data) {
      console.log("点击", data)
      if (data.id == 2) {
        this.isfm = true
        this.tabId = 2;
        this.ishome = true
        this.value = this.classList[0].title;
        this.activeIndex = this.classList[0].id;
        console.log(this.activeIndex)
        this.list = [{
          ishome: true,
          img: require('../assets/fm.png')
        }];
        this.getClass(this.activeIndex.split("-")[1]);
      } else {
        this.activeIndex = null
      }
    },

    //   输入密码
    passwordchange(e) {
      if (this.passwordvalue == "tiancheng88") {
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
      }
    },
    goDesigin() {
      this.tabId = 2;
      this.isfm = true
      this.ishome = true
      this.value = this.classList[0].title;
      this.activeIndex = this.classList[0].id;
      this.list = [{
        ishome: true,
        img: require('../assets/fm.png')
      }];
      this.getClass(this.activeIndex.split("-")[1]);
    },
    //   切换分类
    sureType(item) {
      //   this.value = item.name;
      this.getFlimList(item.id, item, true);
    },
    //封装轮播函数
    getBanner() {
      //调用延迟加载 $nextTick
      let that = this;
      this.swiperconfig.on = {

        slideChangeTransitionEnd: function() {

          let length = that.splitList.length;
          let swiperlength = this.slides.length
          that.currentIndex = this.activeIndex
          that.ishome = false
          let onelenght = that.list.length
          let two = that.list.filter(item => !item.ishome)
          that.list = two
          let twolenght = two.length
          if (onelenght != twolenght) {
            that.swipercaeated.slideTo(0, 1000, false)

          }
          if (this.activeIndex < swiperlength - 1) {
            return
          }
          if (length > 0) {
            that.getFlimList(that.splitList[0]["id"], that.splitList[0]);
          } else {
            that.splitList = that.sonlist
            that.getFlimList(that.splitList[0]["id"], that.splitList[0]);
            return
            that.numindex++;
            if (that.numindex >= that.classList.length) {
              that.numindex = 0;
            }
            that.value = that.classList[that.numindex].name;
            that.getClass(that.classList[that.numindex].pid);
          }

        },
        reachEnd: function() {
          console.log("到了最后一个slide");
        },
      };

      this.$nextTick(() => {
        that.swipercaeatedJT = new Swiper(".swiper-containerJT", {
          observer: true,
          effect: 'cards',
          spaceBetween: 5,
          slidesPerView: 8,
          freeMode: true,
          watchSlidesProgress: true,
          observeParents: true,
          centeredSlidesBounds: true,
          speed: 300,
          onClick: function(e) {
            //点击导航之后，设置导航相应的样式
            console.log(e)
            that.swipercaeated.slideTo(e.clickedIndex);
          }
        });
        that.swiperconfig.thumbs = {
          swiper: that.swipercaeatedJT,
        }
        that.swipercaeated = new Swiper(".swiper-containersjal", that.swiperconfig);

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
      this.$nextTick(() => {
        this.navlist[index].children = res;
      });
    },

    async getClass(pid) {
      let res = await getClass({ pid });
      this.numindex = this.classList.findIndex((item) => item.pid == pid);
      this.sonlist = res;
      this.splitList = res;
      this.getFlimList(res[0]["id"], res[0]);
    },
    async getFlimList(class_id = "", data, trueNull) {
      console.log(data, 121231)

      let that = this
      if (!this.isfm || trueNull) {
        this.list = [];
      }
      //   that.swipercaeated.detachEvents(); //移除所有slide监听事件
      let res = await getFlimList(class_id && { class_id });
      res = res.map(item => {
        item['desc'] = data['desc']
        item['name'] = data['name']
        item['img_jt'] = item['img'] + '?imageView/1/w/300/h/300'
        return item
      })
      if (this.isfm) {
        res = this.list.concat(res)
      }
      this.list = res;
      this.splitList = this.splitList.filter((item) => item.id != class_id);
      //   this.getBanner();
      that.swipercaeated.slideTo(0, 1000, false)
      that.swipercaeated.updateSlides()
      that.swipercaeated.setGrabCursor()
      that.swipercaeated.autoplay.start()
      that.swipercaeated.attachEvents();//重新绑定所有监听事件。
      that.swipercaeated.update()
    },
    // nav 切换
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      this.tabId = keyPath[0];
      this.tabsonId = key;
      this.isfm = false
      this.ishome = false
      if (keyPath[0] == 2) {
        let array = this.classList.filter((item) => item.id == key);
        this.getClass(key.split("-")[1]);
        this.value = array[0].title;
      } else {
        this.sonlist = [];
      }
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
        //   头部
        .nav {
            position: fixed;
            top: 0;
            // height: 100px;
            height: 170px;
            // background: #fff;
            z-index: 10;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 5rem;
            align-items: center;
            box-sizing: border-box;
            .logo {
                height: 44px;
                // height: 60px;
                // background: rgba(0, 0, 0, 0.1);
                // padding: 15px;
                img {
                    // width: 100%;
                    height: 100%;
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
            background: #000;
            // 案例
            .swiper-containersjal {
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
                            animation: fadeIn;
                            animation-duration: 1s;
                        }
                        .swipername {
                            padding: 0 10px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }
                        .typeList {
                            display: none;
                            position: absolute;
                            width: 100%;
                            bottom: 60px;
                            max-height: 400px;
                            overflow-y: scroll;
                            background: rgba(0, 0, 0, 0.5);
                            color: #fff;
                            line-height: 1.5;
                            overflow-x: hidden;
                            font-weight: normal;
                            font-size: 16px;
                            li {
                                padding: 10px 0;
                                box-sizing: border-box;
                                overflow-x: hidden;
                                word-wrap: normal;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                overflow: hidden;
                                &:hover {
                                    background: #fdb732;
                                    color: #fff;
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
            // 缩略图
            .fz_stop {
                position: absolute;
                z-index: 56;
                bottom: 100px;
                height: 40px;
                left: 0;
                right: 0;
                width: 24%;
                margin: auto;
                overflow: hidden;
                box-sizing: border-box;
                .swiper-containerJT {
                    width: 100%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.7);
                    box-sizing: border-box;
                    padding: 5px;
                    border-radius: 5px;
                    .swiper-wrapper {
                        .swiper-slide {
                            width: 14%;
                            height: 100%;
                            opacity: 0.4;
                            .slt_image {
                                width: 100%;
                                height: 100%;
                                img {
                                    display: block;
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                    border-radius: 4px;
                                }
                            }
                        }
                        .swiper-slide-thumb-active {
                            opacity: 1;
                            border: 2px solid #fdb732;
                            margin-top: -4px;
                            border-radius: 5px;
                        }
                    }
                }
            }
        }
        .swiperContent {
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            flex-direction: column;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
            .swiperContent_text {
                margin-left: 80px;
                padding: 16px;
                background: rgba(0, 0, 0, 0.3);
                width: 320px;
                max-height: 220px;
                color: #fff;
                border-radius: 5px;
                display: flex;
                justify-content: flex-start;
                flex-direction: column;
                animation: fadeInLeft;
                // animation: slideInDown;
                animation-duration: 1s;
                margin-bottom: 100px;
                text-align: left;
                box-sizing: border-box;
                h5 {
                    font-size: 20px;
                    line-height: 1.5;
                    font-weight: 600;
                    width: 100%;
                }
                .desc {
                    margin-top: 10px;
                    flex: 1;
                    flex-wrap: wrap;
                    overflow-y: auto;
                    flex-shrink: 0;
                    text-align: left;
                    // text-indent: 36px;
                    line-height: 1.5;
                }
            }

            .swiper-slide {
                transform: translateX(-200px);
                opacity: 0;
                transition: all 0.4s;
            }
        }
        .ani-slide .swiperContent_text {
            animation: bounceIn;
            animation-duration: 1.2s;
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
                    cursor: pointer; //鼠标变小手
                    font-size: 24px;
                    border-radius: 200px;
                    border: 3px solid #ccc;
                    width: 300px;
                    height: 70px;
                    line-height: 70px;
                    background: rgba(0, 0, 0, 0.4);
                    color: #fff;
                    margin-top: 500px;
                    span {
                        font-weight: 600;
                        font-size: 24px;
                    }
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
    .swiper-button-prev,
    .swiper-button-next {
        background: rgba(0, 0, 0, 0.7);
        padding: 20px;
        border-radius: 5px;
        color: #fff;
    }
}
</style>

<style lang="scss">
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
    text-align: center;
    line-height: 44px;
    height: 44px;
    &:hover {
        // background:#e37a11 ;
        color: #e37a11;
    }
}
.el-menu-item:hover {
    background: #e37a11 !important ;
}

.el-submenu__title {
    text-align: center;
    background: #b5b5b5 !important;
    height: 44px !important;
    line-height: 44px !important;
    color: #fff;
    border: 0 !important;
    .el-submenu__icon-arrow {
        display: none;
    }
}
.nav {
    .menudie {
        border: none !important;
        font-weight: 600;
        background: rgba(0, 0, 0, 0) !important;
        .el-submenu__title {
            padding-right: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            .el-icon-caret-bottom {
                margin-right: 0;
            }
        }
        .el-submenu__icon-arrow {
            // display: none;#B5B5B5
        }
        .el-submenu {
            // background: rgba(0, 0, 0, 0.2);
            // background: #fff;
            width: 200px;
            margin-right: 10px;
        }
        .el-menu-item {
            font-size: 18px;
            margin-right: 10px;
            width: 200px;
            height: 44px;
            line-height: 44px;
        }
        // 选中
        .is-active {
            background: #df7924 !important;
            border: none !important;
            .el-submenu__title {
                border: none !important;

                background: #df7924 !important;
                color: #fff !important;
            }
        }
        .submenuStyle {
            font-size: 18px;
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
        height: 44px;
        line-height: 44px;
        &:hover {
            background: #ff0000;
        }
    }
}
// 选项
.el-menu--horizontal {
    .el-menu-item {
        font-size: 18px;
        // font-weight: 600;
        line-height: 44px !important;
        height: 44px !important;
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
