// (1) import層
import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import styled from 'styled-components'

// (2) Types層
// type ContainerProps = {}
// type Props = { className: string } & ContainerProps

// (3) DOM層
// const Component: React.FC<Props> = props => (
//   <div className={props.className}></div>

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'ねぽたとは', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
  { label: 'Puuuu!!', page: '/puuuu' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} ` : ''} </title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <h1>ねぽたや</h1>
        <meta name="og:title" content="My Notion Blog" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@_ijjk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

// // (4) Style層
// const StyledComponent = styled(Component)`
//   color: #888;
//   text-align: center;
//   a {
//     margin: 5px;
//     font-size: 30px;
//   }
//   h1 {
//     margin: 5px;
//     font-size: 30px;
//   }
//   h2 {
//     margin: 5px;
//     font-size: 30px;
//   }
//   p {
//     margin: 5px;
//     font-size: 30px;
//   }
// `
// color: blue;
// .btn {
//   color: yellow;
// }
// > button {

// (5) Container層
// const Container: React.FC = props => {
//   return <StyledComponent className="header" {...props} />
// }

// export default Container
