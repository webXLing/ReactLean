/*
 * @Author: web_XL
 * @Date: 2021-06-02 22:16:58
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-02 22:22:11
 * @Description: 
 */
import React, { useReducer } from 'react'
import reducer from './components/02_reducer'

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
    </div>
  )
}
