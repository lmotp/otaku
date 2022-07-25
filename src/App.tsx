import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';
import Header from './layout/Header';
import Container from './layout/Container';
import Aside from './layout/Aside';

import TestMake from './pages/TestMake';
import TestHome from './pages/TestHome';
import RealTimeMusicGame from './pages/RealTimeMusicGame';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/test" element={<TestHome />} />
            <Route path="/test/make" element={<TestMake />} />
            <Route path="/test/real" element={<RealTimeMusicGame />} />
          </Routes>
        </Container>
        <Aside />
      </BrowserRouter>
    </>
  );
}

export default App;
