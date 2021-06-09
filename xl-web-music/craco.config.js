/*
 * @Author: web_XL
 * @Date: 2021-06-09 09:35:57
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-09 09:44:43
 * @Description:
 */
const path = require("path")

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components")
    }
  }
}
