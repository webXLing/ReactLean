/*
 * @Author: web_XL
 * @Date: 2021-04-11 16:00:26
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 14:35:32
 * @Description:
 */
import React, { Component } from 'react'

export default class navBar extends Component {
  render () {
    console.log("this.props.children", this.props.children);
    return (
      <div className="nav-box">
        <div className="nav-left">{this.props.children[0]}</div>
        <div className="nav-center">{this.props.children[1]}</div>
        <div className="nav-right">{this.props.children[2]}</div>
      </div>
    )
  }
}
