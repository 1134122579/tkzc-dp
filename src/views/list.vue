<template>
  <div>
    <div class="title">天橙动态</div>
    <div class="pagecontent">
      <div
        class="left_block"
        v-for="(dataitem, dataindex) in list"
        :key="dataindex"
        @click="godetail(dataitem)"
      >
        <div class="imagesty">
          <img :src="dataitem.cover" />
        </div>
        <div class="text_content">
          <h5>{{ dataitem.title }}</h5>
          <p v-html="dataitem.desc"></p>
        </div>
      </div>
    </div>
    <div class="foolter" @click="back">
      <!-- animate__animated  animate__rotateOut animate__slower animate__infinite -->
      <div
        class="animate__animated animate__slideInDown animate__slower animate__infinite"
      >
        <img src="../assets/backicon1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { getDynamicList } from "@/api/swiperApi.js";

export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getDynamicList();
  },

  methods: {
    getDynamicList() {
      getDynamicList().then((res) => {
        // let newlist = [];
        // let num = parseInt(res.length / 8);
        // for (let index = 0; index <= num; index++) {
        //   newlist.push({ list: res.slice(index * 8, (index + 1) * 8) });
        // }
        console.log(res);
        // res = res.map((item) => {
        //   item["desc"] =
        //     " 按时打算大大多 按时打算大大多 按时打算大大多 按时打算大大多按时打算大大多 按时打算大大多 按时打算大大多 按时打算大大多按时打算大大多按时打算大大多 按时打算大大多 按时打算大大多 按时打算大大多按时打算大大多 按时打算大大多 按时打算大大多 按时打算大大多按时打算大大多按时打算大大多 按时打算大大多 按时打算大大多 按时打算大大多按时打算大大多 按时打算大大多 按时打算大大多 按时打算大大多按时打算大大多";
        //   return item;
        // });
        // if (res.length < 5) {
        //   this.list = [{type:this.randomNum(4,6),list:res}];
        // }
        // .slice(0, 6)
        this.list = res;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
  letter-spacing: 8px;
  text-indent: 8px;
  padding: 20px 0;
  font-weight: 600;
  text-align: center;
}
.pagecontent {
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  position: relative;
  padding: 20px 80px 20px 70px;
  margin-left: 10px;
  overflow-y: auto;

  // 第一套模板
  .left_block {
    width: 48%;
    height: 31%;
    margin-left: 10px;
    flex-shrink: 0;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 10px;
    position: relative;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 15px #ccc;
    transition: all 1s ease-out;
    /* 过度 所有css属性 1秒过度 结束慢*/
    -moz-transition: all 1s ease-out;
    /* Firefox 4 */
    -webkit-transition: all 1s ease-out;
    /* Safari 和 Chrome */
    -o-transition: all 1s ease-out;
    /* Opera */
    &:hover {
      transform: scale(1.02, 1.02);
      img {
        transform: scale(1.08, 1.08);
      }
    }
    // 图片
    .imagesty {
      width: 40%;
      height: 100%;
      flex-shrink: 0;
      overflow: hidden;
      border-radius: 5px;
      img {
        border-radius: 5px;
        display: block;
        width: 100%;
        object-fit: cover;
        height: 100%;
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
      h5 {
        font-size: 22px;
        font-weight: 600;
      }
      p {
        line-height: 1.5;
        margin-top: 14px;
        overflow-y: auto;
        height: 100%;
        height: 10vh;
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
    box-sizing: border-box;
    width: 80%;
    p {
      margin-top: 20px;
      height: 100%;
      overflow-y: auto;
      font-size: 14px;
    }
  }
  // 第二套
}
.foolter {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 40px;
  z-index: 999;
  cursor: pointer;
  img {
    height: 100%;
    transform: rotate(-90deg);
  }
}
</style>
