/*
 * @Author: web_XL
 * @Date: 2021-04-13 23:06:10
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 14:57:10
 * @Description:
 */
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
      msg: "old"
    }
  }
  render () {
    return (
      <div>
        <h2>setSate</h2>
        <h2>1.生命周期 和 合成事件中是异步的</h2>
        <h2>2.定时器 和 原生dom事件是同步的</h2>

        <h2>{this.state.msg}</h2>
        <button onClick={e => this.increase()}>change异步</button>
        <button onClick={e => this.increase2()}>change同步</button>
        <button id="btn">change同步</button>

      </div>
    )
  }

  componentDidMount () {
    document.getElementById("btn").addEventListener("click", () => {
      this.setState({
        msg: "XL"
      })
      console.log(this.state.msg); // XL
    })
  }
  // 异步
  increase () {
    // 1.生命周期 和 合成事件中是异步的
    this.setState({
      msg: "XL"
    }, () => {
      console.log("更新了 this.state.msg", this.state.msg); // xl
    })
    console.log("this.state.msg", this.state.msg); // old
  }
  // 同步
  increase2 () {
    // 2.定时器 和 原生dom事件是同步的
    setTimeout(() => {
      this.setState({
        msg: "XL"
      })
      console.log(this.state.msg); // XL
    }, 0);

  }
}
