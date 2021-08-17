/*
 * @Author: web_XL
 * @Date: 2021-07-23 10:07:56
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-23 10:58:01
 * @Description: 渲染函数组件和class组件
 */
import isFunctionComponent from './isFunctionComponent'
export default function mountComponent (virtualDOM) {

  if (isFunctionComponent(virtualDOM)) {// 函数式组件
    console.log("函数式组件");
  } else {// 类组件 class
    console.log("类组件");

  }

}