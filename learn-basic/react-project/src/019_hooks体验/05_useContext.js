/*
 * @Author: web_XL
 * @Date: 2021-06-02 22:01:10
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-02 22:07:01
 * @Description:
 */
import React, { PureComponent, createContext } from 'react'
import Demo from './components/01_useContext'

export const UserContext = createContext()
export const ThemeContext = createContext()


export default class App extends PureComponent {
  render () {
    return (
      <div>
        <UserContext.Provider value={{ name: "xl", age: 23 }}>
          <ThemeContext.Provider value={{ color: "red" }}>
            <Demo></Demo>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}
