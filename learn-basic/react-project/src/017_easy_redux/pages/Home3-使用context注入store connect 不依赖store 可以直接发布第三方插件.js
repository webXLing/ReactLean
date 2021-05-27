/*
 * @Author: web_XL
 * @Date: 2021-05-13 22:18:16
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-16 15:24:52
 * @Description:
 */
import React, { PureComponent } from 'react'
import { addAciton, subAciton } from '../../store/counter/actionCreators'
import connect from '../../utils/myConnect2'

class Home extends PureComponent {
  render () {
    return (
      <div>
        <div>Home3- 使用context注入store connect 不依赖store 可以直接发布第三方插件</div>
        <div>num:{this.props.num}</div>
        <button onClick={e => { this.props.addFn(5) }}>+5</button>
        <button onClick={e => { this.props.subFn(1) }}>-1</button>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    num: state.counterInfo.num
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFn (num) {
      dispatch(addAciton(num))
    },
    subFn (num) {
      dispatch(subAciton(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)