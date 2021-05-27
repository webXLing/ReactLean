/*
 * @Author: web_XL
 * @Date: 2021-04-13 23:06:10
 * @LastEditors: web_XL
 * @LastEditTime: 2021-04-13 23:23:00
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
        <h4>setSate 通过 Object.assign({ },this.state,newState) 所以多次调用会被覆盖</h4>
        <h4>setSate 可以通过函数的形式每次被执行 实现累加</h4>
        <h2>{this.state.num}</h2>
        <button onClick={e => this.increase()}>add-普通</button>
        <button onClick={e => this.increase2()}>add-函数</button>

      </div>
    )
  }

  componentDidMount () {

  }
  // 异步
  increase () {
    // 被合并了
    this.setState({
      num: this.state.num + 1
    })
    this.setState({
      num: this.state.num + 1
    })
    this.setState({
      num: this.state.num + 1
    })
  }

  increase2 () {
    // 被合并了 但是每次都执行了函数
    this.setState((preState, props) => {
      return {
        num: preState.num + 1
      }
    })
    this.setState((preState, props) => {
      return {
        num: preState.num + 1
      }
    })
    this.setState((preState, props) => {
      return {
        num: preState.num + 1
      }
    })

  }

}
