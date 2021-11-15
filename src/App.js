
import './App.css';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/containers/itemListContainer/itemListContainer';
import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar
        logoSrc="images/logo/logo192.png"
      />

      <main className="container">
        <Routes>
          <Route path="/" element={
            <ItemListContainer
            greeting="Te doy la bienvenida! Espero que encuentres lo que buscas!"
          />
          } />
        </Routes>  
        
      </main>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
