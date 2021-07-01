/*
 * @Author: web_XL
 * @Date: 2021-05-30 09:26:52
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-25 10:58:00
 * @Description: 
 */
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
    },
    output: {
      publicPath: "./"
    }
  }
}
