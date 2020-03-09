// Puuuu!!
// (1) import層
import * as React from 'react'
import styled from 'styled-components'

// (2) Types層
type ContainerProps = {}
type Props = { className: string } & ContainerProps
// (3) DOM層
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <img src="/puuuu.png" alt="icon" width="240" height="240" />
    <h3>一緒に暮らしているノルウェーフォレストキャットのプータローです。</h3>
    <br />
    通称ぷーち。
    <p>
      性別は男です。
      <br />
      生まれは2019年8月15日。
      <br />
      オモチャください。
    </p>
  </div>
)
// (4) Style層
const StyledComponent = styled(Component)`
  color: black;
  margin: 0 auto;
  width: 600px;
  h3 {
    display: block;
    text-align: center;
  }
`
// (5) Container層
const Container: React.FC = props => {
  return <StyledComponent className="puuuu" {...props} />
}
export default Container
