<template>
  <div id="app">
    <!-- <keep-alive v-if="iskeeplive">
      <router-view />
    </keep-alive> -->
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      iskeeplive: false,
    };
  },
  watch: {
    $route: {
      handler(to, from) {
        console.log(to.meta.iskeeplive);
        this.iskeeplive = to.meta.iskeeplive;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background: #edeceb;
}

::v-deep.el-icon-arrow-down:before {
  content: "\e790";
}
</style>
