import * as React from 'react'
import styled from 'styled-components'
import ExtLink from '../../ext-link'
import Instagram from '../../svgs/instagram'
import Twitter from '../../svgs/twitter'
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
      <p>⬆️こちらからお問い合わせください！</p>
      <a
        className="twitter-timeline"
        data-width="300"
        data-height="800"
        href="https://twitter.com/_nenenemo?ref_src=twsrc%5Etfw"
      />
      <script async src="https://platform.twitter.com/widgets.js" />
    </div>
  )
}

const StyledComponent = styled(Component)`
  color: #0b2438;
  /* letter-spacingは文字の間隔 */
  letter-spacing: 1px;
  float: right;
  padding: 0px 30px;
  border: 10px double #888;
  background: #fff;
  border-radius: 10px;
  .contact {
  }
  p {
    margin: 0;
  }
  svg {
    padding: 8px 8px;
  }
  a.twitter-timeline {
    text-decoration: none; /* リンクの下線を消す */
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
