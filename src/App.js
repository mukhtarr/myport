import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';  // Importing the CSS file
import Menu from './Menu';

function App() {

  return (  
    <div className="App">
      <h1>Hello</h1>
      <Header /> <br/>
      <Menu />
      <About /> <br/>
      <Experience /> <br/>
      <Skills /> <br/>
      <Projects /> <br/>
      <Contact /> <br/>
      <Footer />
    </div>
  )
}

export default App;
