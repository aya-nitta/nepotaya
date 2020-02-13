// Puuuu!!
// (1) import層
import * as React from 'react'
import Header from '../components/header'
import styled from 'styled-components'

// (2) Types層
type ContainerProps = {}
type Props = { className: string } & ContainerProps
// (3) DOM層
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <Header titlePre="おプゥの部屋" />

    <a href="/name">
      <img src="/puuuu.png" alt="icon" width="240" height="240" />
    </a>
    <h1>毎度！</h1>
    <h2>今日も元気にやっとります！ぷぅです！</h2>

    <p>
      ノルウェージャンフォレストキャットのプータローと申します。
      <br />
      性別は男
      <br />
      生まれは2019年8月15日
      <br />
      オモチャください。
    </p>

    <h1>Skillset</h1>
    <p>html,css</p>
  </div>
)
// (4) Style層
const StyledComponent = styled(Component)`
  color: #888;
  text-align: center;
  a {
    margin: 5px;
    font-size: 30px;
  }
  h1 {
    margin: 5px;
    font-size: 30px;
  }
  h2 {
    margin: 5px;
    font-size: 30px;
  }
  p {
    margin: 5px;
    font-size: 30px;
  }
`
// color: blue;
// .btn {
//   color: yellow;
// }
// > button {

// (5) Container層
const Container: React.FC = props => {
  return <StyledComponent className="puuuu" {...props} />
}

export default Container
