/*
 * @Author: web_XL
 * @Date: 2021-06-14 15:20:39
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-14 15:55:36
 * @Description:
 */
import { getTopBanners } from '@/service/api/recommend'

import { CHANG_BANNER } from './constants'

export const changeTopBannersAction = (res) => ({
  type: CHANG_BANNER,
  topBanners: res.banners
})

export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      console.log("getTopBanners", res);
      dispatch(changeTopBannersAction(res))
    })
  }
}