import './App.css';
import listaCabecalho from './componentes/listaCabecalho/index';
import Logo from './componentes/logo/index.js';


function App() {
  return (
    <div classname="App">
      <header classname="App-header">
      <Logo></Logo>
      <listaCabecalho></listaCabecalho>
      </header>
    </div>
  );
}

export default App;
