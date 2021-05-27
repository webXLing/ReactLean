/*
 * @Author: web_XL
 * @Date: 2021-05-23 16:42:03
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-23 16:49:00
 * @Description: 
 */
import React, { PureComponent } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import { Link, BrowserRouter, Route } from 'react-router-dom'


export default class App extends PureComponent {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Link to="/home">Home</Link>
          <Link to="/about">about</Link>
          {/* exact 路径全匹配 */}
          <Route exact path="/home" >
            <Home></Home>
          </Route>
          <Route exact path="/about" component={About}>
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}
