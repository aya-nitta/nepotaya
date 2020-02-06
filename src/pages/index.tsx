// ねぽたとは
import * as React from 'react'
import Header from '~/components/header'
// import ExtLink from '../components/ext-link'
// import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

const Index: React.FC = () => (
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

export default Index
