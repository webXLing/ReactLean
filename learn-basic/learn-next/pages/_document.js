/*
 * @Author: web_XL
 * @Date: 2021-07-05 11:03:49
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-05 13:34:27
 * @Description:
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'


class MyDocument extends Document {
  // static async getInitialProps (ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  // 为了 styled-components 在服务端渲染的时候能够生效
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html lang="zh">
        <Head />
        <body>
          <h5>自定义document</h5>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument