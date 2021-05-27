import React, { PureComponent } from 'react'

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      arr: Array(100).fill(1)
    }
  }
  UNSAFE_componentWillMount () {
    this.beginRenderTime = Date.now()
  }
  render () {
    return (
      <div>
        <div>dsad{this.state.arr}</div>
        {
          this.state.arr.map((item, index) => {
            return (
              <div key={index}>{index}</div>
            )
          })
        }
      </div>
    )
  }

  componentDidMount () {
    this.endRenderTime = Date.now()
    console.log(`home 渲染时间${this.endRenderTime - this.beginRenderTime}`);
  }
}
class About extends PureComponent {
  render () {
    return (
      <div>About</div>
    )
  }
}
export default class App extends PureComponent {
  render () {
    return (
      <div>
        <Home></Home>
        <About></About>
      </div>
    )
  }
}
