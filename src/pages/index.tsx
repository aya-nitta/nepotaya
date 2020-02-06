// ねぽたとは
// (1) import層
import * as React from 'react'
import styled from 'styled-components'
import Header from '~/components/header'
import sharedStyles from '../styles/shared.module.css'
// (2) Types層
// type ContainerProps = {}
// type Props = { } & ContainerProps

const Component: React.FC = () => (
  <>
    <Header titlePre="ねぽたとは" />
    <div className={sharedStyles.layout}>
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
  </>
)
// (4) Style層
const StyledComponent = styled(Component)`
  color: blue;
  .btn {
    color: yellow;
  }
  > button {
    color: blue;
  }
`
// (5) Container層
const Container: React.FC = props => {
  return <StyledComponent {...props} />
}

export default Container
