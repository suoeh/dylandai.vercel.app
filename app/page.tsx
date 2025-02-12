import About from "./components/About"
import Projects from "./components/Projects"
import OtherCoolStuff from "./components/OtherCoolStuff"
import PageTransition from "./components/PageTransition"
import ParallaxBackground from "./components/ParallaxBackground"

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <link rel="icon" href="/favicon.ico" />
        <head>
          <title>Dylan Dai</title>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <meta name="description" content="Dylan Dai's personal website and portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <main className="container mx-auto px-4">
          <ParallaxBackground/>
          <About />
          <Projects />
          <OtherCoolStuff />
        </main>
      </div>
    </PageTransition>
  )
}

