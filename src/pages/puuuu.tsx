// Puuuu!!
// (1) import層
import * as React from 'react'
import Header from '../components/_app/Header'
import styled from 'styled-components'

// (2) Types層
type ContainerProps = {}
type Props = { className: string } & ContainerProps
// (3) DOM層
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <Header />

    <a href="/name">
      <img src="/puuuu.png" alt="icon" width="240" height="240" />
    </a>
    <h2>毎度！今日も元気にやっとります！ぷぅです！</h2>
    <br />
    <p>
      ノルウェージャンフォレストキャットのプータローと申します。
      <br />
      性別は男
      <br />
      生まれは2019年8月15日
      <br />
      オモチャください。
    </p>
  </div>
)
// (4) Style層
const StyledComponent = styled(Component)`
  color: black;
  text-align: center;
  a {
    font-size: 30px;
  }

  h2 p {
    margin: 5px;
    font-size: 20px;
  }
`
// (5) Container層
const Container: React.FC = props => {
  return <StyledComponent className="puuuu" {...props} />
}
export default Container
