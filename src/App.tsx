import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';
import Header from './layout/Header';
import Container from './layout/Container';
import TestHome from './pages/TestHome';

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
      </BrowserRouter>
    </>
  );
}

export default App;
