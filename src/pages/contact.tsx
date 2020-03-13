import * as React from 'react'
import styled from 'styled-components'
import ExtLink from '../components/ext-link'
import Instagram from '../components/svgs/instagram'
import Twitter from '../components/svgs/twitter'
import Email from '../components/svgs/email'

type ContainerProps = {}
type Props = {
  className: string
  contacts: {
    Icon: React.FC
    alt: string
    link: string
  }[]
} & ContainerProps

const Component: React.FC<Props> = props => {
  return (
    <div className={props.className}>
      {props.contacts.map(({ Icon, link, alt }) => {
        return (
          <ExtLink key={link} href={link} aria-label={alt}>
            <Icon />
          </ExtLink>
        )
      })}
      <p>こちらからお問い合わせください！</p>
      <a
        className="twitter-timeline"
        data-width="600"
        data-height="800"
        href="https://twitter.com/_nenenemo?ref_src=twsrc%5Etfw"
      >
        Tweets by _nenenemo
      </a>{' '}
      <script async src="https://platform.twitter.com/widgets.js" />
    </div>
  )
}

const StyledComponent = styled(Component)`
  color: black;
  margin: 0 auto;
  width: 600px;
  svg {
    padding: 15px 75px;
  }
  p {
    text-align: center;
  }
  a.twitter-timeline {
    text-decoration: none; /* リンクの下線を消す */
    color: #888;
  }
  path.active-path:hover {
    color: white;
  }
`

//src/components/svg
const Container: React.FC = props => {
  const contacts = [
    {
      Icon: Twitter,
      alt: 'twitter icon',
      link: 'https://twitter.com/_nenenemo'
    },
    {
      Icon: Instagram,
      alt: 'instagram icon',
      link: 'https://www.instagram.com/_nenenemu'
    },
    {
      Icon: Email,
      alt: 'envelope icon',
      link: 'mailto:jj@jjsweb.site?subject=Notion Blog'
    }
  ]
  return <StyledComponent className="contact" contacts={contacts} {...props} />
}

export default Container
