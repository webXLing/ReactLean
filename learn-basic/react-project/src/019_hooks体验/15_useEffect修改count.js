/*
 * @Author: web_XL
 * @Date: 2021-06-08 11:13:28
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-08 13:24:01
 * @Description: 
 */
import React, { useEffect, useState } from 'react'

// useLayoutEffect 和 useEffect 的区别
// useEffect        不会阻塞dom更新 会在dom 渲染之后更新
// useLayoutEffect  阻塞dom更新 会在dom渲染前更新

//  ) -> 将虚拟dom 渲染到屏幕

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



export default function App () {

  const [num, setNum] = useState(90)

  useEffect(async () => {
    console.log("useEffect");
    // await sleep(2000)

    if (num === 0) {
      setNum(Math.random() + 999)
    }
  }, [num])
  console.log("render");
  return (
    <div>
      <div>counter:{num}</div>
      <button onClick={e => setNum(0)}>add</button>
    </div>
  )
}
