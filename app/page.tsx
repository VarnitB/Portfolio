import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Internships from '../components/Internships'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <main className="px-4 md:px-12">
      <Hero />
      <Contact />
      <Skills />
      <Internships />
      <Projects />
    </main>
  )
}
