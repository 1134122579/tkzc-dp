<template>
  <div class="pagecontent3">
    <div class="left">
      <div
        class="left_block block1"
        v-if="objdata[0]"
        @click="godetail(objdata[0])"
      >
        <div class="imagesty imagesty1">
          <img :src="objdata[0].cover" />
        </div>
        <div class="text_content text_content1" style="bottom: 20px">
          <h5>{{ objdata[0].title }}</h5>
          <p v-html="objdata[0].desc"></p>
        </div>
      </div>
      <div
        class="left_block block2"
        v-if="objdata[1]"
        @click="godetail(objdata[1])"
      >
        <div class="imagesty imagesty1">
          <img :src="objdata[1].cover" />
        </div>
        <div class="text_content text_content1">
          <h5>{{ objdata[1].title }}</h5>
          <p v-html="objdata[1].desc"></p>
        </div>
      </div>
    </div>
    <div class="right">
      <div
        class="right_block block3"
        v-if="objdata[2]"
        @click="godetail(objdata[2])"
      >
        <div class="imagesty imagesty1">
          <img :src="objdata[2].cover" />
        </div>
        <div class="text_content text_content4">
          <h5>{{ objdata[2].title }}</h5>
          <p v-html="objdata[2].desc"></p>
        </div>
      </div>
      <div class="bottom">
        <div
          class="right_block"
          v-if="objdata[3]"
          @click="godetail(objdata[3])"
        >
          <div class="imagesty">
            <img :src="objdata[3].cover" />
          </div>
          <div class="text_content text_content4">
            <h5>{{ objdata[3].title }}</h5>
            <p v-html="objdata[3].desc"></p>
          </div>
        </div>
        <div
          class="right_block"
          v-if="objdata[4]"
          @click="godetail(objdata[4])"
          style="padding-left: 14px"
        >
          <div class="imagesty">
            <img :src="objdata[4].cover" />
          </div>
          <div class="text_content text_content4">
            <h5>{{ objdata[4].title }}</h5>
            <p v-html="objdata[4].desc"></p>
          </div>
        </div>
        <!-- <div
          class="right_block"
          v-show="objdata.length < 5"
          @click="godetail()"
          style="padding-left: 14px"
        >
          <div class="imagesty">
            <img :src="objdata[4].cover" style="opacity: 0" />
          </div>
          <div class="text_content text_content4">
            <h5>查看更多~</h5>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import logo from "@/assets/logo2.png";
import headerimage from "@/assets/sjsimages/sjs05.png";
export default {
  props: ["objdata"],
  data() {
    return {
      logo,
      dialogVisible: false,
      newdata: {
        type: 1,
        title: "新浪网络大V齐聚「天空之橙」聚焦“五好”城市宣传推介",
        desc: "9月23日晚，由淄博市委宣传部、市委网信办、新浪微博主办，微博名人堂、新浪山东承办的“V游记”之“美好淄味”大V行启动仪式，在「天空之橙双创艺术空间」举行。",
        link: "https://mp.weixin.qq.com/s/1xWefd-qSQAY62c_DsrMmg",
        cover: require("../assets/groupimg/20220222144921.jpg"),
        title1: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
        link1: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
        cover1: require("../assets/groupimg/20220222145017.jpg"),
        desc1:
          "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神。",
        title2: "热烈祝贺淄博「新生代企业家论坛」在「天空之橙」成功举办",
        link2: "https://mp.weixin.qq.com/s/TMiokX96AQ75Yw3mHxJniw",
        cover2: require("../assets/groupimg/20220222145211.jpg"),
        desc2:
          "由淄博市工商联主办、新视野智库和天空之橙控股有限公司协办的淄博新生代企业家论坛在「天空之橙双创艺术空间」举办。",
        title3: "奔跑吧！青春 |「天空之橙」与你一起，庆祝中国共产党成立100周年",
        link3: "https://mp.weixin.qq.com/s/B0ao_m6cZ_u2yhTZvgBQQA",
        cover3: require("../assets/groupimg/20220222145406.jpg"),
        desc3:
          "“唱支山歌给党听，我把党来比母亲，母亲只生了我的身，党的光辉照我心",
        title4:
          "《山东新闻联播》探寻淄博城市活力密码 | 「天空之橙」创新模式受关注",
        link4: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
        cover4: require("../assets/groupimg/20220222145618.jpg"),
        desc4: "在天空之橙还可以干什么？",

        title5: "牛年开工第一天，『天空之橙』领了个奖",
        link5: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
        cover5: require("../assets/groupimg/20220222145717.jpg"),
        desc5:
          "淄博市委、市政府召开全市落实突破年动员大会，大会在齐盛国际宾馆召开，淄博市委书记江敦涛讲话，淄博市委副书记、市长马晓磊主持会议，天空之橙控股有限公司作为主会场授奖企业代表参与此次会议",
      },
      headerimage,
    };
  },
  created() {},
  mounted() {},
  methods: {
    godetail(data) {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      if (data) {
        this.$router.push({ path: "/dtdetail", query: { id: data.id } });
      } else {
        this.$router.push({
          path: "/list",
        });
      }
      loading.close();
    },
  },
};
</script>

<style lang="scss" scoped>
// 第3套模板
.pagecontent3 {
  width: 100%;
  height: 71vh;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  padding: 20px 8vw;
  .left {
    overflow: hidden;
    padding: 0 14px;
    height: 100%;
    flex-shrink: 0;
    flex: 1;
    color: #333;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    // background: #fff;

    .left_block {
      cursor: pointer;
      width: 100%;
      height: 49%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      position: relative;
      background: #fff;
      // 图片
      .imagesty {
        width: 74%;
        height: 100%;
        flex-shrink: 0;
        overflow: hidden;
        border-radius: 5px;
      }
      .text_content {
        padding: 0 10px;
        text-align: left;
        flex: 1;
        flex-shrink: 0;
        overflow-y: auto;
        max-width: 400px;
        border-radius: 5px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        max-height: 180px;
        line-height: 1.5;
        color: #fff;
        cursor: pointer;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        p {
          line-height: 1.5;
          margin-top: 14px;
          overflow-y: auto;
        }
      }

      .imagesty1 {
        width: 100%;
      }

      .text_content1 {
        position: absolute;
        bottom: 10px;
        left: 10px;
      }
      .text_content2 {
        position: absolute;
        top: 10px;
        left: 10px;
        color: #fff;
        // background: rgba(0, 0, 0, 0.3);
      }
    }
    .block1 {
      height: 50%;
      box-sizing: border-box;
      padding-bottom: 10px;
    }
    .block2 {
      height: 50%;
    }
  }
  .right {
    flex: 1;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // 上
    .right_block {
      cursor: pointer;
      width: 100%;
      position: relative;
      .imagesty {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        overflow: hidden;
      }
      .imagesty1 {
        width: 100%;
      }
      .text_content {
        padding: 0 10px;
        text-align: left;
        flex: 1;
        flex-shrink: 0;
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        line-height: 1.5;
        color: rgb(83, 83, 83);
        max-width: 80%;
        max-height: 180px;
        border-radius: 5px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        p {
          margin-top: 14px;
          overflow-y: auto;
        }
      }

      .text_content3 {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
        // background: rgba(0, 0, 0, 0.3);
      }
      .text_content4 {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #fff;
      }
    }
    .bottom_sytle {
      position: absolute;
      z-index: 2;
      bottom: -10px;
      width: 80%;
      // background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      .left_block {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        position: relative;
        padding: 5px 10px;
        // 图片
        .imagesty {
          width: 50%;
          height: 100%;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 5px 5px 0 5px;
          padding: 10px;
          background: #fff;
        }
        .text_content {
          padding: 0 10px;
          background: #fff;
          max-width: 250px;
          word-wrap: break-word;
          text-align: left;
          padding: 10px;
          flex-shrink: 0;
          overflow-y: auto;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          color: rgb(83, 83, 83);
          border-radius: 0 5px 5px 0;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          p {
            line-height: 1.5;
            margin-top: 14px;
            overflow-y: auto;
          }
        }
      }
    }
    .right_block2 {
      width: 100%;
      height: 48%;
      position: relative;
      .imagesty {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        overflow: hidden;
        background: cadetblue;
      }
      .imagesty1 {
        width: 100%;
      }
      .text_content {
        padding: 0 10px;
        text-align: left;
        flex: 1;
        flex-shrink: 0;
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        line-height: 1.5;
        color: rgb(83, 83, 83);
        max-width: 80%;
        max-height: 180px;
        border-radius: 5px;

        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

        p {
          line-height: 1.5;
          margin-top: 14px;
          overflow-y: auto;
        }
      }
      .text_content2 {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: #fff;
        background: rgba(0, 0, 0, 0.3);
      }
    }
    .bottom {
      // height: 100%;
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding-top: 11px;
      justify-content: space-between;
      align-items: center;
      height: 40%;
      .right_block {
        width: 50%;
        height: 100%;
        flex: 1;
        box-sizing: border-box;
        .imagesty {
          height: 100%;
          width: 100%;
          background: #df7924;
        }
        .text_content {
          bottom: 0;
          right: 0;
          text-align: left;
          overflow-y: auto;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          line-height: 1.5;
          color: #fff;
          max-height: 130px;
          border-radius: 5px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }
      }
    }
    .block3 {
      height: 60%;
      overflow: hidden;
    }
  }

  .left_logo {
    margin: 0 auto;
    // margin-bottom: 10px;
  }
  .text_content2 {
    position: absolute;
    left: 20px;
    // background: rgba(0, 0, 0, 0.3);
    padding: 16px;
    border-radius: 5px;
    color: #fff;
    p {
      margin-top: 20px;
    }
  }
  // 第二套
  .text_content {
    background: rgba(0, 0, 0, 0.3);
    padding: 20px !important;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
}
h5 {
  font-weight: 600;
  font-size: 17px;
}
p {
  font-size: 14px;
}
img:hover {
  transform: scale(1.08, 1.08);
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 5px;
  transition: all 0.9s ease-out;
  /* 过度 所有css属性 1秒过度 结束慢*/
  -moz-transition: all 0.9s ease-out;
  /* Firefox 4 */
  -webkit-transition: all 0.9s ease-out;
  /* Safari 和 Chrome */
  -o-transition: all 0.9s ease-out;
  /* Opera */
}
</style>
