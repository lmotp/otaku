import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';
import Header from './layout/Header';
import Container from './layout/Container';
import TestHome from './pages/TestHome';
import Aside from './layout/Aside';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<TestHome />} />
          </Routes>
        </Container>
        <Aside />
      </BrowserRouter>
    </>
  );
}

export default App;
