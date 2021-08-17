/*
 * @Author: web_XL
 * @Date: 2021-07-23 09:21:19
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-23 09:36:39
 * @Description:将属性绑定在元素节点上
 */

export default function updateNodeElement (
  newElement,
  virtualDOM
) {
  let newProps = virtualDOM.props || {}

  Object.keys(newProps).forEach(key => {
    let propValue = newProps[key]

    if (key.slice(0, 2) === "on") { // 事件绑定
      let event = key.slice(2).toLowerCase()
      newElement.addEventListener(event, propValue)
    } else if (key === "value" || key === "checked") { //input 或者 radio
      newElement[key] = propValue
    } else if (key != "children") {// 排除children
      if (key === "className") {// className
        newElement.setAttribute("class", propValue)
      } else { // 其他属性
        newElement.setAttribute(key, propValue)
      }
    }
  });
}