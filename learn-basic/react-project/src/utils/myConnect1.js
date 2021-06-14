/*
 * @Author: web_XL
 * @Date: 2021-05-16 14:41:56
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-14 15:59:06
 * @Description: 实现 connect 这个版本 会导致对store有依赖  不能作为独立的第三方库
 */

import React, { PureComponent } from 'react'
import store from '../store'

// 高阶函数 返回一个函数
/**
 * 
 * @param {*} mapStateToProps 将map 映射为props
 * @param {*} mapDispatchToProps 将dispatch map 映射为props
 * @returns 
 */
export default function connect (mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC (Wapper) {
    return class extends PureComponent {
      constructor(props) {
        super(props)
        this.state = {
          storeSate: mapStateToProps(store.getState())
        }
      }

      componentDidMount () {
        this.unSubscribe = store.subscribe((e) => {
          console.log("subscribe", store.getState().num);
          this.setState({
            storeSate: mapStateToProps(store.getState())
          })
        })
      }

      componentWillUnmount () {
        this.unSubscribe()// 取消订阅
      }

      render () {
        return (
          <Wapper
            {...this.props}
            {...mapStateToProps(store.getState())}
            {... (store.dispatch)}
          >

          </Wapper>
        )
      }
    }
  }
}