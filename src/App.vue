<template>
  <div id="app">
    <Vue2WangEditor v-model="content" />

    <textarea
      style="width: 100%; height: 300px; margin-top: 24px"
      v-model="content"
    />
  </div>
</template>

<script>
import Vue2WangEditor from "./index.vue";

export default {
  name: "App",
  components: {
    Vue2WangEditor,
  },
  data() {
    return {
      content: "<p>hello world</p>",
    };
  },
};
</script>

<style>
#app {
  padding: 64px;
}
</style>
