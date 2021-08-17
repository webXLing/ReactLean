
/*
 * @Author: web_XL
 * @Date: 2021-07-22 15:06:16
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-22 15:18:56
 * @Description:
 */
import diff from './diff'
export default function render (
  virtualDOM,
  container,
  oldDOM
) {
  diff(virtualDOM, container, oldDOM)
}