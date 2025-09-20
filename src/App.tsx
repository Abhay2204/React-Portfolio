import { FC } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParallaxBackground from './components/ParallaxBackground'
import CustomCursor from './components/CustomCursor'

const App: FC = () => {

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300">
        <CustomCursor />
        <ParallaxBackground />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Certificates />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
