/*
 * @Author: web_XL
 * @Date: 2021-06-05 07:02:45
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-07 15:52:16
 * @Description: 
 */

/**
 * useCallBack在什么时候使用
 * 场景：在将一个组件中的函数，传递给子组件调用时，使用callBack 对其进行处理 这样props不会发生改变 配合memo 使得子组件不发生改变
 */
import React, { useState, useCallback, memo, useMemo } from 'react'
let oldFn1 = null
let oldFn2 = null

// const Testt = (props) => {
//   console.log("Testt 子组件渲染了", props.title);
//   return <button onClick={props.fn}>Testt+1</button>
// }
const Testt = memo((props) => {
  console.log("Testt 子组件渲染了", props.title);
  return <button onClick={props.fn}>Testt+1</button>
})


export default function App () {
  const [num, setNum] = useState(90)
  const [state, setstate] = useState(false)
  console.log("父组件渲染了");

  const Fn1 = () => {
    console.log("Fn1 执行了");
    setNum(num + 1)
  }

  const Fn2 = useCallback(() => {
    console.log("Fn2 执行了");
    setNum(num + 1)
  }, [])


  const Fn3 = useCallback(() => {
    console.log("Fn3 执行了");
    setNum(num + 1)
  }, [num])

  /**
   * 通过useMemo 实现useCallback
   * useCallback 只能缓存函数
   * useMemo 都可以缓存
   */
  const Fn4 = useMemo(() => {
    return () => {
      console.log("Fn3 执行了");
      setNum(num + 1)
    }
  }, [num])
  return (
    <div>
      <div>counter:{num}</div>
      {/* <button onClick={Fn1}>add</button>
      <button onClick={Fn2}>sub</button>
      <button onClick={Fn3}>sub</button> */}
      <Testt title="Testt1" fn={Fn1}></Testt>
      <Testt title="Testt2" fn={Fn2}></Testt>
      <Testt title="Testt3" fn={Fn3}></Testt>

      <button onClick={e => setstate(!state)}>switch</button>
    </div>
  )
}
