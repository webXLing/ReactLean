/*
 * @Author: web_XL
 * @Date: 2021-04-26 23:14:07
 * @LastEditors: web_XL
 * @LastEditTime: 2021-04-26 23:22:22
 * @Description: 
 */
import React, { PureComponent, createRef } from 'react'

export default class APP extends PureComponent {
  constructor(props) {
    super(props)
    this.elElment = createRef()
    this.elElment2 = null
  }
  render () {
    return (
      <div>
        {/* <div ref="字符串/对象/函数">你好</div> */}
        <div ref="el">你好</div>
        <div ref={this.elElment}>你好</div>
        <div ref={arg => { this.elElment2 = arg }}>你好</div>


        <button onClick={e => { this.changFn() }}>change</button>
      </div>
    )
  }

  changFn () {
    // 不推荐
    this.refs.el.innerHTML = "XL"

    // 推荐
    this.elElment.current.innerHTML = "XL createRef"
    this.elElment2.innerHTML = "XL Fn"
  }

  componentDidMount () {
  }
}
