/*
 * @Author: web_XL
 * @Date: 2021-06-08 09:35:52
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-08 10:02:16
 * @Description:
 */
import React, { useRef } from 'react'
class TestCpm extends React.Component {
  render () {
    return (
      <div>TestCpm</div>
    )
  }
}


/**
 * 函数式组件不能直接的 使用useRef
 * @param {*} params 
 * @returns 
 */
function TestCpm2 (params) {
  return (
    <div>TestCpm2</div>
  )
}

export default function App () {
  const titleRef = useRef()
  const imptRef = useRef()
  const testRef = useRef()
  const testRef2 = useRef()



  function changeFn () {
    titleRef.current.innerHTML = "xl"
    imptRef.current.focus()
    console.log("testRef", testRef);
    console.log("testRef2", testRef2);

  }

  return (
    <div>
      <div ref={titleRef}>initValue</div>
      <input type="text" ref={imptRef}></input>
      <button onClick={changeFn}>changge ref</button>
      <hr></hr>
      <TestCpm ref={testRef}></TestCpm>
      <TestCpm2 ref={testRef2}></TestCpm2>

    </div>
  )
}
