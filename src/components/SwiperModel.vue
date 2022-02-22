<template>
  <div class="box">
    <!-- <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div> -->
    <!-- 　　　　//这里往下的class类一定不要改变，改变就会报错　　　　// -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <div class="pagecontent">
            <div v-for="listitem in item.list" :key="listitem.id" class="man" @click="lookButton(listitem)">
              <div class="imastyle">
                <img class="" :src="listitem.photos" />
              </div>
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

    <el-dialog :visible.sync="dialogVisible" width="70%" :show-close="false">
      <!-- <el-image :src="headerimage" style="display: block"></el-image> -->
      <div class="sjsStyle">
        <!-- <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div> -->
        <div class="content_sis">
          <div class="sjs_left">
            <div class="username">{{ userInfo.name }}</div>
            <!-- <h4>{{ userInfo.p }}</h4> -->
            <p>
              {{userInfo.desc}}
            </p>
          </div>
          <div class="sjs_right">
            <img :src="userInfo.photos" alt="" />
          </div>
        </div>
      </div>
    </el-dialog>
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
@import "../assets/xkcss/style.css";
.box {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fafafa;
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
                .man {
                    width: 25%;
                    margin-top: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    flex-shrink: 0;
                    cursor: pointer; //鼠标变小手
                    //   padding: 20px;
                    box-sizing: border-box;
                    flex-shrink: 0;
                    .imastyle {
                        width: 180px;
                        height: 180px;
                        img {
                            width: 150px;
                            height: 150px;
                            object-fit: cover;
                            border-radius: 50%;
                            overflow: hidden;
                            flex-shrink: 0;
                            box-shadow: 0 0 8px #ccc;
                        }
                    }
                    &:hover img {
                        width: 180px;
                        height: 180px;
                        animation: bounceIn;
                        animation-duration: 1.2s;
                    }

                    .name {
                        font-size: 20px;
                        font-weight: 600;
                        color: #504e4e;
                        margin-top: 20px;
                    }
                }
            }
        }
    }
    .sjsStyle {
        width: 100%;
        background: #000;
        box-shadow: 0 0 10px #ccc;
        // border-radius: 10px;
        height: 65vh;
        overflow: hidden;
        box-sizing: border-box;
        .content_sis {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;

            .sjs_left {
                width: 70%;
                flex-shrink: 0;
                color: #fff;
                padding: 20px;
                box-sizing: border-box;
                flex-shrink: 0;
                height: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                .username {
                    border-bottom: 2px solid #fff;
                    font-size: 40px;
                    color: #333;
                    padding: 10px 20px;
                    border-radius: 5px;
                    text-align: left;
                    background: #fff;
                }
                p {
                    text-indent: 40px;
                    line-height: 1.8;
                    text-align: left;
                    margin-top: 20px;
                    border-top: 2px solid #fff;
                    font-size: 20px;
                    overflow-y: auto;
                }
            }
            .sjs_right {
                width: 30%;
                height: 100%;
                box-sizing: border-box;
                flex-shrink: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                overflow: hidden;
                img {
                    width: 100%;
                    display: block;
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
<style>
.el-dialog {
    background: rgba(0, 0, 0, 1);
}
.el-dialog .el-dialog__header {
    padding: 0;
}
.el-dialog .el-dialog__body {
    padding: 0;
    background: rgba(0, 0, 0, 1);
}
</style>
