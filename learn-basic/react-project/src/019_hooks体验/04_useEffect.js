/*
 * @Author: web_XL
 * @Date: 2021-06-02 21:35:58
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-02 21:54:11
 * @Description:
 */
import React, { useEffect, useState } from 'react'

// useEffect 可以写多个 这样的就可以把逻辑单独抽离出来复用

function App () {
  const [num, setNum] = useState(() => 10)

  useEffect(() => {
    console.log("didmount and update2---");
    return () => {
      console.log("unmount and update");
    }
  })

  /**
   * num 改变 下面的回调函数才能修改
   */
  useEffect(() => {
    console.log("didmount and num-update2---");
    return () => {
      console.log("unmount and num-update");
    }
  }, [num])



  useEffect(() => {
    console.log("didmount");
    return () => {
      console.log("unmount");
    }
  }, [])

  useEffect(() => {
    console.log("didmount and update1---");
  })


  console.log("render");
  return (
    <div>
      <div>num:{num}</div>
      <button onClick={e => setNum(preValue => preValue + 1)}>+1</button>
    </div>
  )
}


export default function MyApp (params) {
  const [show, setShow] = useState(true)
  return (
    <div>
      {show && <App></App>}
      <button onClick={e => setShow(!show)}>switch</button>
    </div>
  )
}