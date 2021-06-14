/*
 * @Author: web_XL
 * @Date: 2021-06-14 15:08:04
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-14 15:28:44
 * @Description:
 */

import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '../pages/discover/child-pages/recommend/store'

// 合并拆分的reducer
const reducer = combineReducers({
  recommend: recommendReducer
})

export default reducer