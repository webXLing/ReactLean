/*
 * @Author: web_XL
 * @Date: 2021-04-27 22:42:34
 * @LastEditors: web_XL
 * @LastEditTime: 2021-04-27 22:53:56
 * @Description: 
 */
import React, { PureComponent } from 'react'

class Child extends PureComponent {
  render () {
    return (
      <div>
        {`姓名${this.props.name} ,年龄${this.props.age} ，工作${this.props.job} `}
      </div>
    )
  }
}

function enhance (params) {
  return props => {
    return <Child {...props} job="code"></Child>
  }
}
const NewChild = enhance(Child)

export default class App extends PureComponent {
  render () {
    return (
      <div>
        <Child name="xl" age="23"></Child>
        <NewChild name="xl" age="23"></NewChild>
      </div>
    )
  }
}
