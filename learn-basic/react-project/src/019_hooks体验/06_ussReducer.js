/*
 * @Author: web_XL
 * @Date: 2021-06-02 22:16:58
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-03 17:24:53
 * @Description: 
 */
import React, { useReducer, useState } from 'react'
import reducer from './components/02_reducer'

function Counter2 () {
  let [number, setNumber] = useState(0);
  function alertNumber () {
    setTimeout(() => {
      // alert 只能获取到点击按钮时的那个状态
      alert(number);
    }, 3000);
  }
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={alertNumber}>alertNumber</button>
    </>
  )
}


/**
 * useReducer
 * 是useState的替代品  
 * 
 */
export default function App () {
  const [state, dispatch] = useReducer(reducer, { num: 10 })
  return (
    <div>
      <div>num:{state.num}</div>
      <button onClick={e => dispatch({ type: "add" })}>add</button>
      <button onClick={e => dispatch({ type: "sub" })}>sub</button>
      <hr></hr>
      <Counter2></Counter2>
    </div>
  )
}
