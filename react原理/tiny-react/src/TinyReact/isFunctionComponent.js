/*
 * @Author: web_XL
 * @Date: 2021-07-23 10:40:13
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-23 10:47:46
 * @Description:
 */

import isFunction from "./isFunction"

/**
 * 判断是不是函数式组件
 */
export default function isFunctionComponent (virtualDOM) {
  let type = virtualDOM.type
  // vdm 存在 && 是组件 && !(存在原型 且原型上存在render Fn_这个是class组件)
  return virtualDOM && isFunction(virtualDOM) && !(type.prototype && type.prototype.render)
}