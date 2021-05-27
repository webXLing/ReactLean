/*
 * @Author: web_XL
 * @Date: 2021-04-27 22:42:34
 * @LastEditors: web_XL
 * @LastEditTime: 2021-04-27 23:08:01
 * @Description: 
 */
import React, { PureComponent, createContext } from 'react'

const UserContext = createContext({ // 默认值
  name: "moren",
  age: "moren",
  job: "moren"
})

class Child extends PureComponent {
  render () {
    return (
      <UserContext.Consumer>
        {
          use => {
            return (
              <div>
                {`姓名${use.name} ,年龄${use.age} ，工作${use.job} `}
              </div>
            )
          }
        }
      </UserContext.Consumer>

    )
  }
}



export default class App extends PureComponent {
  render () {
    return (
      <UserContext.Provider value={{
        name: "xl9",
        age: "32",
        job: "xl"
      }}>
        <Child ></Child>
      </UserContext.Provider>
    )
  }
}
