import * as React from 'react'
import styled from 'styled-components'
import { config } from '~/utils/config'

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
  color: ${config.domasoBlack};
  letter-spacing: 3px;
  float: right;
  a.twitter-timeline {
    text-decoration: none; /* リンクの下線を消す */
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    flex: 3;
  }
`

//src/components/svg
const Container: React.FC = props => {
  const contacts = []
  return <StyledComponent className="contact" contacts={contacts} {...props} />
}

export default Container
