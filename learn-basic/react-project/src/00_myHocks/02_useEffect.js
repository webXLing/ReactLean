/*
 * @Author: web_XL
 * @Date: 2021-05-27 17:27:50
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 17:51:36
 * @Description: 
 */

// 函数组件能保存状态，但是对于异步请求，副作用的操作还是无能为力，所以 React 提供了 useEffect 来帮助开发者处理函数组件的副作用，在介绍新 API 之前，我们先来看看类组件是怎么做的：
// import React, { Component } from "react";
// export default class App extends Component {
//   state = {
//     count: 1
//   };
//   componentDidMount () {
//     console.log("componentDidMount");
//     const { count } = this.state;
//     document.title = "componentDidMount" + count;
//     this.timer = setInterval(() => {
//       this.setState(({ count }) => ({
//         count: count + 1
//       }));
//     }, 1000);
//   }
//   componentDidUpdate () {
//     console.log("componentDidUpdate");
//     const { count } = this.state;
//     document.title = "componentDidMount" + count;
//   }
//   componentWillUnmount () {
//     document.title = "componentWillUnmount";
//     clearInterval(this.timer);
//   }
//   render () {
//     const { count } = this.state;
//     return (
//       <div>
//         Count:{count}
//         <button onClick={() => clearInterval(this.timer)}>clear</button>
//       </div>
//     );
//   }
// }


// 在例子中，组件每隔一秒更新组件状态，并且每次触发更新都会触发 document.title 的更新(副作用)，而在组件卸载时修改 document.title（类似于清除）

// 从例子中可以看到，一些重复的功能开发者需要在 componentDidMount 和 componentDidUpdate 重复编写，而如果使用 useEffect 则完全不一样。



// 我们使用 useEffect 重写了上面的例子，useEffect 第一个参数接收一个函数，可以用来做一些副作用比如异步请求，修改外部参数等行为，而第二个参数称之为dependencies，是一个数组，如果数组中的值变化才会触发 执行useEffect 第一个参数中的函数。返回值(如果有)则在组件销毁或者调用函数前调用。

// 1.比如第一个 useEffect 中，理解起来就是一旦 count 值发生改变，则修改 documen.title 值；
// 2.而第二个 useEffect 中传递了一个空数组[]，这种情况下只有在组件初始化或销毁的时候才会触发，用来代替 componentDidMount 和 componentWillUnmount，慎用；
// 还有另外一个情况，就是不传递第二个参数，也就是useEffect只接收了第一个函数参数，代表不监听任何参数变化。每次渲染DOM之后，都会执行useEffect中的函数。

import React, { useState, useEffect } from "react";
let timer = null;
function MyApp () {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect 1", count);
    if (count > 20) clearInterval(timer);
    document.title = "componentDidMount" + count;
  }, [count]);

  useEffect(() => {

    console.log("componentDidMount", count);
    timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    // 一定注意下这个顺序：
    // 告诉react在下次重新渲染组件之后，同时是下次执行上面setInterval之前调用
    return () => {
      console.log("componentWillUnmount");
      document.title = "componentWillUnmount";
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
  })
  return (
    <div>
      Count: {count}
      <button onClick={() => clearInterval(timer)}>clear</button>
    </div>
  );
}


export default function App () {
  const [flag, setFlag] = useState(true);
  return (
    <>
      {flag && <MyApp />}

      <button onClick={e => { setFlag(!flag) }}>change</button>
    </>
  )
}

// 基于这个强大 Hooks，我们可以模拟封装出其他生命周期函数，比如 componentDidUpdate 代码十分简单
// function useUpdate (fn) {
//   // useRef 创建一个引用
//   const mounting = useRef(true);
//   useEffect(() => {
//     if (mounting.current) {
//       mounting.current = false;
//     } else {
//       fn();
//     }
//   });
// }