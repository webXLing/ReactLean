import React, { PureComponent } from 'react'

function withRenderTime (Wappered) {
  return class extends PureComponent {
    UNSAFE_componentWillMount () {
      console.log("高阶组件 UNSAFE_componentWillMount");
      this.beginRenderTime = Date.now()
    }

    render () {
      return <Wappered {...this.props}></Wappered>
    }
    componentDidMount () {
      console.log("高阶组件 componentDidMount");
      this.endRenderTime = Date.now()
      console.log(`${Wappered.name} 渲染时间${this.endRenderTime - this.beginRenderTime}`);
    }
  }
}

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
        {
          Array(100).fill(1).map((item, index) => {
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

  UNSAFE_componentWillMount () {
    console.log("inner UNSAFE_componentWillMount");
  }


  componentDidMount () {
    console.log("inner componentDidMount");
  }
  render () {
    return (
      <div>About</div>
    )
  }
}

const NewAbout = withRenderTime(About)
export default class App extends PureComponent {
  render () {
    return (
      <div>
        <Home></Home>
        <NewAbout></NewAbout>
      </div>
    )
  }
}
