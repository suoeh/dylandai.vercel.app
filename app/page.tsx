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

