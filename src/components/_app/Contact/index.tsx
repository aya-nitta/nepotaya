import * as React from 'react'
import styled from 'styled-components'

import { config } from '~/utils/config'
import ExtLink from '../../ext-link'
import Instagram from '../../svgs/instagram'
import Twitter from '../../svgs/twitter'
import Note from '../../svgs/note'
import Email from '../../svgs/email'

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
    </div>
  )
}

const StyledComponent = styled(Component)`
  color: ${config.domasoBlack};
  letter-spacing: 3px;
  float: right;
  padding: 0px 30px;
  border: 10px;
  p {
    margin: 0;
  }
  svg {
    padding: 30px 8px;
  }
  /* a.twitter-timeline {
    text-decoration: none; /* リンクの下線を消す */
  /* } */
  a:hover path {
    fill: ${config.domasoBlack};
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
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
      Icon: Note,
      alt: 'note icon',
      link: 'https://note.com/nepotaya'
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
