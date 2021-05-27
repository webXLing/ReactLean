/*
 * @Author: web_XL
 * @Date: 2021-04-27 22:42:34
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-05 15:21:54
 * @Description: 
 */
import React, { PureComponent, createContext } from 'react'

const UserContext = createContext({ // 默认值
  name: "moren",
  age: "moren",
  job: "moren"
})

function enhance (Wrapper) {
  const res = props => {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <Wrapper {...props} {...user}></Wrapper>
          }
        }
      </UserContext.Consumer>
    )
  }
  // 修改detools 里面的组件名称
  res.displayName = "EnhanceClass"
  return res
}

class Child extends PureComponent {
  render () {
    return (
      <div>
        {`姓名${this.props.name} ,年龄${this.props.age} ，工作${this.props.job} `}
      </div>
    )
  }
}

// class Child extends PureComponent {
//   render () {
//     return (
//       <UserContext.Consumer>
//         {
//           use => {
//             return (
//               <div>
//                 {`姓名${use.name} ,年龄${use.age} ，工作${use.job} `}
//               </div>
//             )
//           }
//         }
//       </UserContext.Consumer>

//     )
//   }
// }

const NewChild = enhance(Child)

export default class App extends PureComponent {
  render () {
    return (
      <UserContext.Provider value={{
        name: "xl9",
        age: "32312312",
        job: "xl"
      }}>
        <Child></Child>
        <NewChild></NewChild>
      </UserContext.Provider>
    )
  }
}
