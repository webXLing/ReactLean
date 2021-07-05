/*
 * @Author: web_XL
 * @Date: 2021-07-02 16:02:39
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-05 13:16:41
 * @Description:
 */
import React, { memo } from 'react'

export default memo(function About () {
  return (
    <div>
      About
      <p className="class4">p标签</p>
      <div className="class3">div</div>
      <h2 className="class1">h2</h2>
      <h3 className="class2">h3</h3>
      {/* styled-jsx css in js 方案 nextJs已经默认集成了  */}
      <style jsx>{`
        .class1 {
          color: blue;
        }
        .class2 {
          background: red;
        }
        @media (max-width: 600px) {
          .class3 {
            background: blue;
          }
        }
      `}</style>
    </div>
  )
})
