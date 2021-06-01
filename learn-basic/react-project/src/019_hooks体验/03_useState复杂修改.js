/*
 * @Author: web_XL
 * @Date: 2021-06-01 22:16:24
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-01 22:24:57
 * @Description:
 */
import React, { useState } from 'react'

export default function App () {
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
      <h3>name</h3>
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
