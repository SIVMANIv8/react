import React from 'react';
import './bootstrap.min.css'
import './style.css';
import Header from './header.js';
import Footer from './footer.js';
import Container from './Container.js';

function App() {
  return (
    <div className="App">
      <Header className="navbar navbar-expand-sm bg-light"/>
      <Container >

      </Container>
      <Footer className="navbar navbar-expand-sm bg-dark"/>
    </div>
  );
}

export default App;
