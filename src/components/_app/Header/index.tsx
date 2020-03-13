// (1) import層
import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import List from './list'

// (2) Types層
type NavItemsTypes = {
  label: string
  page?: string
  link?: string
}[]
type ContainerProps = {}

type ComponentProps = {
  navItems: NavItemsTypes
  pathname: string
  className: string
} & ContainerProps

// (3) DOM層
const Component: React.FC<ComponentProps> = props => (
  <header className={props.className}>
    <h1>nepota!</h1>
    <ul>
      {props.navItems.map(({ label, page, link }) => (
        <div key={label}>
          <List
            page={page}
            pathname={props.pathname}
            label={label}
            link={link}
          />
        </div>
      ))}
    </ul>
  </header>
)

// // (4) Style層
const StyledComponent = styled(Component)`
  color: black;
  h1 {
    float: left;
    margin: 0;
    padding: 15px 30px;
    background-image: linear-gradient(
      92deg,
      black 0%,
      #888 100%
    ); /*左から右へのグラデーション */

    /* url('/icon2.JPG'); 画像を透過する*/

    -webkit-background-clip: text; /*テキスト部分に背景画像を適応させる*/
    /* -webkit-text-fill-color: transparent; インラインフレームの背景を透過させる */
    color: transparent; /*カラーが透明になる*/
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
const Container: React.FC<ContainerProps> = props => {
  const navItems: NavItemsTypes = [
    { label: 'nepota?', page: '/' },
    { label: 'blog', page: '/blog' },
    { label: 'puuuu?', page: '/puuuu' },
    { label: 'contact', page: '/contact' },
    { label: 'animations', page: '/animations/index' }
  ]

  const { pathname } = useRouter()

  return (
    <StyledComponent
      navItems={navItems}
      pathname={pathname}
      className="header"
      {...props}
    />
  )
}

export default Container
