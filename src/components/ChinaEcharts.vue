<template>
  <div id="china_map_box">
    <div id="china_map"></div>
    <div class="citylist">
      <img
        :src="logo"
        style="height: 30px; display: block; margin-left: 14px"
      />
      <div class="textli">
        <div v-for="item in citylist" :key="item.id" class="list">
          {{ item.city }}
        </div>
        <span class="sl">... ...</span>
      </div>
    </div>
    <div class="left">
      <p class="num">30 <span>+</span></p>
      <p>THE BRANCH SERVICE AGENCY</p>
      <p>分支服务机构</p>
    </div>

    <!-- <div class="userinfo">
      <div class="userinfoname">
        <div class="header_l">
          <img
            class="headrimage"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fbd%2Fbb%2F6f%2Fbdbb6fede8497ddb835ce5630db28be0.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649215663&t=345894f0afe7515c91501a31209de558"
          />
          <div class="username">某某某</div>
        </div>
        <div class="user">
          <div class="descimage">
            <img
              class="descimage"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fbd%2Fbb%2F6f%2Fbdbb6fede8497ddb835ce5630db28be0.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649215663&t=345894f0afe7515c91501a31209de558"
            />
          </div>
          <div class="useradress">
            某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某地址
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
import "@/assets/china.js";
import { getCity } from "@/api/swiperApi.js";
import logo from "@/assets/logo.png";

export default {
  data() {
    return {
      logo,
      //echart 配制option
      options: {
        tooltip: {
          triggerOn: "click", //mousemove、 click
          padding: 8,
          borderWidth: 1,
          borderColor: "#409eff",
          backgroundColor: "rgba(255,255,255,0.7)",
          textStyle: {
            color: "#000000",
            fontSize: 13,
          },
          extraCssText: "word-wrap: break-word;",
          formatter: function (e, t, n) {
            let data = e.data;
            console.log(e, data.address);
            let str = "";
            if (data.address.length > 14) {
              let num = Math.floor(data.address.length / 14);
              for (let index = 0; index < num; index++) {
                str =
                  str +
                  `<span>${data.address.slice(
                    14 * index,
                    14 * (index + 1)
                  )}</span>` +
                  "<br/>";
              }
            } else {
              str = data.address;
            }
            let strcompany_name = "";
            if (data.company_name.length > 14) {
              let num = Math.floor(data.company_name.length / 14);
              for (let index = 0; index < num; index++) {
                strcompany_name =
                  strcompany_name +
                  `<span>${data.company_name.slice(
                    14 * index,
                    14 * (index + 1)
                  )}</span>` +
                  "<br/>";
              }
            } else {
              strcompany_name = data.company_name;
            }

            let context = `
             <div class="userinfo">
      <div class="userinfoname">
        <div class="header_l">
          <img
            class="headrimage"
            src="${data.photos}"
          />
          <div class="username">${data.user_name}</div>
        </div>
        <div class="user">
          <div class="descimage">
            <img
              class="descimage"
              src="${data.company_img}"
            />
          </div>
          <h4 class="usercompyname">${strcompany_name}</h4>
          <p class="useradress">
                ${str}
          </p>
        </div>
      </div>
    </div>
            `;
            return context;
          },
        },
        visualMap: {
          show: false,
          left: 26,
          bottom: 40,
          showLabel: true,
          pieces: [
            {
              gte: 1000,
              label: ">= 1000",
              color: "#E46400",
            },
            {
              gte: 500,
              lt: 999,
              label: "500 - 999",
              color: "#E07F26",
            },
            {
              gte: 100,
              lt: 499,
              label: "100 - 499",
              color: "#E29D5F",
            },
            {
              gte: 10,
              lt: 99,
              label: "10 - 99",
              color: "#DEDEDE",
            },
            {
              lt: 10,
              label: "<10",
              color: "#F2F2F2",
            },
          ],
        },
        geo: {
          map: "china",
          scaleLimit: {
            min: 1,
            max: 2,
          },
          zoom: 1,
          top: 120,
          label: {
            normal: {
              show: false,
              fontSize: "12",
              color: "rgba(0,0,0,0.3)",
            },
          },
          itemStyle: {
            normal: {
              //shadowBlur: 50,
              borderWidth: 0, //设置外层边框
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
              //   borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: "#f2d5ad",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0,
            },
          },
        },
        series: [
          {
            name: "分布城市",
            type: "map",
            geoIndex: 0,
            coordinateSystem: "geo",
            data: [],
            markPoint: {
              symbol: "pin",
              // symbol:
              //   "image://https://img95.699pic.com/photo/40121/6173.gif_wh860.gif",
              image: "",
              symbolSize: 40,
              animation: true,
              animationEasing: "bounceIn",
              select: {
                // itemStyle: {
                //   borderColor: "red",
                //   borderWidth: "2",
                //   color: "RGBA(100, 100, 100,.8)", //设置地图点击后的颜色
                // },
              },
              itemStyle: {
                color: "RGBA(100, 100, 100,.8)",
                // borderColor: "red",
                borderWidth: "2",
              },
              animationDuration: function (idx) {
                // 越往后的数据时长越大
                return idx * 100;
              },
              animationDelayUpdate: function (idx) {
                // 越往后的数据延迟越大
                return idx * 100;
              },
              label: {
                normal: {
                  show: true,
                  formatter: function (d) {
                    return d.name;
                  },
                },
              },
              data: [],
            },
          },
        ],
      },
      //echart data
      dataList: [
        {
          name: "南海诸岛",
          value: 0,
          eventTotal: 100,
          specialImportant: 10,
          import: 10,
          compare: 10,
          common: 40,
          specail: 20,
        },
        {
          name: "北京",
          value: 540,
        },
        {
          name: "天津",
          value: 1000,
        },
        {
          name: "上海",
          value: 1100,
        },
        {
          name: "重庆",
          value: 150,
        },
        {
          name: "河北",
          value: 130,
        },
        {
          name: "河南",
          value: 830,
        },

        {
          name: "湖南",
          value: 190,
        },
        {
          name: "安徽",
          value: 200,
        },
        {
          name: "山东",
          value: 1609,
        },

        {
          name: "江苏",
          value: 131,
        },
        {
          name: "浙江",
          value: 604,
        },
        {
          name: "江西",
          value: 136,
        },
        {
          name: "湖北",
          value: 152,
        },
        {
          name: "广西",
          value: 33,
        },
        {
          name: "甘肃",
          value: 7,
        },
        {
          name: "山西",
          value: 100,
        },
        {
          name: "陕西",
          value: 100,
        },
        {
          name: "吉林",
          value: 4,
        },
        {
          name: "福建",
          value: 500,
        },
        {
          name: "贵州",
          value: 120,
        },
        {
          name: "广东",
          value: 198,
        },
        {
          name: "青海",
          value: 1,
        },
        {
          name: "西藏",
          value: 0,
        },
        {
          name: "四川",
          value: 100,
        },
        {
          name: "宁夏",
          value: 4,
        },
        {
          name: "海南",
          value: 22,
        },
        {
          name: "台湾",
          value: 3,
        },
        {
          name: "香港",
          value: 5,
        },
        {
          name: "澳门",
          value: 555,
        },
      ],
      //   城市列表,
      citylist: [],
    };
  },
  methods: {
    // 获取城市
    async getCity() {
      let res = await getCity();
      res = res.map((item) => {
        item["user_name"] = item["name"] || "某某某";
        item["name"] = item.city;
        item["coord"] = [Number(item.lng), Number(item.lat)];
        item["company_name"] = item["company_name"] || "我是公司名字";
        item["address"] = item["address"] || "我是公司地址";
        item["photos"] =
          item["photos"] ||
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fbd%2Fbb%2F6f%2Fbdbb6fede8497ddb835ce5630db28be0.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649215663&t=345894f0afe7515c91501a31209de558";
        item["company_img"] =
          item["company_img"] ||
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fbd%2Fbb%2F6f%2Fbdbb6fede8497ddb835ce5630db28be0.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649215663&t=345894f0afe7515c91501a31209de558";

        // "";
        // item["address"] =
        //   "我是一个地址凑数洗啊我是一个地址凑数洗啊我是一个地址凑数洗啊我是一个地址凑数洗啊我是一个地址凑数洗啊我是一个地址凑数洗啊";
        return item;
      });
      console.log(res);
      this.citylist = res;
      this.options.series[0]["data"] = this.dataList;
      this.options.series[0]["markPoint"]["data"] = res;
      //   this.setEchartOption();
      this.$nextTick(() => {
        this.initEchartMap();
      });
    },
    //初始化中国地图
    initEchartMap() {
      let mapDiv = document.getElementById("china_map");
      let myChart = echarts.init(mapDiv);
      myChart.setOption(this.options);
    },
    //修改echart配制
    setEchartOption() {
      //   this.options.series.push(zbseries);
      this.options.series[0]["data"] = this.dataList;
    },
    getRandomNumberByRange(start, end) {
      return Math.floor(Math.random() * (end - start) + start);
    },
  },
  created() {
    // this.setEchartOption();
  },
  mounted() {
    this.getCity();
    this.$nextTick(() => {
      this.initEchartMap();
    });
  },
};
</script>

<style lang="scss" scoped>
#china_map_box {
  height: 100%;
  position: relative;
}
/* 城市 */
.citylist {
  color: rgb(80, 78, 78);
  position: absolute;
  top: 48%;
  transform: rotate(50%);
  right: 9%;
  width: 450px;
  font-size: 16px;
  .textli {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .list {
    padding: 4px 10px;
  }
  .sl {
    font-weight: 600;
  }
}
.left {
  color: #000;
  position: absolute;
  top: 50%;
  transform: rotate(50%);
  left: 14%;
  font-size: 24px;
  color: rgb(80, 78, 78);
  letter-spacing: 8px;
  p {
    text-align: right;
    line-height: 1.8;
  }
  .num {
    font-size: 140px;
    font-weight: 800;
    padding: 10px 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    line-height: 1;
    span {
      color: #e46400;
      font-size: 50px;
      padding-bottom: 10px;
    }
  }
}

#china_map_box #china_map {
  height: 100%;
}
#china_map_box .china_map_logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
}
</style>
<style>
#china_map .tooltip_style {
  line-height: 1.7;
  overflow: hidden;
}
#china_map .tooltip_left {
  float: left;
}
#china_map .tooltip_right {
  float: right;
}
</style>

<style lang="scss">
.userinfo {
  padding: 10px;
  border-radius: 5px;
  width: 240px;
  .userinfoname {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    // width: ;
    .header_l {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-right: 10px;
      .headrimage {
        width: 40px;
        height: 40px;
        display: block;
        overflow: hidden;
        flex-direction: 0;
        border-radius: 50%;
      }
      .username {
        margin-top: 20px;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.8;
        text-align: center;
        writing-mode: vertical-lr; /*从左向右 从右向左是 writing-mode: vertical-rl;*/
        writing-mode: tb-lr; /*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
      }
    }
    .user {
      flex: 1;
      width: 180px;
      font-size: 14px;
      text-align: left;
      .descimage {
        width: 100%;
        height: 150px;
        overflow: hidden;
        // img {
        //   width: 100%;
        // }
      }
      .usercompyname {
        margin-top: 5px;
        width: 180px;
        text-align: left;
        font-weight: 600;
      }
      .useradress {
        width: 180px;
        text-align: left;
        word-wrap: break-word;
      }
    }
  }
}
</style>
