/*
 * @Author: web_XL
 * @Date: 2021-06-08 14:01:45
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-08 14:06:09
 * @Description:
 */
import { useContext } from 'react'
import { TokenContext, UserContext } from "../index";



export function useUserContextHook (params) {
  const res1 = useContext(UserContext)
  const res2 = useContext(TokenContext)

  return [res1, res2]
}