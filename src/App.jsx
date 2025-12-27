import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu'
import Characters from './components/Characters';
import Heroes from './components/Heroes';
import Bosses from './components/Bosses';
import HeroesSphere from './components/HeroesSphere';
import Hero from './components/Hero';

import './App.css'
import Title from './components/Title';

function App() {
  return (
      <div className="content">
        <Routes>

          <Route path="/" element={
            <>
              <Menu />
              <div className="main">
                <div className="title">
                  <Title />
                </div>
                <div className="sphere">
                  <HeroesSphere />
                </div>
              </div>
            </>
          } />

          <Route path="/characters" element={
            <Characters />
          } />

          <Route path="/heroes" element={
            <Heroes />
          } />

          <Route path="/bosses" element={
            <Bosses />
          } />

          <Route path="/heroes/:pers" element={
            <Hero />
          }></Route>
        </Routes>
      </div>
  );
}

export default App
