/*
 * @Author: web_XL
 * @Date: 2021-05-13 22:18:16
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 16:24:42
 * @Description:
 */
import React, { PureComponent } from 'react'
import store from '../../store'
import { addAciton, subAciton } from '../../store/counter/actionCreators'

export default class About extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      num: store.getState().num
    }
  }

  componentDidMount () {
    this.unSubscribe = store.subscribe((e) => {
      console.log("subscribe", store.getState().num);
      this.setState({
        num: store.getState().num
      })
    })
  }

  componentWillUnmount () {
    this.unSubscribe()// 取消订阅
  }
  render () {
    return (
      <div>
        <div>num:{this.state.num}</div>
        <button onClick={e => { this.addFn(5) }}>+5</button>
        <button onClick={e => { this.subFn(1) }}>-1</button>

      </div>
    )
  }

  addFn (num) {
    store.dispatch(addAciton(num))
  }

  subFn (num) {
    store.dispatch(subAciton(num))
  }
}
