/*
 * @Author: web_XL
 * @Date: 2021-07-22 15:07:50
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-22 15:20:00
 * @Description:
 */
import mountElement from './mountElement'
export default function diff (
  virtualDOM,
  container,
  oldDOM
) {
  if (!oldDOM) {//若旧的vdm不存在 则直接渲染dom
    mountElement(virtualDOM, container)
  }
}