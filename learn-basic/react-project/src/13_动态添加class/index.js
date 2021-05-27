/*
 * @Author: web_XL
 * @Date: 2021-05-06 20:54:14
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-06 20:59:53
 * @Description:rpc
 */
import React, { PureComponent } from 'react'
import classNames from 'classnames'

export default class App extends PureComponent {
  render () {
    let isBar = true
    return (
      <div>
        {/* 原生react */}
        <h2 className="foo bar">1</h2>
        <h2 className={"foo" + (isBar ? " bar" : "")}>1</h2>
        <h2 className={["foo", isBar ? " bar" : ""].join(" ")}>1</h2>

        {/* classnames */}
        <h2 className={classNames("foo", [{ "bar": isBar }])}>1</h2>
        <h2 className={classNames("foo", { "bar": isBar })}>1</h2>


      </div>
    )
  }
}

