import * as React from 'react'
import styled from 'styled-components'

// (2) Types層
type ContainerProps = {}
type Props = { className: string } & ContainerProps

// (3) DOM層
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <div className="smoke">
      <span>a</span>
      <span>n</span>
      <span>i</span>
      <span>m</span>
      <span>a</span>
      <span>t</span>
      <span>i</span>
      <span>o</span>
      <span>n</span>
    </div>
    <video src="/smoke.mp4" id="video" autoPlay muted />
    <ul className="mokuzi">
      <li>目次</li>
      <li>
        <a href="#i1">a</a>
      </li>
      <li>
        <a href="#i2">i</a>
      </li>
    </ul>

    <h3 id="i1">1111111</h3>

    <h3 id="i2">222222</h3>
  </div>
)
// (4) Style層
const StyledComponent = styled(Component)`
  color: black;
  text-align: center;
  body {
    margin: 0;
    padding: 0;
  }
  .smoke {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .smoke:before {
    content: '';
    background: #fffddd;
    width: 50%;
    height: 1px;
    position: absolute;
    top: 60%; /*線の位置 */
    animation: lineReveal 0.3s ease-in-out forwards;
  }
  /* #はID名 */
  #video {
    position: absolute;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    background-size: cover;
    z-index: -1;
  }
  /* 線が左から右へ動く*/
  @keyframes lineReveal {
    0% {
      left: 0%;
    }
    100% {
      left: 25%;
    }
  }
  /* テキストが下から上へ動く*/
  @keyframes textReveal {
    0%,
    60% {
      margin-top: 100px;
      opacity: 0;
    }

    100% {
      margin-top: 5px;
      margin: 1;
    }
  }
  span {
    color: #fffddd;
    font-size: 24px;
    display: inline-block;
    width: 2%;
    height: 50%; /*文字が出てくる位置*/
    padding: 10px;
    text-align: center;
    line-height: 40px;
    animation: textReveal 0.8s ease-out both;
  }
  ul {
    list-style: none; /*点を消す*/
  }
  ul.mokuzi > * > a {
    text-decoration: none; /* 下線を消す */
    display: block;
    border-top: 1px dotted #ddd; /* 上線の細かい点線 */
    color: #888;
    padding: 5px;
  }
  ul.mokuzi > * > a:active {
    color: black;
  }
  ul.mokuzi > * > a:hover {
    color: black;
  }

  ul.mokuzi {
    color: black;
    margin: auto;
    width: 500px; /* 目次全体 */
    padding: 0;
    font-weight: bold;
    background: #fff;
    border: dashed 1px #eee; /*点線 */
    border-radius: 10px; /*角の丸み*/
  }
  ul.mokuzi > li {
    padding: 5px;
  }
`
// (5) Container層
const Container: React.FC = props => {
  // console.log('aniani')
  return <StyledComponent className="animations" {...props} />
}

export default Container
