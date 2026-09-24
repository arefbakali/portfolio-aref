import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import BackgroundDecor from './components/BackgroundDecor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Research from './components/Research'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BackgroundDecor />
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <Projects />
          <About />
          <Skills />
          <Research />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  )
}
