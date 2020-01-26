import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <ul>
            <li>
              <a herf="https://twitter.com/_nenenemo">twitter</a>
            </li>
            <li>
              <a herf="https://www.instagram.com/_nenenemu/">instagram</a>
            </li>
          </ul>
        </body>
      </Html>
    )
  }
}

export default MyDocument
