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
      <img src="/icon.png" alt="icon" width="100" height="100" />
      <h1>ハジメマシテ。</h1>
      <h2>まずは自己紹介から参りましょうか…</h2>

      <div className="explanation">
        <p>
          性別は女
          <br />
          旦那さんとノルウェージャンフォレストキャットのプータローと暮らしています。
          <br />
          よくツイッターにおりますので、気軽にリプください。
          <br />
          PUBG MOBILEのID（6106283530）{' '}
        </p>
      </div>

      <h3>Skillset</h3>

      <div className="explanation2" />
      <p>html,css</p>
    </div>
  </>
)

export default Index
