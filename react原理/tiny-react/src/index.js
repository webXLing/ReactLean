import TinyReact from "./TinyReact"

function Demo () {
  return <div>function component</div>
}

class Demo1 extends TinyReact.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>class component</div>
    )
  }
}

const virtualDOM = (
  <div className="container">
    <h1>React 原理</h1>
    <Demo />
    {/* <Demo1 /> */}
    <h1 className="dsadj" data-name="div1">Tiny React
      <span>inner span 你好 </span>
    </h1>
    <h2 data-test="test">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    <p>下面是false</p>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    <p>上面是false</p>
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
)

console.log("virtualDOM => ", virtualDOM);

let el = document.getElementById("root")
// TinyReact.render(virtualDOM, el)
// TinyReact.render(<Demo />, el)
TinyReact.render(<Demo1 />, el)

