/*
 * @Author: web_XL
 * @Date: 2021-06-08 10:26:31
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-08 10:42:17
 * @Description: 
 */
import React, { useRef, forwardRef } from 'react'
function Child1 (props) {
  return (
    <div>
      <div>Child</div>
      <input type="text"></input>
    </div>
  )
}

const Child2 = forwardRef((props, ref) => {
  return (
    <div>
      <div>Child</div>
      <input ref={ref} type="text"></input>
    </div>
  )
})

export default function App () {
  const cdRef = useRef()
  const cdRef1 = useRef()


  function clickFn (params) {
    console.log("clickFn");
    cdRef1.current.focus()
    console.log(cdRef1);
  }
  return (
    <div>
      {/* <Child1 ref={cdRef}></Child1> */}
      <Child2 ref={cdRef1}></Child2>

      <button onClick={e => { clickFn() }}>add</button>
    </div>
  )
}
