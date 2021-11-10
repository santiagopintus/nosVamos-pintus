
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <>
      <NavBar
        logoSrc="images/logo/logo192.png"
      />

      <main className="container">
        
        <ItemListContainer
          greeting="Te doy la bienvenida! Espero que encuentres lo que buscas!"
        />
        
      </main>
    </>
  );
}

export default App;
