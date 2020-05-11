import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import ExtLink from '~/components/ext-link'
import { config } from '~/utils/config'

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
  letter-spacing: 3px;
  color: ${config.domasoBlack};
  > a {
    position: relative;
    display: inline-block;
    color: #888;
    transition: 0.2s;
    text-decoration: none; /* リンクの下線を消す */
    margin: 0px 50px;
    padding: 0.5em 1em;
    border-radius: 10px; /* 角の丸み*/
  }
  > a.active {
    color: #0b2438;
    font-weight: bold;
    padding: 0.5em 1em;
    border-radius: 10px; /* 角の丸み*/
    /* border: dashed 2px #0B2438;8; 点線*/
  }
  > a:hover {
    color: #0b2438;
    border-radius: 10px; /* 角の丸み*/
    padding: 0.5em 1em;
    transition: all 0.3s ease-in-out;
  }
  > a:after {
    position: absolute;
    bottom: 2px;
    left: 0;
    /* contentを記載するとafterが使用できる */
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${config.domasoBlack};
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
  }
  > a:hover:after {
    bottom: 0px;
    opacity: 1;
    visibility: visible;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="list" {...props} />
}

export default Container
