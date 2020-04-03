import React from 'react'
import styled from 'styled-components'

// (2) Types層
type ContainerProps = {}
type Props = { className: string } & ContainerProps

// (3) DOM層
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <p>pi</p>
  </div>
)

// // (4) Style層
const StyledComponent = styled(Component)`
  color: #0b2438;
  /* letter-spacingは文字の間隔 */
  letter-spacing: 1px;
  width: 600px;
  padding: 15px 100px;
`

// (5) Container層
const Container: React.FC = props => {
  return <StyledComponent className="footer" {...props} />
}
export default Container
