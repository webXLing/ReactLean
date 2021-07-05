/*
 * @Author: web_XL
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-05 11:09:35
 * @Description: 
 */
import '../styles/globals.css'
// 引入全局css

/**
 * 就是document 上的main
 * @param {*} param0 
 * @returns 
 */
function MyApp ({ Component, pageProps }) {
  return (
    <>
      <div>top MyApp</div>
      <Component {...pageProps} />
      <div>写死的部分 MyApp</div>
    </>
  )
}

export default MyApp
