import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import PageTransition from "./components/PageTransition"
import ParallaxBackground from "./components/ParallaxBackground"

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <main className="container mx-auto px-4">
          <ParallaxBackground/>
          <About />
          <Skills />
          <Projects />
        </main>
      </div>
    </PageTransition>
  )
}

