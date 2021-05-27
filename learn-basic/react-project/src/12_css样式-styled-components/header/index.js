/*
 * @Author: web_XL
 * @Date: 2021-05-05 20:40:22
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 16:09:02
 * @Description:
 */
import React, { PureComponent } from 'react'
import styled from 'styled-components'

/**
 * 1.props 可以穿透
 * 2.attrs 的使用
 * 3.传入state 作为props的属性
 */

const Styledcpm = styled.input.attrs({
  placeholder: "xl",
  bColer: "red"
})`

  font-size:${props => `${props.fSizs}px`}; 
`
export default class header extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      fSizs: 30
    }
  }
  render () {
    return (
      <div>
        <Styledcpm fSizs={this.state.fSizs}></Styledcpm>
      </div>
    )
  }
}
