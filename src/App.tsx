import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';
import Header from './layout/Header';
import Container from './layout/Container';

import Home from './pages/Home';
import Community from './pages/Community';
import TestHome from './pages/TestHome';
import TestMake from './pages/TestMake';
import MusicTestMake from './pages/MusicTestMake';
import PhotoCard from './pages/PhotoCard';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />

            <Route path="/test" element={<TestHome />} />
            <Route path="/test/make" element={<TestMake />} />

            <Route path="/music" element={<MusicTestMake />} />

            <Route path="/photo-card" element={<PhotoCard />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
