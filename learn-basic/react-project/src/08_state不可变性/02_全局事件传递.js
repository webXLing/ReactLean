/*
 * @Author: web_XL
 * @Date: 2021-04-26 22:31:59
 * @LastEditors: web_XL
 * @LastEditTime: 2021-04-26 22:41:05
 * @Description: 
 */
import React, { Component, PureComponent } from 'react'
import { EventEmitter } from 'events'
const EventHub = new EventEmitter()

class Cmp1 extends PureComponent {
  render () {
    return (
      <div>
        <div>Cmp1</div>
        <button onClick={e => { this.emitHandel() }}>emit</button>
      </div>
    )
  }
  emitHandel () {
    EventHub.emit("emitName", "点击了", 123)
  }
}

class Cmp2 extends PureComponent {
  componentDidMount () {
    EventHub.addListener("emitName", this.emitHandel)
  }
  componentWillUnmount () {
    EventHub.removeListener("emitName", this.emitHandel)//去除某个
    // EventHub.removeListener("emitName")//去除全部
  }

  emitHandel (...arg) {
    console.log("接收到了", arg);
  }
  render () {
    return (
      <div>
        <div>Cmp2</div>
      </div>
    )
  }

}

export default class App extends Component {
  render () {
    return (
      <div>
        <Cmp1></Cmp1>
        <Cmp2></Cmp2>
      </div>
    )
  }
}
