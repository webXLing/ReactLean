/*
 * @Author: web_XL
 * @Date: 2021-06-08 13:48:39
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-08 14:24:14
 * @Description: 
 */
import React, { useEffect } from 'react'

/**
 * 自定义hook 只要是对逻辑进行复用
 */
function usePriteLog (params) {
  useEffect(() => {
    console.log(params + "didmount");
    return () => {
      console.log(params + "update");
    }
  }, [])
}

// 使用use开头 不然会报错
// function priteLog (params) {
//   useEffect(() => {
//     console.log(params + "didmount");
//     return () => {
//       console.log(params + "update");
//     }
//   }, [])
// }


function Child1 (params) {
  usePriteLog("Child1")
  return <div>Child1</div>
}

function Child2 (params) {
  usePriteLog("Child2")
  return <div>Child2</div>
}

export default function App () {
  return (
    <div>
      <Child1></Child1>
      <Child2></Child2>

    </div>
  )
}
