// ねぽたとは
// (1) import層
import * as React from 'react'
import styled from 'styled-components'
import Header from '~/components/header'
// import sharedStyles from '../styles/shared.module.css'

// (2) Types層
type ContainerProps = {}
type Props = { className: string } & ContainerProps

const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <Header titlePre="ねぽたとは" />

    <a href="/name">
      <img src="/icon.png" alt="icon" width="240" height="240" />
    </a>
    <h1>ハジメマシテ。</h1>
    <h2>まずは自己紹介から参りましょうか…</h2>

    <p>
      性別は女
      <br />
      旦那さんとノルウェージャンフォレストキャットのプータローと暮らしています。
      <br />
      よくツイッターにおりますので、気軽にリプください。
      <br />
      PUBG MOBILEのID （6106283530）{' '}
    </p>

    <h1>Skillset</h1>
    <p>html,css</p>
  </div>
)
// (4) Style層
const StyledComponent = styled(Component)`
  color: blue;
  h1 {
    margin: 5px;
    font-size: 50px;
    font-weight: 300;
    text-align: center;
    color: #888;
  }
  h2 {
    margin: 5px;
    font-size: 50px;
    font-weight: 300;
    text-align: center;
    color: #888;
  }
  p {
  }
`
// color: blue;
// .btn {
//   color: yellow;
// }
// > button {

// (5) Container層
const Container: React.FC = props => {
  return <StyledComponent className="index" {...props} />
}

export default Container
