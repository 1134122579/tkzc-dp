<template>
  <div class="pagecontent3">
    <div class="left">
      <div class="left_block">
        <div class="text_content">
          <h5>{{ newdata.title }}</h5>
          <p>{{ newdata.desc }}</p>
        </div>
        <div class="imagesty">
          <img :src="newdata.cover" />
        </div>
      </div>
      <div class="left_block">
        <div class="imagesty imagesty1">
          <img :src="newdata.cover1" />
        </div>
        <div class="text_content text_content1">
          <h5>{{ newdata.title1 }}</h5>
          <p>{{ newdata.desc1 }}</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right_block">
        <div class="imagesty imagesty1">
          <img :src="newdata.cover2" />
        </div>
        <div class="text_content text_content1">
          <h5>{{ newdata.title2 }}</h5>
          <p>{{ newdata.desc2 }}</p>
        </div>
      </div>
      <div class="bottom_sytle">
        <div class="left_block">
          <div class="imagesty">
            <img :src="newdata.cover3" />
          </div>
          <div class="text_content">
            <h5>{{ newdata.title3 }}</h5>
            <p>{{ newdata.desc3 }}</p>
          </div>
        </div>
        <div class="left_block">
          <div class="imagesty">
            <img :src="newdata.cover4" />
          </div>
          <div class="text_content">
            <h5>{{ newdata.title1 }}</h5>
            <p>{{ newdata.desc }}</p>
          </div>
        </div>
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
        desc: "每一个地方都是小细节，天空之橙的茶歇场所，在两处露天茶室里，仿佛悬浮在水面之上饮茶，是静坐、聊天的绝佳场所。",
        link: "https://mp.weixin.qq.com/s/1xWefd-qSQAY62c_DsrMmg",
        cover: require("../assets/groupimg/20220222144921.jpg"),
        title1: "天空之橙受邀参加「淄博市青年企业家座谈会」并作为代表发言",
        link1: "https://mp.weixin.qq.com/s/WGbFPzITSrD9P7DPjHY6wA",
        cover1: require("../assets/groupimg/20220222145017.jpg"),
        desc1:
          "7月28日，全市青年企业家座谈会召开，深入学习贯彻习近平总书记“七一”重要讲话精神，号召全市广大青年企业家牢记党和人民的重托，激发创业兴业的壮志豪情，创造无愧于时代、无愧于青春的骄人业绩",
        title2: "热烈祝贺淄博「新生代企业家论坛」在「天空之橙」成功举办",
        link2: "https://mp.weixin.qq.com/s/TMiokX96AQ75Yw3mHxJniw",
        cover2: require("../assets/groupimg/20220222145211.jpg"),
        desc2:
          "由淄博市工商联主办、新视野智库和天空之橙控股有限公司协办的淄博新生代企业家论坛在「天空之橙双创艺术空间」举办。论坛进一步搭建了信息沟通和资源共享平台，促进了青年企业家和青年创业者的联络交流、团结合作",
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
  methods: {},
};
</script>

<style lang="scss" scoped>
// 第3套模板
.pagecontent3 {
  width: 100%;
  height: 80vh;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  padding: 20px;
  .left {
    overflow: hidden;
    width: 60%;
    padding: 0 20px;
    height: 100%;
    flex-shrink: 0;
    flex: 1;
    color: #333;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: wrap;
    // background: #fff;

    .left_block {
      width: 100%;
      height: 48%;
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
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        line-height: 1.5;
        color: rgb(83, 83, 83);
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
        color: #fff;
        background: rgba(0, 0, 0, 0.3);
        width: 400px;
        border-radius: 10px;
        padding: 20px;
      }
    }
  }
  .right {
    flex: 1;
    height: 100%;
    flex-shrink: 0;
    position: relative;
    // 上
    .right_block {
      width: 100%;
      height: 100%;
      position: relative;
      .imagesty {
        width: 100%;
        height: 68%;
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
        p {
          line-height: 1.5;
          margin-top: 14px;
          overflow-y: auto;
        }
      }

      .text_content1 {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
        background: rgba(0, 0, 0, 0.3);
        width: 400px;
        border-radius: 10px;
        padding: 20px;
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
          width: 250px;
          text-align: left;
          padding: 10px;
          flex-shrink: 0;
          overflow-y: auto;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          color: rgb(83, 83, 83);
          border-radius: 0 5px 5px 0;
          p {
            line-height: 1.5;
            margin-top: 14px;
            overflow-y: auto;
          }
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
    padding: 16px;
    border-radius: 5px;
    color: #fff;
    p {
      margin-top: 20px;
    }
  }
  // 第二套
}
h5 {
  font-weight: 600;
  font-size: 20px;
}
p {
  font-size: 16px;
}
img:hover {
  transform: scale(1.5, 1.5);
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 5px;
  transition: all 0.6s ease-out;
  /* 过度 所有css属性 1秒过度 结束慢*/
  -moz-transition: all 0.6s ease-out;
  /* Firefox 4 */
  -webkit-transition: all 0.6s ease-out;
  /* Safari 和 Chrome */
  -o-transition: all 0.6s ease-out;
  /* Opera */
}
</style>
