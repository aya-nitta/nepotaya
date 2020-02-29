// Puuuu!!
// (1) import層
import * as React from 'react'
import Header from '../components/_app/Header'
// import ExtLink from '../components/ext-link'

import styled from 'styled-components'

// (2) Types層
type ContainerProps = {}
type Props = { className: string } & ContainerProps

// (3) DOM層
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <Header />

    <a href="/name">
      <img src="/icon2.JPG" alt="icon" width="240" height="240" />
    </a>
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
)

// (4) Style層
const StyledComponent = styled(Component)`
  color: #888;
  text-align: center;
`
// color: blue;
// .btn {
//   color: yellow;
// }
// > button {

// (5) Container層
const Container: React.FC = props => {
  return <StyledComponent className="name" {...props} />
}

export default Container
