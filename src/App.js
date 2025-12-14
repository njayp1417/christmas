import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import SeerRuudPage from './components/SeerRuudPage';
import NnePolinpoPage from './components/NnePolinpoPage';
import KceePage from './components/KceePage';
import AuntyKaffyPage from './components/AuntyKaffyPage';
import JulianaPage from './components/JulianaPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/seer-ruud" element={<SeerRuudPage />} />
          <Route path="/nne-polinpo" element={<NnePolinpoPage />} />
          <Route path="/kcee" element={<KceePage />} />
          <Route path="/aunty-kaffy" element={<AuntyKaffyPage />} />
          <Route path="/juliana" element={<JulianaPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;