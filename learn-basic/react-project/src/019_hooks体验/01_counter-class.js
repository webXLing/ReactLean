/*
 * @Author: web_XL
 * @Date: 2021-06-01 21:42:07
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-01 21:51:51
 * @Description:
 */
import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  render () {
    return (
      <div>
        <div>counter:{this.state.counter}</div>
        <button onClick={e => this.increase()}>add</button>
        <button onClick={e => this.decrease()}>sub</button>

      </div>
    )
  }
  increase () {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrease () {
    this.setState({
      counter: this.state.counter - 1
    })
  }
}
