/*
 * @Author: web_XL
 * @Date: 2021-06-02 22:17:39
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-02 22:20:35
 * @Description:
 */
export default function reducer (preState, action) {
  switch (action.type) {
    case "add":
      return { ...preState, num: preState.num + 1 }
      break;
    case "sub":
      return { ...preState, num: preState.num - 1 }
      break;
    default:
      return preState
  }

}