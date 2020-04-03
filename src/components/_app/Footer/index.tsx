// (1) import層
import React from 'react'
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

// // (4) Style層
const StyledComponent = styled(Component)`
  color: black;
  h1 {
    color: transparent; /*カラーが透明になる*/
    float: left;
    margin: 0;
    padding: 15px 30px;
    /* 3つの色を45度の角度でグラデーションさせてから、バックグラウンドのサイズを600%とオーバーサイズにすることで画面には1色がアップされて表示される */
    background: linear-gradient(45deg, #6cb8ff, #fff66c, #ffa36c);
    background-size: 600% 600%;
    animation: AnimationName 20s ease infinite;
    -webkit-background-clip: text;
    /*テキスト部分に背景画像を適応させる*/
    /* -webkit-text-fill-color: transparent; インラインフレームの背景を透過させる */
    /* background-image: linear-gradient(
      92deg,
      black 0%,
      #888 100%
    ); 左から右へのグラデーション */
    /* url('/icon2.JPG'); 画像を透過する*/
  }

  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* >はheader直下の */
  > ul {
    list-style: none; /*点を消す*/
    display: flex; /*横並びにする*/
    margin: 0;
    padding: 30px 0;
    justify-content: center; /*揃え位置を指定する*/
  }
`

// (5) Container層
// (5) Container層
const Container: React.FC = props => {
  return <StyledComponent className="footer" {...props} />
}
export default Container
