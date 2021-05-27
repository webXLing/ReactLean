/*
 * @Author: web_XL
 * @Date: 2021-05-13 21:57:26
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-23 15:16:20
 * @Description:
 */

import { reducer as counterReducer } from './counter/index'
import { reducer as homeReducer } from './home/index'
import { combineReducers } from 'redux'


// 拆分reducer
// const initalCounter = {
//   num: 10
// }
// function counterReducer (oldStore = initalCounter, action) {
//   switch (action.type) {
//     case INCREAMENT:
//       // 这样处理的原因是  保证 不直接修改store 保证reducer 为纯函数
//       return { ...oldStore, num: oldStore.num + 1 }
//       break;

//     case DECREAMENT:
//       return { ...oldStore, num: oldStore.num - 1 }
//       break;


//     case ADD:
//       return { ...oldStore, num: oldStore.num + action.number }
//       break;

//     case SUB:
//       return { ...oldStore, num: oldStore.num - action.number }
//       break;

//     default:
//       return oldStore
//       break;
//   }
// }

// const initalHome = {
//   bannerList: [],
//   orderList: []
// }
// function homeReducer (oldStore = initalHome, action) {
//   switch (action.type) {
//     case ADD_BANNER:
//       return { ...oldStore, bannerList: action.bannerList }
//       break;

//     case ADD_ORDER:
//       return { ...oldStore, orderList: action.orderList }
//       break;

//     default:
//       return oldStore
//       break;
//   }
// }
// function reducer (oldStore = {}, action) {
//   console.log("reducer action", action);
//   return {
//     counterInfo: counterReducer(oldStore.counterInfo, action),
//     homeInfo: homeReducer(oldStore.homeInfo, action),
//   }
// }
const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer
})

// 未拆封 reducer

// const initialStore = { // 默认store
//   num: 10,
//   bannerList: [],
//   orderList: []
// }

// // reducer
// function reducer (oldStore = initialStore, action) {
//   console.log("reducer action", action);
//   switch (action.type) {
//     case INCREAMENT:
//       // 这样处理的原因是  保证 不直接修改store 保证reducer 为纯函数
//       return { ...oldStore, num: oldStore.num + 1 }
//       break;

//     case DECREAMENT:
//       return { ...oldStore, num: oldStore.num - 1 }
//       break;


//     case ADD:
//       return { ...oldStore, num: oldStore.num + action.number }
//       break;

//     case SUB:
//       return { ...oldStore, num: oldStore.num - action.number }
//       break;

//     case ADD_BANNER:
//       return { ...oldStore, bannerList: action.bannerList }
//       break;

//     case ADD_ORDER:
//       return { ...oldStore, orderList: action.orderList }
//       break;
//     default:
//       return oldStore
//       break;
//   }
// }


export default reducer