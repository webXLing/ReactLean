/*
 * @Author: web_XL
 * @Date: 2021-05-13 22:18:07
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-18 20:43:13
 * @Description:
 */
import React, { PureComponent } from 'react'

import Home6 from './pages/Home6-使用redux-saga'

import { StoreContext } from '../utils/context'
import store from '../store/index'
import { Provider } from 'react-redux'


export default class App extends PureComponent {
  render () {
    return (
      <div>

        <StoreContext.Provider value={store}>
          App
        </StoreContext.Provider>

        <hr></hr>

        <Provider store={store}>
          <Home6></Home6>

        </Provider>

      </div>

    )
  }
}
