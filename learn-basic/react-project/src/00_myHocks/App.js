/*
 * @Author: web_XL
 * @Date: 2021-05-21 10:43:15
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-21 13:39:04
 * @Description:
 */
import React, { useState, useEffect } from 'react';
// 在这里，useState 就是一个 Hook （等下我们会讲到这是什么意思）。通过在函数组件里调用它来给组件添加一些内部 state。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。（我们会在使用 State Hook 里展示一个对比 useState 和 this.state 的例子）。

function Example () {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(1);
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  //   // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    console.log("useEffect");
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 2)}>
        Click me
      </button>
      <button onClick={() => myFn()}>
        Click me myFn
      </button>
    </div>
  )

  function myFn (params) {
    console.log("myFn");
    setCount(count + 11.3)
  }

}

export default Example