/*
 * @Author: web_XL
 * @Date: 2021-05-07 21:36:46
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-07 22:07:11
 * @Description:
 */
import React, { PureComponent } from 'react'
import { Comment, Tooltip, Avatar } from 'antd';
import { DislikeOutlined } from '@ant-design/icons';
import moment from 'moment'




export default class CommentItem extends PureComponent {
  render () {
    // avator: "asdas",
    // name: "xl",
    // id: moment().valueOf(),
    // datetime: moment()
    const { datetime, comment, id, name, avator } = this.props.item
    return (

      <div>
        <Comment
          actions={
            [<span onClick={e => this.removeItem()}>删除<DislikeOutlined /></span>]
          }
          author={<a href="/#">{name}</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt={name}
            />
          }
          content={
            <p>{comment}----{id}</p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      </div>
    )
  }

  removeItem () {
    this.props.onRemoveItem()
  }
}
