<template>
  <div class="box_jtdt">
    <!-- <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div> -->
    <!-- 　　　　//这里往下的class类一定不要改变，改变就会报错　　　　// -->
    <h4 class="page_title">集团动态</h4>
    <div class="swiper-containerDT">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <!-- 第一套模板 -->
          <div class="pagecontent" v-if="item.type == 1">
            <div class="left">
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover" />
                </div>
                <div class="text_content">
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.desc }}</p>
                </div>
              </div>

              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover1" />
                </div>
                <div class="text_content">
                  <h5>{{ item.title1 }}</h5>
                  <p>{{ item.desc1 }}</p>
                </div>
              </div>
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover2" />
                </div>
                <div class="text_content">
                  <h5>{{ item.title2 }}</h5>
                  <p>{{ item.desc2 }}</p>
                </div>
              </div>
            </div>
            <div class="left">
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover3" />
                </div>
                <div class="text_content">
                  <h5>{{ item.title3 }}</h5>
                  <p>{{ item.desc3 }}</p>
                </div>
              </div>
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover4" />
                </div>
                <div class="text_content">
                  <h5>{{ item.title4 }}</h5>
                  <p>{{ item.desc4 }}</p>
                </div>
              </div>
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover5" />
                </div>
                <div class="text_content">
                  <h5>{{ item.title5 }}</h5>
                  <p>{{ item.desc5 }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 第二套模板 -->
          <div class="pagecontent pagecontent2" v-if="item.type == 2">
            <div class="left">
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover" />
                </div>
                <div class="text_content">
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.desc }}</p>
                </div>
              </div>
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover1" />
                </div>
                <div class="text_content">
                  <h5>{{ item.title1 }}</h5>
                  <p>{{ item.desc1 }}</p>
                </div>
              </div>
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover2" />
                </div>
                <div class="text_content">
                  <h5>{{ item.title2 }}</h5>
                  <p>{{ item.desc2 }}</p>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="right_block">
                <div class="imagesty">
                  <img :src="item.cover3" />
                  <div class="text_content text_content2">
                    <h5>{{ item.title3 }}</h5>
                    <p>{{ item.desc3 }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 三套模板 -->
          <div class="contentStyle" v-if="item.type == 3">
            <DT3 :objdata="item" />
          </div>
          <div class="contentStyle" v-if="item.type == 4">
            <DT4 :objdata="item" />
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
import logo from "@/assets/logo2.png";
import DT3 from "@/components/DT3.vue";
import DT4 from "@/components/DT3.vue";
import headerimage from "@/assets/sjsimages/sjs05.png";
import { getDesigner } from "@/api/swiperApi.js";
import Swiper from "swiper";
export default {
  components: {
    DT3,
    DT4,
  },
  data() {
    return {
      logo,
      dialogVisible: false,
      list: [
        {
          type: 4,
        },
        {
          type: 1,
          title: "天空之橙·跨界融合正式启动",
          desc: "天橙书写新答卷，赋能五好新淄博天橙书写新答卷，赋能五好新淄博天橙书写新答卷，",
          link: "https://mp.weixin.qq.com/s/PtN29zWC90AiITObxXNCmg",
          cover: require("../assets/groupimg/20220222144726.jpg"),
          title1: "天橙书写新答卷，赋能五好新淄博",
          link1: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover1: require("../assets/groupimg/20220221181510.jpg"),
          desc1: "天橙书写新答卷，赋能五好新淄博",
          title2: "活动回顾 | 青春当燃！奔赴一场极具年轻力的cosplay潮流文化节",
          link2: "https://mp.weixin.qq.com/s/PC_fIVxIHfqSotWEZUu9pw",
          cover2: require("../assets/groupimg/20220222150715.jpg"),
          desc2: "新场地青年时尚创新聚集地",
          title3: "除夕快乐！品质福利派送中『天空之橙』",
          link3: "https://mp.weixin.qq.com/s/agG9pbHzl7Rvc96uJUFTWg",
          cover3: require("../assets/groupimg/20220222150858.jpg"),
          desc3: "感谢每个你，2022年，希望你依然在......",
          title4: "上海市淄博商会淄川分会2022新春研学活动在沪成功举办！",
          link4: "https://mp.weixin.qq.com/s/ZVDfXRz_vYuC5_G_sN0l9w",
          cover4: require("../assets/groupimg/20220222150952.jpg"),
          desc4:
            "最好的生活、工作方式，便是和一群志同道合的人，一起奔跑在理想的路上，回头有一路的故事，低头有坚定的脚步，抬头有清晰的远方。",
          title5: "淄博市委书记江敦涛莅临「天空之橙」调研指导",
          link5: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover5: require("../assets/groupimg/20220221181629.jpg"),
          desc5: "淄博市委书记江敦涛莅临「天空之橙」调研指导",
        },
        {
          type: 2,
          title: "天橙书写新答卷，赋能五好新淄博",
          desc: "天橙书写新答卷，赋能五好新淄博天橙书写新答卷，赋能五好新淄博天橙书写新答卷，",
          link: "https://mp.weixin.qq.com/s/zosvylLZnJt_P3TCg9qxdg",
          cover: require("../assets/groupimg/20220221170353.jpg"),
          title1: "「天橙参观」感谢各位领导莅临天空之橙调研指导",
          link1: "https://mp.weixin.qq.com/s/n0-i5whlCRlKG6Y5rQXOZA",
          cover1: require("../assets/groupimg/20220222145932.jpg"),
          desc1:
            "天空之橙双创艺术空间对外开放，淄博市区各级领导莅临天空之橙参观调研指导，天空之橙控股董事长、盛视天橙创始人、上海市淄博商会淄川分会会长陈嵩陪同参观调研。",
          title2: "充满惊喜的双创艺术空间：青年时尚创新创业聚集地",
          link2: "https://mp.weixin.qq.com/s/uakHAGq0Ri5rUEXUCrJJDw",
          cover2: require("../assets/groupimg/20220222150051.jpg"),
          desc2: "当晨曦洒落，当夜幕降临，有趣的灵魂在这里遇见......",
          title3:
            "上海市淄博商会成立首个区县分会—淄川分会，陈嵩当选首届淄川分会会长",
          link3: "https://mp.weixin.qq.com/s/SEsZPYFecUL5Cidgo4wAkw",
          cover3: require("../assets/groupimg/20220222150154.jpg"),
          desc3: "一个城市，应该主动去感知“年轻”...",

          title4: "淄博市委书记江敦涛莅临「天空之橙」调研指导",
          link4: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover4: require("../assets/groupimg/20220221181629.jpg"),
          desc4: "一个城市，应该主动去感知“年轻”...",

          title5:
            "山东省委常委、青岛市委书记王清宪一行莅临天空之橙上海总部参观考察",
          link5: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover5: require("../assets/groupimg/20220222150334.jpg"),
          desc5: "青春当燃，不燃怎young",
        },
        {
          type: 3,
          title: "天橙书写新答卷，赋能五好新淄博",
          desc: "天橙书写新答卷，赋能五好新淄博天橙书写新答卷，赋能五好新淄博天橙书写新答卷，",
          link: "https://mp.weixin.qq.com/s/zosvylLZnJt_P3TCg9qxdg",
          cover: require("../assets/groupimg/20220221170353.jpg"),
          title1: "天橙书写新答卷，赋能五好新淄博",
          link1: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover1: require("../assets/groupimg/20220221181510.jpg"),
          title2: "淄博市委书记江敦涛莅临「天空之橙」调研指导",
          link2: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover2: require("../assets/groupimg/20220221181629.jpg"),
          title3: "淄博市委书记江敦涛莅临「天空之橙」调研指导",
          link3: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover3: require("../assets/groupimg/20220221181629.jpg"),
          title4: "淄博市委书记江敦涛莅临「天空之橙」调研指导",
          link4: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover4: require("../assets/groupimg/20220221181629.jpg"),
          title5: "淄博市委书记江敦涛莅临「天空之橙」调研指导",
          link5: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
          cover5: require("../assets/groupimg/20220221181629.jpg"),
        },
      ],
      headerimage,
    };
  },
  computed: {
    classname() {
      return "swiper-containerDT" + new Date().getTime();
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
        let swiper = new Swiper(".swiper-containerDT", {
          //是否循环
          loop: false,
          observer: true,
          observeParents: false,
          speed: 1000, //默认就是300毫秒
          effect: "cards", //切换效果"fade"（淡入）、"cube"（方块）、"coverflow"（3d流）、"flip"（3d翻转）、"cards"(cards)、"creative"（创意性
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
      getDesigner().then((res) => {
        let newlist = [];
        let num = parseInt(res.length / 8);
        for (let index = 0; index <= num; index++) {
          newlist.push({ list: res.slice(index * 8, (index + 1) * 8) });
        }
        console.log(newlist);
        // this.list = newlist;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/xkcss/style.css";
.box_jtdt {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  // 标题
  .page_title {
    font-weight: 700;
    width: 18vw;
    // color: rgb(255, 255, 255);
    color: #535353;
    height: 7vh;
    line-height: 7vh;
    padding-left: 2.5vw;
    font-size: 2vw;
    text-align: center;
    margin: auto;
    margin-top: 20vh;
    // background: url("https://www.v-can.cn/img/木牌.6be3f934.png") 50% center /
    //   cover no-repeat;
    background-position: 50% center;
  }
  // 轮播
  .swiper-containerDT {
    width: 100%;
    flex: 1;
    height: 100%;
    flex-shrink: 0;
    // background: #000;
    .swiper-wrapper {
      height: 100%;
    }
    .swiper-slide {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      overflow: hidden;
      .contentStyle {
        flex: 1;
        width: 100%;
        height: 100%;
        flex-direction: 0;
      }
      .pagecontent {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 0 100px;
        padding: 0 30px;
        padding-bottom: 40px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        position: relative;
        // 第一套模板
        .left {
          width: 50%;
          height: 100%;
          flex-shrink: 0;
          color: #333;
          display: flex;
          align-items: flex-start;
          justify-content: space-around;
          flex-direction: column;
          flex-wrap: wrap;
          // background: #fff;
          .left_block {
            width: 100%;
            height: 31%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 10px;
            position: relative;
            // 图片
            .imagesty {
              width: 40%;
              max-height: 220px;
              flex-shrink: 0;
              overflow: hidden;
              border-radius: 5px;
            }
            .text_content {
              padding: 0 20px;
              text-align: left;
              flex: 1;
              flex-shrink: 0;
              overflow-y: auto;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              color: rgb(83, 83, 83);
              p {
                line-height: 1.5;
                margin-top: 14px;
                overflow-y: auto;
              }
            }
          }
        }
        .left_logo {
          margin: 0 auto;
          // margin-bottom: 10px;
        }
        .text_content2 {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.3);
          padding: 20px;
          border-radius: 5px;
          color: #fff;
          p {
            margin-top: 20px;
          }
        }
        // 第二套
      }
      // 第二套模板
      .pagecontent2 {
        text-align: left;
        .left {
          width: 45%;
        }
        .right {
          flex: 1;
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-content: center;
          flex-direction: column;
          .right_block {
            width: 100%;
            max-height: 80%;
            position: relative;
            .imagesty {
              width: 100%;
              overflow: hidden;
              position: relative;
            }
            .title {
              position: absolute;
              top: 20px;
              background: rgba(0, 0, 0, 0.2);
              border-radius: 5px;
              width: 250px;
              max-height: 180px;
              overflow-y: auto;
              right: 20px;
              z-index: 5;
              color: #fff;
              line-height: 1.8;
              text-align: left;
            }
          }
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
  // 文本
  h5 {
    font-size: 20px;
    font-weight: 600;
  }
  img:hover {
    transform: scale(1.2, 1.2);
  }
  img {
    width: 100%;

    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 5px;
    transition: all 1s ease-out;
    /* 过度 所有css属性 1秒过度 结束慢*/
    -moz-transition: all 1s ease-out;
    /* Firefox 4 */
    -webkit-transition: all 1s ease-out;
    /* Safari 和 Chrome */
    -o-transition: all 1s ease-out;
    /* Opera */
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
