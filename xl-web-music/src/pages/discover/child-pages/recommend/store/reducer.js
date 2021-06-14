/*
 * @Author: web_XL
 * @Date: 2021-06-14 15:20:46
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-14 15:56:04
 * @Description:
 */
import * as actionTypes from './constants'

const initalState = {
  topBanners: []
}

function reducer (preState = initalState, action) {
  switch (action.type) {
    case actionTypes.CHANG_BANNER:
      return { ...preState, topBanners: action.topBanners }
    default:
      return preState
      break;
  }

}
export default reducer