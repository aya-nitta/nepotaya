// Puuuu!!
import * as React from 'react'
import Header from '../components/header'
// import ExtLink from '../components/ext-link'

import PuuuuStyles from '../styles/puuuu.module.css'

const Index: React.FC = () => (
  <>
    <Header titlePre="ねぽたとは" />
    <div className={PuuuuStyles.layout}>
      <img src="/puuuu.png" alt="icon" width="240" height="240" />
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
    </div>
  </>
)

export default Index
