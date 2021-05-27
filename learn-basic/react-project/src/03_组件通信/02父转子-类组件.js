/*
 * @Author: web_XL
 * @Date: 2021-04-08 22:15:30
 * @LastEditors: web_XL
 * @LastEditTime: 2021-04-08 22:59:37
 * @Description:
 */
import React, { Component } from 'react'

class Cpn extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    const { name, age } = this.props
    return <div>Cpn组件{name + "--" + age}</div>
  }

  componentWillUnmount () {
    // 类似于beforedestroy
    console.log("componentWillUnmount 组件被移除");
  }
}
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      num: 1,
      isShow: true,
      name: "XL",
      age: 255
    }
    console.log("constructor");
  }
  render () {
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={e => this.addNum()}>add</button>
        <hr />
        <button onClick={e => this.changeShow()}>changeShow</button>

        {this.state.isShow && <Cpn name={this.state.name} age={this.state.age} />}

      </div>
    )
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
