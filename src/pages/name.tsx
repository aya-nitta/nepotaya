// Puuuu!!
import * as React from 'react'
import Header from '../components/header'
// import ExtLink from '../components/ext-link'

import nameStyles from '../styles/name.module.css'

const Index: React.FC = () => (
  <>
    <Header titlePre="今までの名前" />
    <div className={nameStyles.layout}>
      <img src="/icon2.JPG" alt="icon" width="240" height="240" />

      <h2>ここでは今までに使用した名前を載せています&#x1f624;</h2>
      <p>
        <br />
        ねむこ
        <br />
        ねぽた
        <br />
        nemuson
        <br />
        ﾈﾎﾟ・ﾈﾎﾟ&#x1f918;(˙ᴥ˙)&#x1f918;
        <br />
        ねぽ宮飯也
        <br />
        ねぽ之内君
        <br />
        ネムロス・ゴーン
        <br />
        <br />
        随時更新中。
      </p>
    </div>
  </>
)

export default Index
