/*
 * @Author: web_XL
 * @Date: 2021-07-22 15:11:28
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-23 09:33:56
 * @Description:
 */
import createDOMElement from './createDOMElement'
export default function mountNativeElement (virtualDOM, container) {
  let rootElement = null // 根节点
  rootElement = createDOMElement(virtualDOM, container)
  // 将创建的节点丢到 容器上
  container.appendChild(rootElement)

}