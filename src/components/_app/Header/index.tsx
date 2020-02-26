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
type Props = {
  navItems: NavItemsTypes
  ogImageUrl: string
  pathname: string
  className: string
} & ContainerProps

// (3) DOM層
const Component: React.FC<Props> = props => (
  <header className={props.className}>
    <h1>ねぽたや</h1>
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
  color: #888;
  h1 {
    float: left;
    padding: 30px 0;
    padding: 30px;
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
    { label: 'contact', page: '/contact' },
    { label: 'puuuu!', page: '/puuuu' }
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