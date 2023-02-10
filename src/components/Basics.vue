<template>
  <!-- Methods and Variables Binding -->
  <div class="card">
    <p>Our App Name {{ appName }}</p>
    <p :class="{ clicked: isClicked }" v-html="count"></p>

    <button @click="subtractCountHandler">Subtract Count</button>
    <button @click="addCountHandler">Add Count</button>
  </div>

  <!-- Raw Html Binding -->
  <div class="card">
    Raw Html Binding
    <p v-html="message"></p>
    Inner Text Binding
    <p>{{ message }}</p>
  </div>

  <!-- Difference betwween Computed and Methods Functions -->
  <div class="card">
    <p>Computed Today's time is {{ nowTime }}</p>
    <p>Method Today's time is {{ preciseNowTime() }}</p>
  </div>

  <!-- Conditional Rendering -->
  <div class="card">
    <div v-show="show">Initially Hidden Element</div>

    <button @click="showElHandler" v-if="!show">Show Hidden Element</button>
    <button @click="hideElHandler" v-else>Hide Element</button>
  </div>
</template>

<script>
export default {
  props: {
    appName: String,
  },
  //   created() {
  //     console.log(this.props.appName);
  //   },
  data() {
    return {
      count: 0,
      message: "Hello World",
      isClicked: false,
      show: false,
      scroll: false,
    };
  },
  methods: {
    addCountHandler() {
      this.count++;
      this.isClicked = false;
    },
    subtractCountHandler() {
      this.count--;
      this.isClicked = true;
    },
    preciseNowTime() {
      return new Date();
    },
    showElHandler() {
      this.show = true;
    },
    hideElHandler() {
      this.show = false;
    },
    onScrollHandler() {
      this.scroll = true;
    },
  },
  computed: {
    nowTime() {
      return new Date();
    },
  },
};
</script>

<style scoped>
.clicked {
  color: red;
}
</style>
