import { useRouter } from 'next/router'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'


import Head from 'next/head'
import Tags from '../../components/Tags'


import ReactMarkdownWithHTML from 'react-markdown/with-html'
import Tex from '@matejmazur/react-katex'
import math from 'remark-math'
import 'katex/dist/katex.min.css'
import gfm from 'remark-gfm'


import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }




  const renderers = {
    inlineMath: ({value}) => <Tex math={value} />,
    math: ({value}) => <Tex block math={value} />,
    code: ({language, value}) => {
      return <SyntaxHighlighter style={dracula} language={language} children={value} />
    }
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
               

                <ReactMarkdownWithHTML
    plugins={[math, gfm]}
    renderers={renderers}
    children={post.content}
  allowDangerousHtml />
              </div>


            </article>
          </>
        )}

    </>
  )
}

export async function getStaticProps({ params : {slug} }) {

  const markdownWithMetadata = fs
  .readFileSync(join("_posts", slug + ".md"))
  .toString();

const { data, content } = matter(markdownWithMetadata);



let post= {}
const fields = [
    'title',
    'date',
    'tags',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ]


  fields.forEach((field) => {
    if (field === 'slug') {
      post[field] = slug.replace(/\.md$/, '')
    }
    if (field === 'content') {
      post[field] = content
    }

    if (data[field]) {
      post[field] = data[field]
    }
  })




return {
  props: {
    post 
  },
};


}

export async function getStaticPaths() {



  const files = fs.readdirSync("_posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}