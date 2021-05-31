/*
 * @Author: web_XL
 * @Date: 2021-05-23 16:42:03
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-31 22:19:49
 * @Description: 
 */
import React, { PureComponent } from 'react'
import { matchRoutes, renderRoutes } from 'react-router-config'
// import myRoutes from '../../router'

import { Link, BrowserRouter, Route, NavLink, Switch, withRouter } from 'react-router-dom'

export function About1 (params) {
  return (
    <div>天气</div>
  )
}

export function About2 (params) {
  return (
    <div>新闻</div>
  )
}

export function About3 (params) {
  return (
    <div>默认</div>
  )
}

export default class About extends PureComponent {
  render () {
    // props 中的route 之所以存在是应为这个组件是由renderRoutes 渲染出来的 添加上的属性 ！！！
    console.log(this.props.route);
    // matchRoutes 这个方法传入route数组 和你想查找的路径
    // 它会匹配出来
    const matchs = matchRoutes(this.props.route.routes, "/about")
    console.log("matchs", matchs);
    return (
      <div>
        About
        <button onClick={e => { this.clFn() }}></button>
        <NavLink to="/about/weather">查看天气</NavLink>
        <hr></hr>
        <NavLink to="/about/news">查看新闻</NavLink>

        {/* <Switch>
          <Route exact path="/about" component={About3}></Route>
          <Route path="/about/weather" component={About1}></Route>
          <Route path="/about/news" component={About2}></Route>
        </Switch> */}
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
  clFn () {
    console.log(this.props.history);
    console.log(this.props.location);
    console.log(this.props.match);
  }
}
