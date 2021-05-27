/*
 * @Author: web_XL
 * @Date: 2021-04-11 16:00:26
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 14:34:34
 * @Description:
 */
import React, { Component } from 'react'

export default class navBar extends Component {
  render () {
    console.log(" this.props", this.props);
    const { leftSlot, centerSlot, rightSlot } = this.props
    return (
      <div className="nav-box">
        <div className="nav-left">{leftSlot}</div>
        <div className="nav-center">{centerSlot}</div>
        <div className="nav-right">{rightSlot}</div>
      </div>
    )
  }
}
