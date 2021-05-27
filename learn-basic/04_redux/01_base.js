/*
 * @Author: web_XL
 * @Date: 2021-05-13 21:30:15
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-13 21:41:30
 * @Description:
 */
// nodejs 低版本不支持es6 模块化
// nodejs 是commonjs 的实现

const redux = require("redux")

// reducer
function reducer (oldStore = initialStore, action) {
  switch (action.type) {
    case "INCREAMENT":
      // 这样处理的原因是  保证 不直接修改store 保证reducer 为纯函数
      return { ...oldStore, num: oldStore.num + 1 }
      break;

    case "DECREAMENT":
      return { ...oldStore, num: oldStore.num - 1 }
      break;


    case "ADD":
      return { ...oldStore, num: oldStore.num + action.number }
      break;

    case "SUB":
      return { ...oldStore, num: oldStore.num - action.number }
      break;
    default:
      return oldStore
      break;
  }
}


// store
const initialStore = { // 默认store
  num: 10
}

const store = redux.createStore(reducer)

// 订阅消息
store.subscribe((e) => {
  console.log("subscribe", e, "--", store.getState().num);
})

// actions
const action1 = { type: "ADD", number: 3 }
const action2 = { type: "SUB", number: 4 }
const action3 = { type: "INCREAMENT" }
const action4 = { type: "DECREAMENT" }

// 派发action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
