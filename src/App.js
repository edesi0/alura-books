import './App.css';
import Logo from './componentes/logo/index.js';

function App() {
  return (
    <div classname="App">
      <header classname="App-header">
      <Logo></Logo>
      <ul className='opcoes'>
        <li className='opcao'>CATEGORIAS</li>
        <li className='opcao'>MINHA ESTANTE</li>
        <li className='opcao'>FAVORITOS</li>
      </ul>
      </header>
    </div>
  );
}

export default App;
