/*
 * @Author: web_XL
 * @Date: 2021-04-11 16:00:12
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 14:54:38
 * @Description:
 */
import React, { Component } from 'react'

const UserContext = React.createContext({
  username: "---",
  password: "****"
})

const ThemeContext = React.createContext({
  color: "red"
})
// 类组件 用多个context
class ChildCl extends Component {
  render () {
    console.log("ChildCl this.context--", this.context);
    console.log("ChildCl this.props--", this.props);

    return (
      <div>
        <UserContext.Consumer>
          {
            value => {
              return (
                <ThemeContext.Consumer>
                  {
                    theme => {
                      return (
                        < div >
                          <div>用户名：{value.username}</div>
                          <div>密码：{value.password}</div>
                          <div>颜色：{theme.color}</div>
                        </div >
                      )
                    }
                  }
                </ThemeContext.Consumer>
              )
            }
          }
        </UserContext.Consumer >
      </div >
    )
  }
}

function Child2 (params) {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <ThemeContext.Consumer>
              {
                theme => {
                  return (
                    < div >
                      <div>用户名：{value.username}</div>
                      <div>密码：{value.password}</div>
                      <div>颜色：{theme.color}</div>
                    </div >
                  )
                }
              }
            </ThemeContext.Consumer>


          )
        }
      }
    </UserContext.Consumer >
  )
}

function Child (params) {
  return (
    <div>
      <Child2></Child2>
      <ul>
        <li>li1</li>
        <li>li2</li>
        <li>li3</li>
      </ul>
    </div>
  )
}

// Child2.contextType = UserContext 

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "xl",
      password: "123456"
    }
  }
  render () {
    return (
      <UserContext.Provider value={this.state}>
        <ThemeContext.Provider value={{ color: "blue" }}>
          <Child></Child>
          <hr />
          <div>asdasd</div>
          <ChildCl></ChildCl>
        </ThemeContext.Provider>
      </UserContext.Provider>
    )
  }
}
