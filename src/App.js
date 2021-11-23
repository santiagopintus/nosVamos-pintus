
import './App.css';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/containers/itemListContainer/itemListContainer';
import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/containers/itemDetailContainer/itemDetailContainer';
import Cart from './components/cart/cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar
        logoSrc="images/logo/logo192.png"
      />

      <main className="container">
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </main>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
