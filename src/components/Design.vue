<template>
  <div class="swiper-container">
    <!-- 轮播内容-->

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
</template>
<script>
import headerimage from "@/assets/sjsimages/sjs05.png";
import { getDesigner } from "@/api/swiperApi.js";
import Swiper from "swiper";
export default {
  props: ["typeid"],
  data() {
    return {
      list: [],
      headerimage,
      userInfo: {},
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
    lookButton(item) {
      this.userInfo = item;
      this.dialogVisible = true;
    },
    //封装轮播函数
    getBanner() {
      //调用延迟加载 $nextTick
      this.$nextTick(() => {
        let swiper = new Swiper(".swiper-container", {
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
          pagination: {
            //小圆点
            el: ".swiper-pagination",
          },
          on: {
            reachEnd: function() {
              console.log("到了最后一个slide");
              //   let length = that.splitList.length;
              //   if (length > 0) {
              //     that.getFlimList(that.splitList[0]["id"]);
              //   } else {
              //     that.numindex++;
              //     if (that.numindex >= that.classList.length) {
              //       that.numindex = 0;
              //     }
              //     that.value = that.classList[that.numindex].name;
              //     that.getClass(that.classList[that.numindex].pid);
              //   }
            },
          }
        });
      });
    },
    // 获取轮播图
    async getFlimList(class_id = "") {
      let res = await getFlimList(class_id && { class_id });
      this.list = res;
      this.splitList = this.splitList.filter((item) => item.id != class_id);
      this.getBanner();
    },
    // 获取 轮播分类id
    async getClass(pid) {
      let res = await getClass({ pid });
      this.numindex = this.classList.findIndex((item) => item.pid == pid);
      this.sonlist = res;
      this.splitList = res;
      this.getFlimList(res[0]["id"]);
    },
    // h获取
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
                    li {
                        padding: 10px 0;
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
}
</style>
