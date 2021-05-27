/*
 * @Author: web_XL
 * @Date: 2021-04-27 22:25:48
 * @LastEditors: web_XL
 * @LastEditTime: 2021-04-27 22:39:57
 * @Description:
 */
import React, { PureComponent } from 'react'

class App extends PureComponent {
  render () {
    return (
      <div>
        name:{this.props.subName}
      </div>
    )
  }
}

// function enhance (Wrapper) {
//   class NewApp extends PureComponent {
//     render () {
//       return <Wrapper {...this.props}></Wrapper>
//     }
//   }
//   NewApp.displayName = "Xl"
//   return NewApp
// }

function enhance (Wrapper) {
  function NewApp (props) {
    return <Wrapper {...props}></Wrapper>
  }

  NewApp.displayName = "Xl"
  return NewApp
}

const EnhanceCp = enhance(App)
export default EnhanceCp
// export default App
