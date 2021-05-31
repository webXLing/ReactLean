/*
 * @Author: web_XL
 * @Date: 2021-05-21 10:43:15
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 17:27:22
 * @Description: 
 */
// import React from "react";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       name: "alife"
//     };
//   }
//   render () {
//     const { count } = this.state;
//     return (
//       <div>
//         Count: {count}
//         <button onClick={() => this.setState({ count: count + 1 })}>+</button>
//         <button onClick={() => this.setState({ count: count - 1 })}>-</button>
//       </div>
//     );
//   }
// }
// 通过传入 useState 参数后返回一个带有默认状态和改变状态函数的数组。通过传入新状态给函数来改变原本的状态值。值得注意的是 useState 不帮助你处理状态，相较于    非覆盖式更新状态，useState 覆盖式更新状态，需要开发者自己处理逻辑。(代码如上)
import React, { useState } from "react";
function App () {
  const [obj, setObject] = useState({
    count: 0,
    name: "alife"
  });
  return (
    <div className="App">
      Count: {obj.count}
      <button onClick={() => setObject({ ...obj, count: obj.count + 1 })}>+</button>
      <button onClick={() => setObject({ ...obj, count: obj.count - 1 })}>-</button>
    </div>
  );
}

export default App


