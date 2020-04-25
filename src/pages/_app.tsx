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
  max-width: 1100px;
  margin: 0px auto;
  padding: 0px 1.5em;
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="_app" {...props} />
}

export default Container
