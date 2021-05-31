/*
 * @Author: web_XL
 * @Date: 2021-05-23 16:42:03
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-29 11:31:59
 * @Description: 
 */
import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {
  render () {
    console.log(this.props.match);
    let { match } = this.props
    return (
      <div>
        Detail:{match.params.id}
      </div>
    )
  }
}
