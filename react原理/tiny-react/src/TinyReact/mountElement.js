/*
 * @Author: web_XL
 * @Date: 2021-07-22 15:09:59
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-23 11:23:54
 * @Description:
 */
import mountNativeElement from './mountNativeElement'
import isFunction from './isFunction'
import mountComponent from './mountComponent'


export default function mountElement (virtualDOM, container) {
  if (isFunction(virtualDOM)) {
    // component
    mountComponent(virtualDOM, container)
  } else {
    // nativeElement
    mountNativeElement(virtualDOM, container)
  }
}