/*
 * @Author: web_XL
 * @Date: 2021-05-23 16:42:03
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-29 11:02:12
 * @Description: 
 */
import React, { PureComponent } from 'react'

export default class About extends PureComponent {
  render () {
    return (
      <div>
        About
        <button onClick={e => { this.clFn() }}></button>
      </div>
    )
  }
  clFn () {
    console.log(this.props.history);
    console.log(this.props.location);
    console.log(this.props.match);

  }
}
