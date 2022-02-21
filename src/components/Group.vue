<template>
  <div class="box">
    <!-- <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div> -->
    <!-- 　　　　//这里往下的class类一定不要改变，改变就会报错　　　　// -->
    <h4 class="page_title">集团动态</h4>
    <div class="swiper-containerDT">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <!-- 第一套模板 -->
          <div class="pagecontent" v-if="item.type==1">
            <div class="left">
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover">
                </div>
                <h5>{{item.title}}</h5>
              </div>
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover1">
                </div>
                <h5>{{item.title1}}</h5>
              </div>
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover2">
                </div>
                <h5>{{item.title2}}</h5>
              </div>
            </div>
            <div class="left">
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover3">
                </div>
                <h5>{{item.title3}}</h5>
              </div>
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover4">
                </div>
                <h5>{{item.title4}}</h5>
              </div>
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover5">
                </div>
                <h5>{{item.title5}}</h5>
              </div>
            </div>
          </div>
          <!-- 第二套模板 -->
          <div class="pagecontent pagecontent2" v-if="item.type==2">
            <div class="left">

              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover">
                </div>
                <h5>{{item.title}}</h5>
              </div>
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover1">
                </div>
                <h5>{{item.title1}}</h5>
              </div>
              <div class="left_block">
                <div class="imagesty">
                  <img :src="item.cover2">
                </div>
                <h5>{{item.title2}}</h5>
              </div>
            </div>
            <div class="right">
              <div class="right_block ">
                <div class="imagesty">
                  <img :src="item.cover3">
                </div>
                <!-- <h5 class="title">{{item.title3}}</h5> -->
              </div>
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
import { getDesigner } from "@/api/swiperApi.js";
import Swiper from "swiper";
export default {
  data() {
    return {
      dialogVisible: false,
      list: [
        //       {
        //     type: 1,
        //     title: '天橙书写新答卷，赋能五好新淄博',
        //     link: 'https://mp.weixin.qq.com/s/zosvylLZnJt_P3TCg9qxdg',
        //     cover: require('../assets/groupimg/20220221170353.jpg'),
        //     title1: '天橙书写新答卷，赋能五好新淄博',
        //     link1: 'https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA',
        //     cover1: require('../assets/groupimg/20220221181510.jpg'),
        //     title2: '淄博市委书记江敦涛莅临「天空之橙」调研指导',
        //     link2: 'https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA',
        //     cover2: require('../assets/groupimg/20220221181629.jpg'),
        //     title3: '淄博市委书记江敦涛莅临「天空之橙」调研指导',
        //     link3: 'https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA',
        //     cover3: require('../assets/groupimg/20220221181629.jpg'),
        //     title4: '淄博市委书记江敦涛莅临「天空之橙」调研指导',
        //     link4: 'https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA',
        //     cover4: require('../assets/groupimg/20220221181629.jpg'),
        //     title5: '淄博市委书记江敦涛莅临「天空之橙」调研指导',
        //     link5: 'https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA',
        //     cover5: require('../assets/groupimg/20220221181629.jpg')
        //   },
        {
          type: 2,
          title: '天橙书写新答卷，赋能五好新淄博',
          link: 'https://mp.weixin.qq.com/s/zosvylLZnJt_P3TCg9qxdg',
          cover: require('../assets/groupimg/20220221170353.jpg'),
          title1: '天橙书写新答卷，赋能五好新淄博',
          link1: 'https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA',
          cover1: require('../assets/groupimg/20220221181510.jpg'),
          title2: '淄博市委书记江敦涛莅临「天空之橙」调研指导',
          link2: 'https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA',
          cover2: require('../assets/groupimg/20220221181629.jpg'),
          title3: '淄博市委书记江敦涛莅临「天空之橙」调研指导',
          link3: 'https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA',
          cover3: require('../assets/groupimg/20220221181629.jpg'),
          title4: '淄博市委书记江敦涛莅临「天空之橙」调研指导',
          link4: 'https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA',
          cover4: require('../assets/groupimg/20220221181629.jpg'),
          title5: '淄博市委书记江敦涛莅临「天空之橙」调研指导',
          link5: 'https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA',
          cover5: require('../assets/groupimg/20220221181629.jpg')
        },
        //   {
        //     title: '天橙书写新答卷，赋能五好新淄博',
        //     link: 'https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA',
        //     cover: require('../assets/groupimg/20220221181510.jpg')
        //   }, {
        //     title: '淄博市委书记江敦涛莅临「天空之橙」调研指导',
        //     link: 'https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA',
        //     cover: require('../assets/groupimg/20220221181629.jpg')
        //   }
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
        // this.list = newlist;
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
        color: rgb(255, 255, 255);
        height: 7vh;
        line-height: 7vh;
        padding-left: 2.5vw;
        font-size: 2vw;
        text-align: left;
        margin: auto;
        margin-top: 130px;
        background: url("https://www.v-can.cn/img/木牌.6be3f934.png") 50% center / cover no-repeat;
        background-position: 50% center;
    }
    .swiper-containerDT {
        width: 100%;
        flex: 1;
        height: 80%;
        flex-shrink: 0;
        // background: #000;
        .swiper-wrapper {
            height: auto;
        }
        .swiper-slide {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .pagecontent {
                width: 100%;
                height: 78%;
                display: flex;
                align-items: flex-end;
                justify-content: flex-start;
                flex-wrap: wrap;
                margin: 0 100px;
                padding: 30px;
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
                        height: 30%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: flex-start;
                        margin-top: 10px;

                        // 图片
                        .imagesty {
                            width: 40%;
                            height: 100%;
                            flex-shrink: 0;
                            overflow: hidden;
                            border-radius: 5px;
                        }
                    }
                }
                // 第二套
            }
            // 第二套模板
            .pagecontent2 {
                .left {
                    width: 45%;
                }
                .right {
                    flex: 1;
                    flex-shrink: 0;
                    .right_block {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        .imagesty {
                            width: 100%;
                            height: 100%;
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
    .swiper-button-next,
    .swiper-button-prev {
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        color: #fdb732;
        box-shadow: 0 0 5px rgb(153, 152, 152);
    }
    // 文本
    h5 {
        padding: 0 20px;
        font-size: 20px;
        font-weight: 600;
    }
    img:hover {
        transform: scale(1.5, 1.5);
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: all 0.6s ease-out;
        /* 过度 所有css属性 1秒过度 结束慢*/
        -moz-transition: all 0.6s ease-out;
        /* Firefox 4 */
        -webkit-transition: all 0.6s ease-out;
        /* Safari 和 Chrome */
        -o-transition: all 0.6s ease-out;
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
