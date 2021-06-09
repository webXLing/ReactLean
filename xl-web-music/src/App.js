/*
 * @Author: web_XL
 * @Date: 2021-06-08 16:49:33
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-09 10:44:21
 * @Description: 
 */
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import myRoutes from '@/router'

import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'


export default memo(function App () {
  return (
    <HashRouter>
      <AppHeader></AppHeader>
      {renderRoutes(myRoutes)}
      <AppFooter></AppFooter>
    </HashRouter>
  )
})
