/*
 * @Author: web_XL
 * @Date: 2021-05-13 21:57:26
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-22 22:15:59
 * @Description:
 */
import {

  ADD_BANNER,
  ADD_ORDER
} from './constants.js'

// 拆分reducer

const initalHome = {
  bannerList: [],
  orderList: []
}
function homeReducer (oldStore = initalHome, action) {
  switch (action.type) {
    case ADD_BANNER:
      return { ...oldStore, bannerList: action.bannerList }
      break;

    case ADD_ORDER:
      return { ...oldStore, orderList: action.orderList }
      break;

    default:
      return oldStore
      break;
  }
}


export default homeReducer