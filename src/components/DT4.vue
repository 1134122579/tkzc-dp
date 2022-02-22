<template>
  <div class="pagecontent3">
    <div class="left">
      <div class="left_logo">
        <img style="height: 40px" :src="logo" alt="" />
      </div>
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
          <p>{{ newdata.desc }}</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right_block">
        <div class="imagesty imagesty1">
          <img :src="newdata.cover3" />
        </div>
        <div class="text_content text_content1">
          <h5>{{ newdata.title3 }}</h5>
          <p>{{ newdata.desc }}</p>
        </div>
      </div>
      <div class="bottom_sytle">
        <div class="left_block">
          <div class="imagesty">
            <img :src="newdata.cover" />
          </div>
          <div class="text_content">
            <h5>{{ newdata.title }}</h5>
            <p>{{ newdata.desc }}</p>
          </div>
        </div>
        <div class="left_block">
          <div class="imagesty">
            <img :src="newdata.cover1" />
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
    padding: 20px;
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
      height: 44%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      // margin-top: 10px;
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
