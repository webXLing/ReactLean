/*
 * @Author: web_XL
 * @Date: 2021-06-08 13:53:07
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-08 14:44:12
 * @Description: 
 */
import React from 'react'
import { useScrollHook } from '../hooks/scrollHooks'


export default function App () {
  let scrollY = useScrollHook()
  return (
    <div style={{ padding: "10000px 0" }}>
      <h1 style={{ position: "fixed", top: "0", left: 0 }}>scrollY:{scrollY}</h1>
    </div>
  )
}
