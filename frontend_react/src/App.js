import React from 'react';

import {
  About,
  Experience,
  Footer,
  Header,
  Skills,
  Projects,
  Certifications,
} from './container';

import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Certifications />
    <Footer />
  </div>
);

export default App;