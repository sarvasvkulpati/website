import { useRouter } from 'next/router'

import { getAllPosts, getPostBySlug } from '../api/api'
import markdownToHtml from '../api/markdownToHtml'

import Head from 'next/head'
import Tags from '../../components/Tags'



export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }


  return (
    <>


      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>

              <div className="prose">
                <h1>{post.title}</h1>
                <div className="flex flex-row justify-between">

                <p>{post.date}</p> 
                <Tags tags={post.tags}></Tags>

                </div>
               

                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>

              </div>


            </article>
          </>
        )}

    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'tags',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}