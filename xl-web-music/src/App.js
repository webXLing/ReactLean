/*
 * @Author: web_XL
 * @Date: 2021-06-08 16:49:33
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-14 15:14:14
 * @Description: 
 */
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import myRoutes from '@/router'

import store from '@/store/index'

import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'


export default memo(function App () {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader></AppHeader>
        {renderRoutes(myRoutes)}
        <AppFooter></AppFooter>
      </HashRouter>
    </Provider>
  )
})
