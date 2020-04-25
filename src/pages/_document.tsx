//HTMLでレイアウト部分のマークアップ
import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <Main />
        <NextScript />
      </Html>
    )
  }
}

export default MyDocument
