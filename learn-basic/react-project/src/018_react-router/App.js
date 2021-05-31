/*
 * @Author: web_XL
 * @Date: 2021-05-23 16:42:03
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-29 11:34:08
 * @Description: 
 */
import React, { PureComponent } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import User from './pages/User'
import NoMatch from './pages/NoMatch'
import Login from './pages/Login'

import Detail from './pages/Detail'


import { Link, BrowserRouter, Route, NavLink, Switch, withRouter } from 'react-router-dom'


class App extends PureComponent {
  render () {
    return (
      <div>

        <button onClick={e => { this.clFn() }}>app 去 about</button>
        <Link to="/home">Home</Link>
        <Link to="/about">about</Link>
        {/* exact 路径全匹配 */}
        {/* activeClassName 激活态添加的classname */}
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/user">user</NavLink>
        <NavLink to="/detail/123123">detail</NavLink>




        {/* exact 路径全匹配 */}

        {/* Switch 唯一匹配 排他 */}
        <Switch>
          <Route exact path="/home" >
            <Home></Home>
          </Route>
          <Route exact path="/about" component={About}>
          </Route>
          <Route path="/login" component={Login}></Route>

          {/* 动态路由 */}
          <Route path="/detail/:id" component={Detail}></Route>

          <Route path="/:userid" component={User}></Route>


          <Route component={NoMatch}></Route>
        </Switch>
      </div>
    )
  }

  clFn () {
    // 只有被 Route 渲染出来的组件才会传入history的方法
    this.props.history.push("/about")
  }
}

// 用这个高姐组件给app传入history 等props
export default withRouter(App)