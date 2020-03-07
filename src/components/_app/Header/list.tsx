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
  > a {
    color: #888;
    transition: 0.2s;
    text-decoration: none; /* リンクの下線を消す */
    margin: 50px;
  }
  > a.active {
    color: black;
    font-weight: bold;
    padding: 0.5em 1em;
    background: #fff;
    border: dashed 2px black; /*点線*/
    border-radius: 10px; /*角の丸み*/
  }
  > a:hover {
    color: black;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="list" {...props} />
}

export default Container
