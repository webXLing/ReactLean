/*
 * @Author: web_XL
 * @Date: 2021-04-08 22:15:30
 * @LastEditors: web_XL
 * @LastEditTime: 2021-04-20 23:04:06
 * @Description:
 */
import React, { Component } from 'react'

class Cpn extends Component {
  render () {
    console.log("Cpn 子组件 render");
    return <div>Cpn组件</div>
  }

  componentWillUnmount () {
    // 类似于beforedestroy
    console.log("componentWillUnmount 组件被移除");
  }
}

function Header (params) {
  console.log("Header render");
  return (
    <h1>Header</h1>
  )
}
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      num: 1,
      isShow: false
    }
    console.log("constructor");
  }
  render () {
    console.log("render");
    return (
      <div>
        <Header></Header>
        <p>{this.state.num}</p>
        <button onClick={e => this.addNum()}>add</button>
        <hr />
        <button onClick={e => this.changeShow()}>changeShow</button>

        {this.state.isShow && <Cpn />}

      </div>
    )
  }

  // 组件能否被更新 render
  shouldComponentUpdate (nextProps, nextState) {
    // 新的  老的
    if (this.state.num !== nextState.num) {//true 希望被更新
      return true
    }
    return false
  }

  componentDidMount () {
    console.log("componentDidMount dom挂载")
  }

  componentDidUpdate () {
    console.log("componentDidUpdate dom更新")
  }

  addNum () {
    this.setState({
      num: this.state.num + 1
    })
  }

  changeShow () {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
