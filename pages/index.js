import Link from 'next/link'

import Head from 'next/head'



export default function Home() {
  return (

    <>

<Head>

  <title>Sarvasv Kulpati</title>
  
</Head>


      <div className="prose">
        <h1>Sarvasv Kulpati</h1>


        <img src="/me.jpg" className="w-44 m-0" />

        <p>What’s up, I’m Sarv. I’m currently a student at UC Berkeley. I’m at that point in life where I’m interested in so many things, I can’t really summarize myself as a “something”-er. I code, write non-fiction, write fiction, make youtube videos, make tiktoks, read a lot, play piano, do electronics. 
        </p>


    <p>I think a lot about math, web dev, dev tools, writing, art, literature, non-fiction, film, electronics, music and music theory, history/future of civilisation, history of progress, philosophy, cognitive science, personal psychology, emotional intelligence, computing, learning and more. (Did I mention I’m interested in a lot of things) </p>



      <p> You can see a list of projects I've done <a href="/blog/projects">here</a> </p>
      <p> A brief history of me <a href="/blog/history">here</a> </p>
      <p> Some more on what I like/believe in here <a href="/blog/believe">here</a> </p>


        <Link href={"/blog"}>
          <a>Blog</a>
        </Link>
        <br></br>

      
        <Link href={"https://twitter.com/SarvasvKulpati"}>
          <a>Twitter</a>
        </Link>
        <br></br>
        <Link href={"https://github.com/sarvasvkulpati"}>
          <a>Github</a>
        </Link>
        <br></br>
        <Link href={"https://www.youtube.com/channel/UCnhjB_1ib_N0MQNrx9ze9_A"}>
          <a>Youtube</a>
        </Link>


    <p> I'm a big fan of meeting new people. If you find anything I've written here interesting, feel free to DM on Twitter or email me with your thoughts at my full name @ gmail dot com.</p>


      </div>






    </>
  )
}
