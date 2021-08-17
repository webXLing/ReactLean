/*
 * @Author: web_XL
 * @Date: 2021-07-22 13:31:19
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-22 14:28:20
 * @Description: 
 */

/**
 * 创建 Virtual DOM
 * @param {string} type 类型
 * @param {object | null} props 属性
 * @param  {createElement[]} children 子元素
 * @return {object} Virtual DOM
 */
function createElement (type, props, ...children) {
  // console.log("createElement => ", type, props, children);
  // 1.将文本节点转为 'aaa' => {type:'text',props:{'textContent':'aaa'}}
  // 2.将false true null 剔除掉 不显示
  // 将children在props中备份 那么props中就可以拿到children
  const childElements = [].concat(...children).reduce((pre, child) => {
    if (child !== false && child != true && child != null) {
      if (child instanceof Object) {
        pre.push(child)
      } else { // 文本节点  转化一下
        pre.push(createElement("text", { textContent: child }))
        // return {
        //   type: "text",
        //   props: {
        //     textContent: child
        //   }
        // }
      }
    }
    return pre
  }, [])
  return {
    type,
    props: Object.assign({ children: childElements }, props),
    children: childElements
  }
}

export default createElement