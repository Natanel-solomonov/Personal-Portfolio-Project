import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Experience from './sections/Experience/Experience';
import TechnicalSkills from './sections/TechnicalSkills/TechnicalSkills';
import Contact from './sections/Contact/Contact';
function App() {
  return (
    <div className="appContainer">
      <Hero />
      <Projects />
      <Experience/>
      <TechnicalSkills/>
      <Contact/>
    </div>
  );
}

export default App;