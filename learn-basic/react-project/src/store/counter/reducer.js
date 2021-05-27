/*
 * @Author: web_XL
 * @Date: 2021-05-13 21:57:26
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-22 22:13:55
 * @Description:
 */
import {
  INCREAMENT,
  DECREAMENT,
  ADD,
  SUB,
} from './constants.js'

// 拆分reducer
const initalCounter = {
  num: 10
}
function counterReducer (oldStore = initalCounter, action) {
  switch (action.type) {
    case INCREAMENT:
      // 这样处理的原因是  保证 不直接修改store 保证reducer 为纯函数
      return { ...oldStore, num: oldStore.num + 1 }
      break;

    case DECREAMENT:
      return { ...oldStore, num: oldStore.num - 1 }
      break;


    case ADD:
      return { ...oldStore, num: oldStore.num + action.number }
      break;

    case SUB:
      return { ...oldStore, num: oldStore.num - action.number }
      break;

    default:
      return oldStore
      break;
  }
}
export default counterReducer