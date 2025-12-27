import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu'
import Characters from './components/Characters';
import Heroes from './components/Heroes';
import Bosses from './components/Bosses';
import HeroesSphere from './components/HeroesSphere';
import Hero from './components/Hero';
import Boss from './components/Boss';
import InstructionBlock from './components/InstructionBlock';
import InstructionData from './data/instructionBlocks.json';
import Footer from './components/Footer';

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
              <div className="instruction">
                <h2>How to play?</h2>

                {InstructionData.map((block, i) => (
                  <InstructionBlock 
                    key={i}
                    text={block.text}
                    image={block.image} 
                    reverse={block.reverse}
                  />
                ))}
              </div>

              <Footer />
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

          <Route path="/bosses/:pers" element={
            <Boss />
          }></Route>
        </Routes>
      </div>
  );
}

export default App
