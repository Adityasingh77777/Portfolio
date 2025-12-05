import { SideNav } from "./components/side-nav"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Projects } from "./components/projects"
import { Experience } from "./components/experience"
import { Achievements } from "./components/achievements"
import { Education } from "./components/education"
import { Skills } from "./components/skills"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { MobileNav } from "./components/mobile-nav"

export default function App() {
  return (
    <main className="relative min-h-screen gradient-bg">
      <SideNav />
      <MobileNav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Achievements />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
