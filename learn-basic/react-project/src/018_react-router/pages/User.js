/*
 * @Author: web_XL
 * @Date: 2021-05-23 16:42:03
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-29 10:46:09
 * @Description: 
 */
import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'

export default class User extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }
  render () {
    const { isLogin } = this.state
    console.log("isLogin", isLogin);
    return (
      <div>
        User {isLogin}
        {isLogin ? (
          <div>xl 你好</div>
        ) : <Redirect to="/login" />}
      </div>
    )
  }
}
