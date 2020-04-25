import React from 'react'
import styled from 'styled-components'
import { config } from '~/utils/config'

// (2) Types層
type ContainerProps = {}
type Props = { className: string } & ContainerProps

// (3) DOM層
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <div className="wrapper">
      <div className="container" />
      <footer>
        <p>ばいば〜い！！三└(┐卍^o^)卍ﾄﾞｩﾙﾙﾙﾙﾙ </p>
      </footer>
    </div>
  </div>
)

// // (4) Style層
const StyledComponent = styled(Component)`
  color: ${config.domasoBlack};
  letter-spacing: 3px;
  width: 600px;
  padding: 15px 100px;
  .wrapper {
    min-height: 100vh;
    position: relative; /*←相対位置*/
    padding-bottom: 120px; /*←footerの高さ*/
    box-sizing: border-box; /*←全て含めてmin-height:100vhに*/
  }

  footer {
    width: 1000px;
    text-align: center;
    position: absolute; /*←絶対位置*/
    bottom: 0; /*下に固定*/
  }
`

// (5) Container層
const Container: React.FC = props => {
  return <StyledComponent className="footer" {...props} />
}
export default Container
