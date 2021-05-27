/*
 * @Author: web_XL
 * @Date: 2021-05-13 21:57:18
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-22 22:15:18
 * @Description:
 */
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
/**
 * redux-thunk 是为了解决actions 能够异步执行 能够支持请求 将action变为函数
 */
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer.js'
import saga from './saga'


// import { createStore, applyMiddleware, compose } from 'redux';

// + const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// + const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
// - const store = createStore(reducer, /* preloadedState, */ compose(
//     applyMiddleware(...middleware)
//   ));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// createSagaMiddleware 是一个函数 创建一个中间件
const SagaMiddleware = new createSagaMiddleware()

// 添加中间件
const storeEnhance = applyMiddleware(thunkMiddleware, SagaMiddleware)

// const store = createStore(reducer, storeEnhance)
const store = createStore(reducer, composeEnhancers(storeEnhance))

// sage 是一个生成器函数 去拦截action 
SagaMiddleware.run(saga)

export default store
