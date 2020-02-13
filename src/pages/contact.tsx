// contact
// (1) import層
import * as React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import ExtLink from '../components/ext-link'

import contactStyles from '../styles/contact.module.css'

import Instagram from '../components/svgs/instagram'
import Twitter from '../components/svgs/twitter'
// import Envelope from '../components/svgs/envelope'

// (2) Types層
type ContainerProps = {}
type Props = { className: string } & ContainerProps

// (3) DOM層
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <Header titlePre="Contact" />

    <img src="/icon.png" alt="icon" width="240" height="240" />

    <h1>Contact</h1>

    <div className={contactStyles.links}>
      {contacts.map(({ Comp, link, alt }) => {
        return (
          <ExtLink key={link} href={link} aria-label={alt}>
            <Comp height={32} />
          </ExtLink>
        )
      })}
    </div>
  </div>
)

// (4) Style層
const StyledComponent = styled(Component)`
  color: #888;
  text-align: center;
  a {
    margin: 5px;
    font-size: 30px;
  }
  h1 {
    margin: 5px;
    font-size: 30px;
  }
  h2 {
    margin: 5px;
    font-size: 30px;
  }
  p {
    margin: 5px;
    font-size: 30px;
  }
`
// color: blue;
// .btn {
//   color: yellow;
// }
// > button {

// (5) Container層
const Container: React.FC = props => {
  return <StyledComponent className="contact" {...props} />
}

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/_nenenemo',
  },
  {
    Comp: Instagram,
    alt: 'instagram icon',
    link: 'https://www.instagram.com/_nenenemu',
  },

  // {
  //   Comp: Envelope,
  //   alt: 'envelope icon',
  //   link: 'mailto:jj@jjsweb.site?subject=Notion Blog',
  // },
]

export default Container
