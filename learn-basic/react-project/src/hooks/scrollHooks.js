/*
 * @Author: web_XL
 * @Date: 2021-06-08 14:01:45
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-08 14:45:08
 * @Description:
 */
import { useContext, useEffect, useState } from 'react'



export function useScrollHook (params) {

  const [scrolly, setScrolly] = useState(0)
  function handle (params) {
    console.log("scrollY");
    setScrolly(window.scrollY)
  }
  useEffect(() => {
    document.addEventListener("scroll", handle)
    return () => {
      document.removeEventListener("scroll", handle)
    }
  }, [])

  return scrolly
}