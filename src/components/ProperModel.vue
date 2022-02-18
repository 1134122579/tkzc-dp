<template>
  <div></div>
</template>

<script>
import Swiper from "swiper";
import { getDesigner } from "@/api/swiperApi.js";
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getDesigner();
  },
  methods: {
    getDesigner() {
      getDesigner().then((res) => {
        this.list = res;
      });
    },
  },
};
</script>
