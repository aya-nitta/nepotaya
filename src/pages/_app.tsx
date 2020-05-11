import React from 'react'
import styled from 'styled-components'
import Header from '~/components/_app/Header'
import Footer from '~/components/_app/Footer'
import TimeLine from '~/components/_app/TimeLine'
import { AppProps } from 'next/app'
import { config } from '~/utils/config'

type ContainerProps = AppProps
type ComponentProps = {
  className: string
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <body>
      <Header />
      <TimeLine />
      <props.Component {...props.pageProps} />
      <Footer />
    </body>
  </div>
)

const StyledComponent = styled(Component)`
  min-height: 100vh;
  min-width: 100vh;
  display: flex;
  max-width: 1100px;
  margin: 0px auto;
  padding: 0px 1.5em;
  @media screen and (max-width: 480px) {
    body {
      width: 100%;
      flex-direction: column;
    }
    body > header {
      order: -1;
    }
    body > footer {
      order: 2;
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="_app" {...props} />
}

export default Container
