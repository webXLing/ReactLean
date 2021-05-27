/*
 * @Author: web_XL
 * @Date: 2021-05-13 22:18:16
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-16 16:17:58
 * @Description:
 */
import React, { PureComponent } from 'react'
import { addAciton, subAciton } from '../../store/counter/actionCreators'
import connect from '../../utils/myConnect1'

class Home extends PureComponent {
  render () {
    return (
      <div>
        <div>Home2-依赖store 实现connect</div>
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