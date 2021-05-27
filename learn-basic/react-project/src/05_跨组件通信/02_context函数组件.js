/*
 * @Author: web_XL
 * @Date: 2021-04-11 16:00:12
 * @LastEditors: web_XL
 * @LastEditTime: 2021-04-11 16:46:34
 * @Description:
 */
import React, { Component } from 'react'

const UserContext = React.createContext({
  username: "---",
  password: "****"
})

// class Child2 extends Component {
//   render () {
//     console.log(this.context);
//     const { username, password } = this.context
//     return (
//       <div>
//         <div>用户名：{username}</div>
//         <div>密码：{password}</div>
//       </div >
//     )
//   }
// }
function Child2 (params) {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            < div >
              <div>用户名：{value.username}</div>
              <div>密码：{value.password}</div>
            </div >
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
        <Child></Child>
      </UserContext.Provider>
    )
  }
}


