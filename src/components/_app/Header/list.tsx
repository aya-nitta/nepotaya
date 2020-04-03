import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import ExtLink from '~/components/ext-link'

type ContainerProps = {
  page: string
  pathname: string
  label: string
  link: string
}
type Props = {
  className: string
} & ContainerProps

const Component: React.FC<Props> = props => (
  <li className={props.className}>
    {props.page ? (
      <Link href={props.page}>
        <a className={props.pathname === props.page ? 'active' : undefined}>
          {props.label}
        </a>
      </Link>
    ) : (
      <ExtLink href={props.link}>{props.label}</ExtLink>
    )}
  </li>
)

const StyledComponent = styled(Component)`
/* letter-spacingは文字の間隔 */
letter-spacing: 1px;
  > a {
    color: #888;
    transition: 0.2s;
    text-decoration: none; /* リンクの下線を消す */
    margin: 50px;
    padding: 0.5em 1em;
    border-radius: 10px; /* 角の丸み*/
  }
  > a.active {
    color: #0B2438;8;
    font-weight: bold;
    padding: 0.5em 1em;
    background: #fff;
    border-radius: 10px; /* 角の丸み*/
    /* border: dashed 2px #0B2438;8; 点線*/
  }
  > a:hover {
    background: #fff;
    color: #0B2438;8;
    border-radius: 10px; /* 角の丸み*/
    padding: 0.5em 1em;
    transition: all 0.3s ease-in-out;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="list" {...props} />
}

export default Container
