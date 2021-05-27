/*
 * @Author: web_XL
 * @Date: 2021-05-05 16:05:48
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-05 16:13:11
 * @Description: 
 */


import React, { PureComponent, createRef, forwardRef } from 'react'

class Home extends PureComponent {
  render () {
    return (
      <div>
        home
      </div>
    )
  }
}
// function Other (params) {
//   return <p>p</p>
// }
/**
 * 函数式组件没有 不能使用refs 需要用高姐组件forwardRef处理
 */
const Other = forwardRef(
  function Other (params, ref) {
    return <p ref={ref}>p</p>
  }
)
export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.hRef = createRef()
    this.homeRef = createRef()
    this.pRef = createRef()


  }
  render () {
    return (
      <div>
        <h2 ref={this.hRef}>h2</h2>
        <Home ref={this.homeRef}></Home>
        <Other ref={this.pRef}></Other>
        <button onClick={e => this.getProps()}>get ref</button>
      </div>
    )
  }

  getProps () {
    console.log("hRef", this.hRef.current);
    console.log("homeRef", this.homeRef.current);
    console.log("pRef", this.pRef.current);
  }
}
