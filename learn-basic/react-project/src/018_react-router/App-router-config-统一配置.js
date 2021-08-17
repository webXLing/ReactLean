/*
 * @Author: web_XL
 * @Date: 2021-05-23 16:42:03
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-08 14:17:10
 * @Description: 
 */
import React, { PureComponent } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import User from './pages/User'
import NoMatch from './pages/NoMatch'
import Login from './pages/Login'
import Detail from './pages/Detail'
import Detail2 from './pages/Detail2'
import { renderRoutes } from 'react-router-config'
import myRoutes from '../router'
import { Link, BrowserRouter, Route, NavLink, Switch, withRouter } from 'react-router-dom'
import Detail3 from './pages/Detail3'
console.log("myRoutes", myRoutes);


class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      info: {
        name: "xl"
      }
    }
  }
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
        <NavLink to="/detail2?name=xl&age=23">detail2</NavLink>
        <NavLink to={{
          pathname: "/detail3",
          search: "word=abc",
          state: this.state.info
        }}>detail3</NavLink>






        {/* exact 路径全匹配 */}
        {/* 动态路由 */}

        {/* Switch 唯一匹配 排他 定义组件和路由的映射关系 */}
        {/* <Switch>
          <Route exact path="/home" >
            <Home></Home>
          </Route>
          <Route exact path="/about" component={About}>
          </Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/detail2" component={Detail2}></Route>
          <Route path="/detail3" component={Detail3}></Route>
          <Route path="/:userid" component={User}></Route>
          <Route component={NoMatch}></Route>
        </Switch> */}

        {renderRoutes(myRoutes)}
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