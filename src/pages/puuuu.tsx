// Puuuu!!
// (1) import層
import * as React from 'react'
import styled from 'styled-components'

// (2) Types層
type ContainerProps = {}
type Props = { className: string } & ContainerProps
// (3) DOM層
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <p>
      一緒に暮らしているノルウェーフォレストキャットのプータローです。 <br />
      通称ぷーち。 性別は男です。
      <br />
      生まれは2019年8月15日。
      <br />
      オモチャください。
    </p>
    <div className="putaro">
      <div className="background" />
      <img src="/puuuu.png" />
    </div>
  </div>
)
// (4) Style層
const StyledComponent = styled(Component)`
  color: black;
  margin: 0 auto;
  width: 600px;
  > .putaro {
    /* positionは、relativeで範囲を決めてabsoluteで動かそう！ */
    position: relative;
    width: 200px;
    height: 200px;
  }
  > * > .background {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(
      -45deg,
      rgb(255, 166, 73),
      rgb(247, 100, 91),
      rgb(128, 94, 212)
    );
    /* infiniteは無限ループ */
    animation: load 2s linear 0s infinite normal none running;
  }
  > * > img {
    /* absoluteは絶対配置を指定する値 */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: calc(100% - 5%);
    height: calc(100% - 5%);
    background: rgb(49, 55, 70);
    border-radius: 50%;
  }

  @keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
// (5) Container層
const Container: React.FC = props => {
  return <StyledComponent className="puuuu" {...props} />
}
export default Container
