import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Esse é o meu ItemListContainer" />

      <h2>Conteúdo</h2>

    </div>
  );
}

export default App;
