// (1) import層
import * as React from 'react'
import styled from 'styled-components'

// (2) Types層
type ContainerProps = {}
type Props = { className: string } & ContainerProps

// (3) DOM層
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <h3>ハジメマシテ!!</h3>
    <p>
      ネポタと申します。 性別は女です。
      <br />
      <a href="https://twitter.com/soichiro_nitta" target="_blank">
        旦那さん
      </a>
      と<a href="/puuuu">猫</a>
      と一緒に毎日楽しく過ごしています。
      <br />
      よくツイッターにおりますので、気軽にリプください。
      <br />
      PUBG MOBILEのID （6106283530）
    </p>
    <hr />
    <h3>Skillset</h3>
    <p>
      HTML , CSS
      <br />
    </p>
  </div>
)
// (4) Style層
const StyledComponent = styled(Component)`
  width: 600px;
  letter-spacing: 3px;
  color: #0b2438;
  padding: 15px 100px;
  /* ブロック、インラインブロックの違いに注意 */
  p > a {
    color: #888;
    text-decoration: none;
  }
  p > a:hover {
    color: #0b2438;
  }
`
// (5) Container層
const Container: React.FC = props => {
  return <StyledComponent className="index" {...props} />
}

export default Container
