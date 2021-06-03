// /*
//  * @Author: web_XL
//  * @Date: 2021-06-02 17:27:30
//  * @LastEditors: web_XL
//  * @LastEditTime: 2021-06-02 17:28:01
//  * @Description: 
//  */
// import React from 'react';
// import PropTypes from 'prop-types';

// // 属性代理
// class Show extends React.Component {
//   static propTypes = {
//     children: PropTypes.element,
//     visible: PropTypes.bool,
//   };

//   render () {
//     const { visible, children } = this.props;
//     return visible ? children : null;
//   }
// }

// // 反向继承
// function Show2 (WrappedComponent) {
//   return class extends WrappedComponent {
//     render () {
//       if (this.props.visible === false) {
//         return null;
//       } else {
//         return super.render();
//       }
//     }
//   }
// }

// function App () {
//   return (
//     <Show visible={Math.random() > 0.5}>hello</Show>
//   );
// }

// export default App



// ------ render props
// 显而易见，renderProps 就是一种将 render 方法作为 props 传递到子组件的方案，相比 HOC 的方案，renderProps 可以保护原有的组件层次结构。
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// 与 HOC 不同，我们可以使用具有 render prop 的普通组件来共享代码
class Mouse extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }

  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render () {
    console.log(this.props);
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}


const useDidMount = fn => useEffect(() => fn && fn(), []);

const useDidUpdate = (fn, conditions) => {
  const didMoutRef = useRef(false);
  useEffect(() => {
    if (!didMoutRef.current) {
      didMoutRef.current = true;
      return;
    }
    // Cleanup effects when fn returns a function
    return fn && fn();
  }, conditions);
};

const useWillUnmount = fn => useEffect(() => () => fn && fn(), []);

const useHover = () => {
  const [hovered, set] = useState(false);
  return {
    hovered,
    bind: {
      onMouseEnter: () => set(true),
      onMouseLeave: () => set(false),
    },
  };
};


// 自定义hook hover
function Hover () {
  const { hovered, bind } = useHover();
  return (
    <div>
      <div {...bind}>
        hovered:
        {String(hovered)}
      </div>
    </div>
  );
}

// 自定义hook useField
const useField = (initial) => {
  const [value, set] = useState(initial);

  return {
    value,
    set,
    reset: () => set(initial),
    bind: {
      value,
      onChange: e => set(e.target.value),
    },
  };
}

function Select () {
  const { value, bind } = useField('apple')
  return (
    <div>
      selected:
      {value}
      <select {...bind}>
        <option value="apple">apple</option>
        <option value="orange">orange</option>
      </select>
    </div>
  );
}



function App () {
  const [num, setNum] = useState(0)
  useDidMount(() => {
    console.log("useDidMount");
  })

  useWillUnmount(() => {
    console.log("useWillUnmount");
  })

  useDidUpdate(() => {
    console.log("useDidUpdate");
  }, num)
  return (
    <div style={{ height: '100%' }}>
      <div>{num}</div>
      <button onClick={e => setNum(num + 1)}>add</button>
      <Mouse render={({ x, y }) => (
        // render prop 给了我们所需要的 state 来渲染我们想要的
        <h1>The mouse position is ({x}, {y})</h1>
      )} />

      <hr></hr>
      <Hover></Hover>

      <hr></hr>
      <Select></Select>
    </div>
  );
}

export default App