/*
 * @Author: web_XL
 * @Date: 2021-05-07 21:36:46
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-07 22:04:41
 * @Description:
 */
import React, { PureComponent } from 'react'
import { Input, Button } from 'antd';
import moment from 'moment'


export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      comment: ""
    }
  }
  render () {
    return (
      <div>
        <Input.TextArea rows={4} value={this.state.comment} onChange={e => this.handelChane(e)}></Input.TextArea>
        <Button type="primary" onClick={e => this.submitFn()} >
          提交
        </Button>
      </div>
    )
  }

  handelChane (e) {
    this.setState({
      comment: e.target.value
    })
  }
  submitFn () {
    let obj = {
      avator: "asdas",
      name: "xl",
      id: moment().valueOf(),
      datetime: moment(),
      comment: this.state.comment
    }
    console.log("submitFn", obj);
    this.props.onSubmit(obj)

    this.setState({
      comment: ""
    })
  }
}
