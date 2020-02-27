import * as React from 'react'
import ExtLink from '../components/ext-link'

const Component = ({ Component, pageProps }): React.ReactElement => (
  <>
    <Component {...pageProps} />
    <footer>
      <ExtLink href="https://zeit.co/new/project?template=https://github.com/ijjk/notion-blog/tree/master" />
    </footer>
  </>
)

export default Component
