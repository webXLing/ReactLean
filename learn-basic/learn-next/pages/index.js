/*
 * @Author: web_XL
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-02 16:05:19
 * @Description: 
 */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import React, { memo } from 'react'

export default memo(function Home () {
  return (
    <div>
      index 页面
      <a href="/about">关于 后端渲染</a>

      <Link href="/about">
        <span>关于 前端渲染 不重新下载依赖</span>
      </Link>
    </div>
  )
})

