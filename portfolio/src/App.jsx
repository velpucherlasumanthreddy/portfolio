import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css'
import About from './components/About';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
export default function App() {
  return (
<div>
  <Navbar />
  <Hero />
  <About /> 
  <Skills />
  <Projects />
  <Footer />
  <Contact />
</div>
  );
}
