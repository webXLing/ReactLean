/*
 * @Author: web_XL
 * @Date: 2021-07-23 10:30:14
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-23 10:32:40
 * @Description: 判断该vdm 是不是一个组件  <ChildComponents>
 */
export default function isFunction (virtualDOM) {
  return virtualDOM && typeof virtualDOM.type === 'function'

}