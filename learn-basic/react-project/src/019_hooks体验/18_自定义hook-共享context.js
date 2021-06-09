/*
 * @Author: web_XL
 * @Date: 2021-06-08 13:53:07
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-08 14:23:16
 * @Description: 
 */
import React from 'react'
import { useUserContextHook } from '../hooks/userHooks'

export default function App () {
  const [user, token] = useUserContextHook()
  console.log("user, token", user, token);
  return (
    <div>
      useUserContextHook
    </div>
  )
}
