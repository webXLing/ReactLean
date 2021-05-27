/*
 * @Author: web_XL
 * @Date: 2021-05-07 21:34:42
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-07 22:06:57
 * @Description: 
 */
import React, { PureComponent } from 'react'

import CommentInput from '@components/CommentInput'
import CommentItem from '@components/CommentItem'


export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  render () {
    return (
      <div>
        {this.state.list.map((item, index) => {
          return (
            <CommentItem item={item} key={item.id} onRemoveItem={e => this.onRemoveItemFn(index)}></CommentItem>
          )
        })}

        <CommentInput onSubmit={this.onSubmitFn.bind(this)}></CommentInput>
      </div>
    )
  }

  onSubmitFn (e) {
    this.setState({
      list: [...this.state.list, e]
    })
  }

  onRemoveItemFn (index) {
    console.log("onRemoveItemFn", index);
    let arr = [...this.state.list]
    arr.splice(index, 1)
    this.setState({
      list: [...arr]
    })
  }
}
