/*
 * @Author: web_XL
 * @Date: 2021-05-05 16:05:48
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-05 17:26:46
 * @Description: 
 */


import React, { PureComponent, Fragment } from 'react'
import { createPortal } from 'react-dom'
class Home extends PureComponent {
  render () {
    return createPortal(this.props.children,
      document.getElementById('model')
    )
  }
}

/**
 * 段语法 不能添加任何属性 
 */
class Columns extends PureComponent {
  render () {
    return (

      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}

class Columns2 extends PureComponent {
  render () {
    return (
      <Fragment>
        <td>Hello</td>
        <td>World</td>
      </Fragment>
    );
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
        <Columns></Columns>
        <Columns2></Columns2>
      </div>
    )
  }
}
