/*
 * @Author: web_XL
 * @Date: 2020-10-07 12:19:16
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-22 14:11:51
 * @Description: 
 */
export default function createElement (type, props, ...children) {
  const childElements = [].concat(...children).reduce((result, child) => {
    if (child !== false && child !== true && child !== null) {
      if (child instanceof Object) {
        result.push(child)
      } else {
        result.push(createElement("text", { textContent: child }))
      }
    }
    return result
  }, [])
  return {
    type,
    props: Object.assign({ children: childElements }, props),
    children: childElements
  }
}
