/*
 * @Author: web_XL
 * @Date: 2021-06-01 22:16:24
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-03 08:58:37
 * @Description:
 */
import React, { useState } from 'react'

export default function App () {
  const [num, setNum] = useState(() => 10)
  function addNum () {
    /**
     * 和setState 一样 不是函数就会合并
     * 只会+一次1
     */
    // setNum(num + 1)
    // setNum(num + 1)
    // setNum(num + 1)
    // setNum(num + 1)

    /**
     * 同步的 + 4次1
     */
    setNum((preValue) => preValue + 1)
    setNum((preValue) => preValue + 1)
    setNum((preValue) => preValue + 1)
    setNum((preValue) => preValue + 1)
  }
  const [name, setName] = useState(["xl", "小红"])
  const [good, setGood] = useState([
    {
      name: "舒飘飘",
      id: 1,
      price: 1
    },
    {
      name: "香肠",
      id: 2,
      price: 321
    }
  ])
  /**
   * set 值的时候 千万不要再原来的对象state 上进行修改 不然由于引用的关系 会导致传入的对象和老的对象相等 导致react不更新dom
   */
  function addName () {
    let name1 = "kobi" + Date.now()
    setName([...name, name1])
  }
  function goodFn (index) {
    let arr = [...good]
    arr[index].price += 1
    setGood(arr)
  }
  return (
    <div>
      <h3>name:{num}</h3>
      <button onClick={addNum}>add num</button>
      <hr />
      {name.map(item => {
        return (
          <div key={item}>{item}</div>
        )
      })}
      <button onClick={addName}>add name</button>
      <hr></hr>

      {good.map((item, index) => {
        return (
          <div key={item.id}>{item.name} ->  {item.price}  <button onClick={e => goodFn(index)}>add price</button></div>
        )
      })}
    </div>
  )
}
