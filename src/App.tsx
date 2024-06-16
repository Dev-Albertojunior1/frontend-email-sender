// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/SUBSCRIBE.tsx';
import Form from './form.tsx'
import Footer from './components/Footer';
import Main from './components/Main'

function App() {
  return (
    <>
      <Navbar />
      <Main />
      
      <MainContent />
      {/* <Form/> */}
      <Footer />
    </>
  );
}

export default App;
