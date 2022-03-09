<template>
  <div class="pagecontent3">
    <div
      class="left_block"
      :style="{ '--bgurl': 'url(' + item.cover + ')' }"
      v-for="(item, index) in objdata"
      @click="godetail(item)"
    >
      <div class="imagesty imagesty1">
        <!-- <img :src="item.cover" /> -->
        <el-image
          class="imageStyle"
          :src="item.cover"
          style="width: 100%; height: 100%"
          fit="cover"
        ></el-image>
      </div>
      <div class="text_content text_content2" :class="'position' + index">
        <h5>{{ item.title }}</h5>
        <p v-html="item.desc"></p>
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
      newdata: {},
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
      this.$router.push({ path: "/dtdetail", query: { id: data.id } });
      loading.close();
    },
  },
};
</script>

<style lang="scss" scoped>
// 第3套模板
.pagecontent3 {
  width: 100%;
  height: 80vh;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 20px 130px;
  padding-bottom: 40px;
  .left_block {
    width: 49.5%;
    height: 48.5%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.8s ease-out;
    opacity: 0.8;
    cursor: pointer;
    // &::before {
    //   content: "";
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   background: transparent var(--bgurl) center center no-repeat;
    //   filter: blur(0px);
    //   z-index: -1;
    //   background-size: cover;
    //   opacity: 0.8;
    // }

    &:hover {
      box-shadow: 0 0 14px rgb(56, 49, 49);
      opacity: 1;
      transform: scale(1.02, 1.02);
      // background: rgba(0, 0, 0, 0.5);
      .imageStyle {
        transform: scale(1.1, 1.1);
      }
    }
    // 图片
    .imagesty {
      width: 74%;
      height: 100%;
      flex-shrink: 0;
      overflow: hidden;
      border-radius: 5px;
      .imageStyle {
        transition: all 0.9s ease-out;
      }
    }
    .text_content {
      padding: 0 10px;
      text-align: left;
      overflow-y: auto;
      box-sizing: border-box;
      display: flex;
      position: absolute;
      flex-direction: column;
      line-height: 1.5;
      background: rgba(0, 0, 0, 0.7);
      width: 400px;
      height: 200px;
      color: #fff;
      border-radius: 5px;
      p {
        line-height: 1.5;
        margin-top: 14px;
        overflow-y: auto;
        height: 100px;
      }
    }

    .imagesty1 {
      width: 100%;
    }
    .position0 {
      bottom: 10px;
      right: 10px;
      // top: 10px;
      // left: 10px;
    }
    .position1 {
      // top: 10px;
      // right: 10px;
      bottom: 10px;
      left: 10px;
    }
    .position2 {
      // bottom: 10px;
      // left: 10px;
      top: 10px;
      right: 10px;
    }
    .position3 {
      top: 10px;
      left: 10px;
      // bottom: 10px;
      // right: 10px;
    }
  }
  // 第二套
}
h5 {
  font-weight: 600;
  font-size: 18px;
}
p {
  font-size: 14px;
}
img:hover {
  transform: scale(1.2, 1.2);
}
img {
  width: 100%;
  height: 100%;
  // object-fit: cover;
  display: block;
  border-radius: 5px;
  transition: all 0.8s ease-out;
  /* 过度 所有css属性 1秒过度 结束慢*/
  -moz-transition: all 0.8s ease-out;
  /* Firefox 4 */
  -webkit-transition: all 0.8s ease-out;
  /* Safari 和 Chrome */
  -o-transition: all 0.8s ease-out;
  /* Opera */
}
</style>
