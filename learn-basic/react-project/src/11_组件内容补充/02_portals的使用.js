/*
 * @Author: web_XL
 * @Date: 2021-05-05 16:05:48
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 16:03:13
 * @Description: 
 */


import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
// createPortal 用于将react dom  渲染到目标节点内
class Home extends PureComponent {
  render () {
    return createPortal(this.props.children,
      document.getElementById('model')
    )
  }
}

export default class App extends PureComponent {

  render () {
    return (
      <div>
        <div>asdas</div>
        <Home >
          <div>inner home</div>
        </Home>

      </div>
    )
  }
}
