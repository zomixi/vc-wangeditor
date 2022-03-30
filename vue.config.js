const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: "/vue2-wangeditor", // just for github pages
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
  },
});
