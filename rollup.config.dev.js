const path = require("path");
const inputPath = path.resolve(__dirname, "./src/index.js");
const outputPath = path.resolve(__dirname, "./dist/visual.lib.js");
const outputPathEs = path.resolve(__dirname, "./dist/visual.lib.es.js");
const resolve = require("rollup-plugin-node-resolve");
const common = require("rollup-plugin-commonjs");
const babel = require("rollup-plugin-babel");
const json = require("rollup-plugin-json");
const vue = require("rollup-plugin-vue");
const postcss = require("rollup-plugin-postcss");
module.exports = {
  input: inputPath,
  output: [
    {
      file: outputPath,
      format: "umd", // umd格式
      name: "visualUmd",
      globals: {
        vue: "vue",
      },
    },
    {
      file: outputPathEs,
      format: "es", // es格式
      name: "visualEs",
      globals: {
        vue: "vue",
      },
    },
  ],
  plugins: [
    // 有顺序可言。vue
    vue(),
    resolve(),
    common(),
    json(),
    postcss({ plugins: [] }),
    babel({ exclude: "node_modules/**" }),
  ],
  external: ["vue"],
};
