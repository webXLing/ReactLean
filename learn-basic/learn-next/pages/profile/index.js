/*
 * @Author: web_XL
 * @Date: 2021-07-05 13:18:30
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-05 13:29:14
 * @Description:
 */
import React, { memo } from 'react'
import {
  ProfileWapper
} from './style'

export default memo(function Profile () {
  return (
    <ProfileWapper>
      Profile
      <div className="test">test</div>
    </ProfileWapper>
  )
})
