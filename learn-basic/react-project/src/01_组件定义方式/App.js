/*
 * @Author: web_XL
 * @Date: 2021-03-31 21:44:42
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 14:24:13
 * @Description:
 */
// alt + shift + f 格式化 
// import React, { Component } from 'react'
// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       txt: "类组件"
//     }
//   }

//   render () {
//     return (
//       <div>{this.state.txt}</div>
//     )
//   }
// }


import React from 'react'
// 返回 react-component  数组  字符串 null  undefined

export default function App (params) {
  return (
    <div>
      <div>
        <h2>null{null}</h2>
        <h2>undefined{undefined}</h2>
        <h2>函数式组件</h2>
        <h2>1.没有this</h2>
        <h2>1.无法储存状态 没有内部状态</h2>
      </div>
      [
      <h2>返回数组</h2>,
      <h2>返回数组</h2>,
      <h2>返回数组</h2>,
      <h2>返回数组</h2>,
      ]
    </div>
  )
}

