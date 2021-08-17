/*
 * @Author: web_XL
 * @Date: 2021-07-22 15:29:50
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-23 09:39:28
 * @Description:
 */
import mountNativeElement from './mountNativeElement'
import updateNodeElement from './updateNodeElement'


export default function createDOMElement (virtualDOM, container) {
  let rootElement = null // 根节点
  if (virtualDOM.type === "text") {// 文本节点
    rootElement = document.createTextNode(virtualDOM.props.textContent)
  } else {// 元素节点
    rootElement = document.createElement(virtualDOM.type)
    updateNodeElement(rootElement, virtualDOM) // 将属性绑定到元素节点上
  }




  // 递归子节点
  virtualDOM.children.forEach(item => {
    mountNativeElement(item, rootElement)
  })

  return rootElement
}