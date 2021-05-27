/*
 * @Author: web_XL
 * @Date: 2021-05-09 20:06:31
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-10 21:47:34
 * @Description:
 */
import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default class MyTransitionGroup extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      lsit: [
        "小红",
        "小明",
        "xl",
        "小才红",
      ]
    }
  }
  render () {
    return (
      <div>
        <TransitionGroup>
          {this.state.lsit.map((item, index) => {
            return (
              <CSSTransition key={index}
                classNames="item"
                timeout={1000}>
                <div>{item}</div>
              </CSSTransition>
            )
          })}

        </TransitionGroup>
        <button onClick={e => { this.addFn() }}>add</button>
      </div >



    )
  }

  addFn () {
    this.setState({
      lsit: [...this.state.lsit, "new"]
    })
  }
}
