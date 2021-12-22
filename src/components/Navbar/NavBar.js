import './NavBar.css';
import CartWidget from '../cartWidget/cartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
            
                    <Link className="navbar-brand" to="/">
                        <h2 className="site-name">Rajanding</h2>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/decorativo">Decorativos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/vajilla">Vajillas</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/category/varios">Varios</Link>
                            </li>
                        
                        </ul>

                        <div className="d-flex align-center gap-3">

                            <Link className="no-text-dec" to="/cart">
                                <CartWidget carritoCount="2"/>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
