import * as React from 'react'
import styled from 'styled-components'
import ExtLink from '../components/ext-link'
import Instagram from '../components/svgs/instagram'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'

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
      <img src="/icon.png" alt="icon" width="240" height="240" />
      <h1>Contact</h1>

      {props.contacts.map(({ Icon, link, alt }) => {
        return (
          <ExtLink key={link} href={link} aria-label={alt}>
            <Icon />
          </ExtLink>
        )
      })}
    </div>
  )
}

const StyledComponent = styled(Component)`
  background-color: #fff;
  color: black;
  text-align: center;
  img {
  }
  a {
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
      Icon: Envelope,
      alt: 'envelope icon',
      link: 'mailto:jj@jjsweb.site?subject=Notion Blog'
    }
  ]
  return <StyledComponent className="contact" contacts={contacts} {...props} />
}

export default Container
