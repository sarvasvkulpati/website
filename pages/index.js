import Link from 'next/link'


export default function Home() {
  return (

    <>

      <div className="prose">
        <h1>Sarvasv Kulpati</h1>


        <img src="/me.jpg" className="w-44 m-0" />

        <p>Hi! I'm Sarv. I'm a freshman at UC Berkeley interested in technology and cognition.</p>

        <p>Previously, I made a tutoring marketplace and a no code machine learning tool that won $10,000 at a local university competition. I've also worked at 3 startups. Opinir, a reviews aggregator. Unscramble.ai, AI for motor insurance, and Pioneer.app, a fully online accelerator.</p>


        <p>I'm currently taking a gap semester to teach kids, and in the process, understand first hand what it's like to be a teacher, and the technology that could make that easier.</p>

        <Link href={"/blog"}>
          <a>Blog</a>
        </Link>
        <br></br>
        <Link href={"/blog/about"}>
          <a>About</a>
        </Link>
        <br></br>
        <Link href={"https://twitter.com/SarvasvKulpati"}>
          <a>Twitter</a>
        </Link>
        <br></br>
        <Link href={"https://github.com/sarvasvkulpati"}>
          <a>Github</a>
        </Link>



      </div>






    </>
  )
}
