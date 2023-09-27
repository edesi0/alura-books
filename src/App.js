import './App.css';
import React from 'react';
import Header from './componentes/Header/index.js';
import Pesquisa from './componentes/Pesquisa/index.js';

function App() {
  return (
    <div classname="App">
      <header classname="App-header">
      <Header/>
      </header>
      <div>
      <Pesquisa/>
      </div>
    </div>



  );
}

export default App;
