/*
 * @Author: web_XL
 * @Date: 2021-05-13 21:57:53
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-13 22:03:32
 * @Description:
 */
import {
  INCREAMENT,
  DECREAMENT,
  ADD,
  SUB
} from './constants.js'

export const incAciton = () => ({ type: INCREAMENT })
export const decAciton = () => ({ type: DECREAMENT })
export const addAciton = (number) => ({ type: ADD, number })
export const subAciton = (number) => ({ type: SUB, number })



