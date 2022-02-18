<template>
  <div id="china_map_box">
    <div id="china_map"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "@/assets/china.js";
import { getCity } from "@/api/swiperApi.js";

export default {
  data() {
    return {
      //echart 配制option
      options: {
        tooltip: {
          triggerOn: "mousemove", //mousemove、click
          padding: 8,
          borderWidth: 1,
          borderColor: "#409eff",
          backgroundColor: "rgba(255,255,255,0.7)",
          textStyle: {
            color: "#000000",
            fontSize: 13,
          },
          formatter: function (e, t, n) {
            let data = e.data;
            //模拟数据
            data.specialImportant = (Math.random() * 1000) | 0;
            data.import = (Math.random() * 1000) | 0;
            data.compare = (Math.random() * 1000) | 0;
            data.common = (Math.random() * 1000) | 0;
            data.specail = (Math.random() * 1000) | 0;

            // let context = `
            //    <div>
            //        <p><b style="font-size:15px;">${data.name}</b>(2020年第一季度)</p>
            //        <p class="tooltip_style"><span class="tooltip_left">事件总数</span><span class="tooltip_right">${data.value}</span></p>
            //        <p class="tooltip_style"><span class="tooltip_left">特别重大事件</span><span class="tooltip_right">${data.specialImportant}</span></p>
            //        <p class="tooltip_style"><span class="tooltip_left">重大事件</span><span class="tooltip_right">${data.import}</span></p>
            //        <p class="tooltip_style"><span class="tooltip_left">较大事件</span><span class="tooltip_right">${data.compare}</span></p>
            //        <p class="tooltip_style"><span class="tooltip_left">一般事件</span><span class="tooltip_right">${data.common}</span></p>
            //        <p class="tooltip_style"><span class="tooltip_left">特写事件</span><span class="tooltip_right">${data.specail}</span></p>
            //    </div>
            // `;
            // return context;
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
              fontSize: "14",
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
              //   symbol:
              //     "image://https://img95.699pic.com/photo/40121/6173.gif_wh860.gif",
              image: "",
              symbolSize: 40,
              animation: true,
              animationEasing: "bounceIn",
              itemStyle: {
                color: "RGBA(100, 100, 100,.8)",
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
              data: [
                {
                  name: "武汉",
                  coord: [114.31, 30.52],
                },
                {
                  name: "武汉",
                  coord: [115.31, 30.52],
                },
              ],
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
        item["name"] = item.city;
        item["coord"] = [Number(item.lng), Number(item.lat)];
        return item;
      });
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

<style scoped>
#china_map_box {
  height: 100%;
  position: relative;
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
