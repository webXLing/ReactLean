/*
 * @Author: web_XL
 * @Date: 2021-05-09 20:06:31
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-27 16:18:46
 * @Description:
 */
import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default class MyCSSTransition extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }
  render () {
    const { show } = this.state

    // unmountOnExit 退出时不挂载dom
    // appear 
    return (
      <div>
        <CSSTransition
          appear
          in={show}
          classNames="mycard"
          timeout={1000}
          unmountOnExit
          onEnter={e => console.log("开始进入")}
          onEntering={e => console.log("进入中")}
          onEntered={e => console.log("进入完成")}
          onExit={e => console.log("开始退出")}
          onExiting={e => console.log("退出中")}
          onExited={e => console.log("退出完成")}
        >
          <div>
            <div>h@</div>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </div>
        </CSSTransition>
        <button onClick={e => this.setState({ show: !show })}>switch</button>
      </div>
    )
  }
}
