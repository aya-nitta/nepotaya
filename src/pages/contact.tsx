// contact
import * as React from 'react'
import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import Instagram from '../components/svgs/instagram'
import Twitter from '../components/svgs/twitter'
// import Envelope from '../components/svgs/envelope'

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

const Component: React.FC = () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img src="/icon.png" alt="" height={60} />
      </div>

      <h1 style={{ marginTop: 0 }}>Contact</h1>
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
  </>
)

export default Component
