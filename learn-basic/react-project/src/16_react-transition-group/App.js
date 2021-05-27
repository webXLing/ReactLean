/*
 * @Author: web_XL
 * @Date: 2021-05-09 20:06:01
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-10 21:42:51
 * @Description:
 */
import React, { PureComponent } from 'react'
import MyCSSTransition from './transiton/MyCSSTransition'
import MySwitchTransition from './transiton/SwitchTransition'
import MyTransitionGroup from './transiton/TransitionGroup'



import './transiton/transition.css'

export default class App extends PureComponent {
  render () {
    return (
      <div>
        {/* <MyCSSTransition></MyCSSTransition> */}
        {/* <MySwitchTransition></MySwitchTransition> */}
        <MyTransitionGroup></MyTransitionGroup>
      </div>
    )
  }
}
