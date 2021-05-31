/*
 * @Author: web_XL
 * @Date: 2021-05-23 16:42:03
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-31 21:32:18
 * @Description: 通过search传递参数
 */
import React, { PureComponent } from 'react'

export default class Detail2 extends PureComponent {
  render () {
    console.log(this.props.match);
    let { location } = this.props
    console.log("location", location);
    return (
      <div>
        Detail2:{location.search}
      </div>
    )
  }
}
