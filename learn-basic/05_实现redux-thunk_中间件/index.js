/*
 * @Author: web_XL
 * @Date: 2021-05-13 21:48:31
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 16:46:38
 * @Description: 
 */
import store from './store/index.js'
import { incAciton, decAciton, addAciton, subAciton } from './store/actionCreators.js'


// 订阅消息
store.subscribe((e) => {
  console.log("subscribe", e, "--", store.getState().num);
})

// 每次dispatch 都打印  cai
function patchLogging (store) {
  const next = store.dispatch
  function dispatchAndLogging (action) {
    console.log("-----dispatchAndLogging22");

    console.log("dispatch前---:", action);
    next(action)
    console.log("dispatch后---:", store.getState());
  }
  // store.dispatch = dispatchAndLogging

  return dispatchAndLogging
}

// patchLogging(store)


// 分装redux-thunk
// 支持action 为函数
function patchThunkLogging (store) {
  const next = store.dispatch
  function dispatchAndLogging (action) {
    console.log("-----dispatchAndLogging11");
    if (typeof action === "function") {
      action(store.dispatch, store.getState)
    } else {
      next(action)
    }
  }
  // store.dispatch = dispatchAndLogging
  return dispatchAndLogging
}
// patchThunkLogging(store)

function testReduxThunkAction (dispatch, getState) {
  console.log(dispatch, getState);
}


// 封装applyMiddleware
function applyMiddleware (...middleware) {
  middleware.forEach(item => {
    store.dispatch = item(store)
  })
}
// applyMiddleware(patchLogging, patchThunkLogging)
applyMiddleware(patchThunkLogging, patchLogging)


store.dispatch(testReduxThunkAction)

store.dispatch(incAciton())
store.dispatch(decAciton())
store.dispatch(addAciton(312))

