import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import TechArchitecture from './components/TechArchitecture'
import ProjectManagement from './components/ProjectManagement'
import Team from './components/Team'
import Footer from './components/Footer'

// Global base styles
const globalStyle = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Serif+Display&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'DM Sans', -apple-system, sans-serif;
    background: #fff;
    color: #111;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  a { text-decoration: none; color: inherit; }
  button { font-family: inherit; cursor: pointer; border: none; outline: none; }
`

export default function App() {
  return (
    <>
      <style>{globalStyle}</style>
      <Navbar />
      <Hero />
      {/* Features */}
      <TechArchitecture />
      <ProjectManagement />
      <Team />
      <Footer />
    </>
  )
}
