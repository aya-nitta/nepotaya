import * as React from 'react'
import '../styles/global.css'
import ExtLink from '../components/ext-link'

const component: React.FC = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />

    <footer>
      <ExtLink href="https://zeit.co/new/project?template=https://github.com/ijjk/notion-blog/tree/master" />
    </footer>
  </>
)

export default component
