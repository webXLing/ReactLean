/*
 * @Author: web_XL
 * @Date: 2021-05-13 22:18:16
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 14:15:39
 * @Description: redux-thunk 的作用是让 action 支持一个函数 而不单单是一个对象
 */
import React, { PureComponent } from 'react'
import { addAciton, subAciton } from '../../store/counter/actionCreators'
import { fetchBanAciton } from '../../store/home/actionCreators'


// import connect from '../../utils/myConnect2'
import { connect } from 'react-redux'

class Home extends PureComponent {
  componentDidMount () {
    this.props.getBaner()

    setTimeout(() => {
      console.log("this.props.arr", this.props.arr);
    }, 2000);
  }
  render () {
    return (
      <div>
        <div>Home5-使用redux-thunk</div>
        <div>num:{this.props.num}</div>
        <button onClick={e => { this.props.addFn(5) }}>+5</button>
        <button onClick={e => { this.props.subFn(1) }}>-1</button>
        <div>{this.props.arr.map((item, index) => {
          return (
            <div key={item.image}>{item.image}</div>
          )
        })}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    num: state.counterInfo.num,
    arr: state.homeInfo.bannerList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFn (num) {
      dispatch(addAciton(num))
    },
    subFn (num) {
      dispatch(subAciton(num))
    },
    getBaner () {
      dispatch(fetchBanAciton)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)