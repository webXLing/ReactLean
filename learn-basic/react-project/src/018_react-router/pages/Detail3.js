/*
 * @Author: web_XL
 * @Date: 2021-05-23 16:42:03
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-31 21:31:40
 * @Description: 通过state传递参数
 */
import React, { PureComponent } from 'react'

export default class Detail3 extends PureComponent {
  render () {
    let { location } = this.props
    console.log("location", location);
    return (
      <div>
        Detail2:{location.state.name}
      </div>
    )
  }
}
