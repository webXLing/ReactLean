/*
 * @Author: web_XL
 * @Date: 2021-06-02 22:02:24
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-02 22:07:20
 * @Description:
 */
import React, { PureComponent, useContext } from 'react'
import { UserContext, ThemeContext } from '../05_useContext'
export default function App () {
  const res1 = useContext(UserContext)
  const res2 = useContext(ThemeContext)
  console.log("UserContext", res1);
  console.log("ThemeContext", res2);

  return (
    <div>
      PureComponent
    </div>
  )
}
