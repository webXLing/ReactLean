/*
 * @Author: web_XL
 * @Date: 2021-05-16 14:41:56
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-17 15:48:37
 * @Description: 通过context 区注入store 从而去除对store的依赖 实现为独立的第三方库
 */

import React, { PureComponent } from 'react'
import { StoreContext } from './context'

// 高阶函数 返回一个函数
/**
 * 
 * @param {*} mapStateToProps 将map 映射为props
 * @param {*} mapDispatchToProps 将dispatch map 映射为props
 * @returns 
 */
export default function connect (mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC (Wapper) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        console.log(context, "context---");
        super(props, context)
        // 此时 context 还未初始化完不能使用 this调用
        this.state = {
          storeSate: mapStateToProps(context.getState())
        }
      }

      componentDidMount () {
        this.unSubscribe = this.context.subscribe((e) => {
          console.log("subscribe", this.context.getState().num);
          this.setState({
            storeSate: mapStateToProps(this.context.getState())
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
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          >

          </Wapper>
        )
      }
    }

    EnhanceComponent.contextType = StoreContext
    return EnhanceComponent
  }
}