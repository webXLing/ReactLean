
/*
 * @Author: web_XL
 * @Date: 2021-04-11 16:00:12
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 14:45:26
 * @Description:
 */
import React, { Component } from 'react'
// 使用context 进行跨组件通信 分为类组件和函数式组件
// 创建一个 React.createContext()

// 类组件
// Child3.contextType = UserContext
{/* <UserContext.Provider value={this.state}>
<Child></Child>
</UserContext.Provider> */}

// 函数式组件
// function Child2 (params) {
//   return (
//     <UserContext.Consumer>
//       {
//         value => {
//           return (
//             < div >
//               <div>用户名：{value.username}</div>
//               <div>密码：{value.password}</div>
//             </div >
//           )
//         }
//       }
//     </UserContext.Consumer >
//   )
// }

const UserContext = React.createContext({
  username: "---",
  password: "****"
})

class Child2 extends Component {
  render () {
    console.log("this.context--", this.context);
    console.log("this.props--", this.props);

    const { username, password } = this.context
    return (
      <div>
        <div>用户名：{username}</div>
        <div>密码：{password}</div>
        <Child3></Child3>
      </div >
    )
  }
}

class Child3 extends Component {
  render () {
    console.log("Child3 this.context--", this.context);
    console.log("Child3 this.props--", this.props);

    const { username, password } = this.context
    return (
      <div>
        <div>用户名：{username}</div>
        <div>密码：{password}</div>
      </div >
    )
  }
}
Child3.contextType = UserContext
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

Child2.contextType = UserContext

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
