import * as React from 'react'
import ExtLink from '../components/ext-link'
import Header from '~/components/_app/Header'
import Contact from '~/components/_app/Contact'

const Component = ({ Component, pageProps }): React.ReactElement => (
  <>
    <Header />
    <Contact />
    <Component {...pageProps} />
    <footer>
      <ExtLink href="https://zeit.co/new/project?template=https://github.com/ijjk/notion-blog/tree/master" />
    </footer>
  </>
)

export default Component
