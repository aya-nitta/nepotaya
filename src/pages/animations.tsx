import * as React from 'react'
import styled from 'styled-components'
import Header from '~/components/_app/Header'

// (2) Types層
type ContainerProps = {}
type Props = { className: string } & ContainerProps

// (3) DOM層
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <Header />
  </div>
)
// (4) Style層
const StyledComponent = styled(Component)`
  color: black;
  text-align: center;
  a {
    font-size: 30px;
  }
  h2 {
    margin: 5px;
    font-size: 20px;
  }
`
// (5) Container層
const Container: React.FC = props => {
  return <StyledComponent className="animations" {...props} />
}

export default Container
