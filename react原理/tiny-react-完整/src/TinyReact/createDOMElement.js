/*
 * @Author: web_XL
 * @Date: 2020-10-07 12:19:18
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-22 15:16:50
 * @Description: 
 */
import mountElement from "./mountElement"
import updateNodeElement from "./updateNodeElement"

export default function createDOMElement (virtualDOM) {
  let newElement = null
  if (virtualDOM.type === "text") {
    // 文本节点
    newElement = document.createTextNode(virtualDOM.props.textContent)
  } else {
    // 元素节点
    newElement = document.createElement(virtualDOM.type)
    updateNodeElement(newElement, virtualDOM)
  }

  newElement._virtualDOM = virtualDOM

  // 递归创建子节点
  virtualDOM.children.forEach(child => {
    mountElement(child, newElement)
  })

  if (virtualDOM.props && virtualDOM.props.ref) {
    virtualDOM.props.ref(newElement)
  }

  return newElement
}
