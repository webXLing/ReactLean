/*
 * @Author: web_XL
 * @Date: 2021-05-09 20:06:31
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-10 21:33:36
 * @Description:
 */
import React, { PureComponent } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'


export default class MySwitchTransition extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }
  render () {
    const { show } = this.state

    // unmountOnExit 退出时不挂载dom
    return (
      <div>
        <SwitchTransition mode="out-in">

          <CSSTransition
            key={show ? "on" : "off"}
            classNames="btns"
            timeout={1000}
          >
            <button onClick={e => this.setState({ show: !show })}>{show ? "on" : "off"}</button>
          </CSSTransition>
        </SwitchTransition>

      </div>
    )
  }
}
