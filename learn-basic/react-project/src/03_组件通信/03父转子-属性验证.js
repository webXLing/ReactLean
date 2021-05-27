/*
 * @Author: web_XL
 * @Date: 2021-04-08 22:15:30
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 14:32:36
 * @Description:
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Cpn extends Component {

  // static class filed
  // 指定 props 的默认值：
  static defaultProps = {
    name: "PropTypes.string.isRequired1"
  }
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


Cpn.propTypes = {
  name: PropTypes.string.isRequired
}

// 指定 props 的默认值：
// Cpn.defaultProps = {
//   name: "PropTypes.string.isRequired"
// }


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
        <Cpn />

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
