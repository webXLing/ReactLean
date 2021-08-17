/*
 * @Author: web_XL
 * @Date: 2021-05-18 20:24:42
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-09 10:57:15
 * @Description:
 */
import { takeEvery, takeLatest, put, all } from 'redux-saga/effects'
import { HOMEACTION_TYPE } from './constants'
import { banAciton, orderAciton } from './actionCreators'
import axios from 'axios'


function* fetchHome (action) {
  console.log("拦截了-------", action);
  const res = yield axios({
    url: "http://123.207.32.32:8000/home/multidata",
    params: {
      name: 'xl'
    }
  })

  console.log('multidata res', res);
  // orderAciton
  // recommend
  // banAciton(res.data.data.recommend.list)
  // yield put(banAciton(res.data.data.banner.list))
  // put 相当于dispatch
  yield all([
    yield put(banAciton(res.data.data.banner.list)),
    yield put(orderAciton(res.data.data.recommend.list))
  ])
}



function* mySaga (params) {
  // 拦截action  对应的type
  // takeLatest 如果有多次 执行最新的一次
  // takeEvery 每次被执行
  yield takeEvery(HOMEACTION_TYPE, fetchHome)

  // 监听多个
  // yield all([
  //   yield takeEvery(HOMEACTION_TYPE, fetchHome),
  //   yield takeEvery(HOMEACTION_TYPE, fetchHome)
  // ])
}
export default mySaga