/*
 * @Author: web_XL
 * @Date: 2021-04-11 16:00:12
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 14:36:05
 * @Description:
 */
import React, { Component } from 'react'
import NavBar1 from './navBar2'
import NavBar2 from './navBar'


export default class App extends Component {
  render () {
    return (
      <div>
        <NavBar2
          leftSlot={<div >nav-left</div>}
          centerSlot={<div >nav-center</div>}
          rightSlot={<div >nav-right</div>}>
        </NavBar2>
        <NavBar1>
          <div>nav-left</div>
          <div>nav-center</div>
          <div>nav-right</div>
        </NavBar1>

      </div>
    )
  }
}
