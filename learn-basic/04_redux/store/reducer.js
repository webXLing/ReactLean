/*
 * @Author: web_XL
 * @Date: 2021-05-13 21:57:26
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-13 22:01:28
 * @Description:
 */
import {
  INCREAMENT,
  DECREAMENT,
  ADD,
  SUB
} from './constants.js'



const initialStore = { // 默认store
  num: 10
}

// reducer
function reducer (oldStore = initialStore, action) {
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


export default reducer