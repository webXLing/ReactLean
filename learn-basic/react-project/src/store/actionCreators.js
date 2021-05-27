/*
 * @Author: web_XL
 * @Date: 2021-05-13 21:57:53
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-22 22:25:00
 * @Description:
 */
import axios from 'axios'
import {
  INCREAMENT,
  DECREAMENT,
  ADD,
  SUB,
  ADD_BANNER,
  HOMEACTION_TYPE,
  ADD_ORDER
} from './constants.js'

export const incAciton = () => ({ type: INCREAMENT })
export const decAciton = () => ({ type: DECREAMENT })
export const addAciton = (number) => ({ type: ADD, number })
export const subAciton = (number) => ({ type: SUB, number })


export const banAciton = (arr) => {
  console.log("banAciton", arr);
  return { type: ADD_BANNER, bannerList: arr }
}

export const orderAciton = (arr) => {
  console.log("orderAciton", arr);
  return { type: ADD_ORDER, orderList: arr }
}

export const fetchBanAciton = (dispatch, getState) => {
  console.log("fetchBanAciton");
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
    params: {
      name: 'xl'
    }
  })
    .then(res => {
      console.log("get---", res);
      dispatch(banAciton(res.data.data.banner.list))
    })
    .catch(res => {
      console.log("err--get", res);
    })
}

// redux-saga 拦截的action

export const homeAction = () => ({ type: HOMEACTION_TYPE })



