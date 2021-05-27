/*
 * @Author: web_XL
 * @Date: 2021-05-13 21:48:31
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-13 22:06:49
 * @Description: 
 */
import store from './store/index.js'
import { incAciton, decAciton, addAciton, subAciton } from './store/actionCreators.js'


// 订阅消息
store.subscribe((e) => {
  console.log("subscribe", e, "--", store.getState().num);
})

store.dispatch(incAciton())
store.dispatch(decAciton())
store.dispatch(addAciton(312))
store.dispatch(addAciton(1))
store.dispatch(subAciton(13))

