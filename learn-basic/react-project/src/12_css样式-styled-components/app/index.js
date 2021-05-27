/*
 * @Author: web_XL
 * @Date: 2021-05-05 20:40:22
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 16:11:00
 * @Description:
 */
import React, { PureComponent } from 'react'
import Header from '../header'

/**
 * 1.props 可以穿透
 * 2.attrs 的使用
 * 3.传入state 作为props的属性
 * 4.可以继承 ***
 * 5.可以设置主题-全局共享 *** 
 */

import { StyledCompoent } from './style'

import styled, { ThemeProvider } from 'styled-components'

/**
 * 4.可以继承 ***
 */
const ComBtn = styled.button`
  padding:10px 20px;
  background-color:#eee;
  color:bule;
`
const MyBtn = styled(ComBtn)`
  color:red;
`

export default class App extends PureComponent {

  render () {
    return (
      <ThemeProvider theme={{ backgroudColor: "yellow" }}>
        <StyledCompoent>
          <div className="txt">asdajsdkas
            <span className="txt active">span</span>
            <p className="txt2">12</p>
          </div>
          <ComBtn>btn</ComBtn>
          <MyBtn>btn</MyBtn>
          <Header></Header>
        </StyledCompoent>
      </ThemeProvider>
    )
  }
}
