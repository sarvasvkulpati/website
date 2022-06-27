

import Head from 'next/head'
import Link from 'next/link'


import fs from "fs";
import { join } from 'path'

import matter from "gray-matter";

export default function Index({ allPosts }) {
console.log(allPosts.map(a => Date(a.date)))

  return (
    <>

      <Head>
        <title>Sarvasv's Blog</title>
      </Head>


      <div className="mb-4">
    <Link href="/" > 
    <a >👈 home
    </a></Link> 
  </div>
      <div className="prose" >
        
        <h1>Posts</h1>



        {allPosts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date) ).map((post) => (
        
          <>



            <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
              <a className="hover:underline">{post.title}</a>
            </Link><br></br>


          </>))}




        <h2>Old Posts</h2>
        <p>
          I used to write extensively on Medium. You can check all my posts out on{" "}
          <a href="https://medium.com/@sarvasvkulpati">my profile</a>. Here's some
        of the better ones:
      </p>
        <a href="https://towardsdatascience.com/can-ai-be-creative-2f84c5c73dca">
          Can AI be creative?
      </a>
        <br />
        <a href="https://medium.com/sigmoid/a-brief-introduction-to-gans-and-how-to-code-them-2620ee465c30">
          A brief introduction to GANs and how to code them
      </a>
        <br />
        <a href="https://medium.com/@sarvasvkulpati/what-any-creative-can-learn-from-the-success-of-superhero-movies-536f0fef0b32">
          What any creative can learn from the success of superhero movies
      </a>
        <br />
        <a href="https://medium.com/sigmoid/linear-regression-from-scratch-with-python-5c33712a1cec">
          Linear regression from scratch in python
      </a>
        <br />
        <a href="https://medium.com/swlh/how-technology-is-stealing-your-time-right-under-your-nose-61770b58d39b">
          Counterproductivity- how technology is stealing your time right under
          your nose
      </a>
        <br />
        <a href="https://medium.com/free-code-camp/why-im-teaching-younger-students-at-my-school-how-to-code-f74ba3f174e3">
          Why I'm teaching younger students at my school how to code
      </a>
        <br />
        <a href="https://medium.com/hackernoon/you-need-to-go-on-an-information-diet-def2f5a3fd5b">
          You need to go on an information diet
      </a>
        <br />
      </div>






    </>
  )
}

export async function getStaticProps() {


  const files = fs.readdirSync(join(process.cwd(), '_posts'));

  const allPosts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`_posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

   

    

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date
    };
  });

  return {
    props: {
      allPosts,
    },
  };
}


