import './NavBar.css';
import CartWidget from '../cartWidget/cartWidget';

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
            
                    <a className="navbar-brand" href="index.html">
                        <img src={props.logoSrc} alt="logo de Vamonos" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Entretenimiento</a>
                            </li>
                            <li className="nav-item dropdown">
                    
                                <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Muebles</a>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="index.html">Mesas</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="index.html">Sillas</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="index.html">Dispenseros</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="index.html" className="nav-link">Contacto</a>
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