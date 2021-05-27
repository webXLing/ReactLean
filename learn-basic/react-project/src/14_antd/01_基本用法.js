/*
 * @Author: web_XL
 * @Date: 2021-05-06 21:10:29
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-06 21:55:57
 * @Description:
 */
import React, { PureComponent } from 'react'
import { Button, DatePicker } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import HomeIndex from '@components/home'
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';



export default class App extends PureComponent {
  render () {
    const size = 'large'
    return (
      <div>
        <HomeIndex></HomeIndex>
        <Button type="primary" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>

        <RangePicker
          defaultValue={[moment('2019-09-03', dateFormat), moment('2019-11-22', dateFormat)]}
          disabled={[false, true]}
        />
      </div>
    )
  }
}
