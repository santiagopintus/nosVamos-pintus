import './NavBar.css';
import CartWidget from '../cartWidget/cartWidget';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
            
                    <Link className="navbar-brand" to="/">
                        <img src={props.logoSrc} alt="logo de Vamonos" />
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
                                <Link className="nav-link" to="/">Entretenimiento</Link>
                            </li>
                            <li className="nav-item dropdown">
                    
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Muebles</Link>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/">Mesas</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">Sillas</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">Dispenseros</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Contacto</Link>
                            </li>
                        </ul>

                        <div className="d-flex align-center gap-3">
                            
                            <CartWidget carritoCount="2"/>
                            
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
