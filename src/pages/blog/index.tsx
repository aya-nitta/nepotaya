import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { getBlogLink, getDateStr, postIsReady } from '../../lib/blog-helpers'
import getBlogIndex from '../../lib/notion/getBlogIndex'

type PostsTypes = {
  id: string
  Slug: string
  Date: number
  Published: string
  Page: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  preview: any[]
}[]
type ContainerProps = {
  posts: PostsTypes
}
type Props = {
  className: string
} & ContainerProps

const Component: React.FC<Props> = props => (
  <div className={props.className}>
    {props.posts.length === 0 && <p>There are no posts yet</p>}
    {props.posts.map(post => {
      return (
        <div key={post.Slug}>
          <p>
            <Link href="/articles/[slug]" as={getBlogLink(post.Slug)}>
              <a>{post.Page}</a>
            </Link>
          </p>
          {post.Date && (
            <div className="posted">Posted: {getDateStr(post.Date)}</div>
          )}
        </div>
      )
    })}
  </div>
)

const StyledComponent = styled(Component)`
  color: black;
  margin: 0 auto;
  width: 600px;
  * > a {
    color: #888;
    text-decoration: none; /* リンクの下線を消す */
  }
  * > a:hover {
    color: black;
  }
  .posted {
    color: #888;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="articles" {...props} />
}

export default Container

// eslint-disable-next-line @typescript-eslint/camelcase
export const unstable_getStaticProps = async (): Promise<{
  props: {
    posts: PostsTypes
  }
  revalidate: number
}> => {
  const postsTable = await getBlogIndex()
  const authorsToGet: Set<string> = new Set()
  const posts = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!postIsReady(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)
  return {
    props: {
      posts
    },
    revalidate: 10
  }
}
