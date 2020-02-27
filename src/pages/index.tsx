// ねぽたとは
// (1) import層
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

    <a href="/name">
      <img src="/icon.png" alt="icon" width="240" height="240" />
    </a>
    <h2>ハジメマシテ。</h2>
    <h2>まずは自己紹介から参りましょうか…</h2>
    <br />
    <p>
      性別は女
      <br />
      旦那さんとノルウェージャンフォレストキャットのプータローと暮らしています。
      <br />
      よくツイッターにおりますので、気軽にリプください。
      <br />
      PUBG MOBILEのID （6106283530）{' '}
    </p>
    <br />
    <h1>Skillset</h1>
    <p>html,css</p>
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
  return <StyledComponent className="index" {...props} />
}

export default Container
