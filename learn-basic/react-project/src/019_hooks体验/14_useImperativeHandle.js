/*
 * @Author: web_XL
 * @Date: 2021-06-08 10:55:07
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-08 11:07:14
 * @Description:
 */
import React, { useImperativeHandle, forwardRef, useRef } from 'react'
// useImperativeHandle 


/**
 * useImperativeHandle 作用就是不让父组件后台多的操作子组件的能力 而是按需提供
 */
const Child2 = forwardRef((props, ref) => {
  const innerRef = useRef()

  /**
   * innerRef 发生改变  回调函数才回去发生更新
   */
  useImperativeHandle(
    ref,
    () => ({
      focus1: () => {
        console.log("useImperativeHandle focus");
        innerRef.current.value = "xl"
      }
    }, [innerRef.current])

  )
  return (
    <div>
      <div>Child</div>
      <input ref={innerRef} type="text"></input>
    </div>
  )
})

export default function App () {
  const cdRef = useRef()
  const cdRef1 = useRef()

  function clickFn (params) {
    console.log("clickFn");
    cdRef1.current.focus1()
    console.log(cdRef1);
  }
  return (
    <div>
      <Child2 ref={cdRef1}></Child2>

      <button onClick={e => { clickFn() }}>add</button>
    </div>
  )
}
