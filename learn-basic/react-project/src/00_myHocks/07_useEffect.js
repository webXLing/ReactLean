/*
 * @Author: web_XL
 * @Date: 2021-06-02 17:04:46
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-02 17:25:32
 * @Description: 
 */
import { useState, useEffect, useMemo, createContext, useContext, useRef } from 'react';
import ReactDOM from 'react-dom';

function Example () {
  const [count, setCount] = useState(0);

  // => componentDidMount/componentDidUpdate
  useEffect(() => {
    // update 
    document.title = `You clicked ${count} times`;
    // => componentWillUnMount
    return function cleanup () {
      document.title = 'app';
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// useMemo 主要用于渲染过程优化，两个参数依次是计算函数（通常是组件函数）和依赖状态列表，当依赖的状态发生改变时，才会触发计算函数的执行。如果没有指定依赖，则每一次渲染过程都会执行该计算函数。
function Time () {
  return <p>{Date.now()}</p>;
}

function Counter () {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);


  const memoizedChildComponent = useMemo((count) => {
    console.log("render");
    return <Time />;
  }, [count]);
  const memoizedChildComponent2 = (count) => {
    console.log("render2");
    return <Time />;
  };

  return (
    <div>
      <h1>count:{count}</h1>
      <h1>count1:{count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <hr />
      <button onClick={() => setCount(count + 1)}>+</button>
      <hr />
      <button onClick={() => setCount(count)}>no add</button>

      <div>{memoizedChildComponent}</div>
      <div>{memoizedChildComponent2()}</div>


    </div>
  );
}


// context 是在外部 create ，内部 use 的 state，它和全局变量的区别在于，如果多个组件同时 useContext，那么这些组件都会 rerender，如果多个组件同时 useState 同一个全局变量，则只有触发 setState 的当前组件 rerender。


// 1. 使用 createContext 创建上下文
// const UserContext = new createContext();

// // 2. 创建 Provider
// const UserProvider = props => {
//   let [username, handleChangeUsername] = useState('');
//   return (
//     <UserContext.Provider value={{ username, handleChangeUsername }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// // 3. 创建 Consumer
// const UserConsumer = UserContext.Consumer;

// // 4. 使用 Consumer 包裹组件
// const Pannel = () => (
//   <UserConsumer>
//     {({ username, handleChangeUsername }) => (
//       <div>
//         <div>user: {username}</div>
//         <input onChange={e => handleChangeUsername(e.target.value)} />
//       </div>
//     )}
//   </UserConsumer>
// );

// const Form = () => <Pannel />;

// const App = () => (
//   <div>
//     <UserProvider>
//       <Form />
//     </UserProvider>
//   </div>
// );


// --------
// useRef 返回一个可变的 ref 对象，其 .current 属性初始化为传递的参数（initialValue）。返回的对象将持续整个组件的生命周期。事实上 useRef 是一个非常有用的 API，许多情况下，我们需要保存一些改变的东西，它会派上大用场的。
function TextInputWithFocusButton () {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}



export default function MyApp () {
  return (
    <div>
      <Example></Example>
      <hr />
      <Counter></Counter>
      <hr />
      {/* <App></App> */}
      <hr />
      <TextInputWithFocusButton></TextInputWithFocusButton>
    </div>
  )
}
