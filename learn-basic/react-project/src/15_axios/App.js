/*
 * @Author: web_XL
 * @Date: 2021-05-09 10:14:51
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-09 10:51:12
 * @Description:
 */

import React, { PureComponent } from 'react'
import axios from 'axios'

export default class App extends PureComponent {
  componentDidMount () {
    axios.defaults.baseURL = "https://httpbin.org/"

    axios.interceptors.request.use(config => {
      console.log("请求拦截", config);
      return config
    }, err => {
      console.log("请求拦截---err", err);

    })

    axios.interceptors.response.use(res => {
      console.log("响应拦截", res);
      res.data.addFiled = "xl"
      return res.data
    }, err => {
      console.log("响应拦截---err", err);

    })

    /**
     * 这里url 一定要带/ 不然拿的当前域名
     */
    axios({
      // url: "https://httpbin.org/get",
      url: "/get",
      params: {
        name: 'xl'
      }
    })
      .then(res => {
        console.log("get---", res);
      })
      .catch(res => {
        console.log("err--get", res);
      })

    axios.post("https://httpbin.org/post", {
      name: 'xl'
    })
      .then(res => {
        console.log("post---", res);
      })
      .catch(res => {
        console.log("err--post", res);
      })


    // new 一个新的axios 
    let instance = axios.create({
      baseURL: "https://baidu.com/"
    })
    instance({
      // url: "https://httpbin.org/get",
      url: "/get",
      params: {
        name: 'xlnew'
      }
    })
      .then(res => {
        console.log("get---", res);
      })
      .catch(res => {
        console.log("err--get", res);
      })
  }
  render () {
    return (
      <div>

      </div>
    )
  }
}
