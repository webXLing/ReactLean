/*
 * @Author: web_XL
 * @Date: 2021-04-24 22:06:06
 * @LastEditors: web_XL
 * @LastEditTime: 2021-04-24 22:21:53
 * @Description: 
 */
import React, { Component, PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      arr: [
        {
          "name": "xl1",
          "age": 13
        },
        {
          "name": "xl2",
          "age": 132
        },
        {
          "name": "xl3",
          "age": 113
        }
      ]
    }
  }
  render () {
    return (
      <div>
        <ul>
          {/* {this.state.arr} */}
          {this.state.arr.map((item, index) => {
            return (
              <li key={item.name}>
                {item.name} age:{item.age}
                <button onClick={e => { this.addAge(index) }}>年龄+1</button>
              </li>
            )
          })}
        </ul>
        <button onClick={e => { this.addFn() }}>添加</button>
      </div>
    )
  }

  // shouldComponentUpdate (nextProps, nextSate) {
  //   console.log(nextProps, nextSate);
  //   if (this.state.arr !== nextSate.arr) {
  //     return true
  //   }
  //   return false
  // }

  addFn () {
    let obj = {
      "name": "xl" + Date.now(),
      "age": 12
    }
    // 不推荐的做法 直接改变state
    // 直接修改state 会导致 PureComponent 和shouldComponentUpdate 优化的是有失效  他们都是进行浅层比较
    // this.state.arr.push(obj)
    // this.setState({
    //   arr: this.state.arr
    // })

    // 推荐做法
    let newArr = [...this.state.arr]
    newArr.push(obj)
    this.setState({
      arr: newArr
    })


  }

  addAge (index) {
    let newArr = [...this.state.arr]
    newArr[index].age = newArr[index].age + 1
    this.setState({
      arr: newArr
    })
  }
}
