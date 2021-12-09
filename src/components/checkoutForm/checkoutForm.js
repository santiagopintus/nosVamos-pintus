import { UserContext } from '../contexts/userContext';
import './checkoutForm.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

/* Este componente registra los datos del usuario o los lee del UserContext */
const CheckoutForm = () => {
    const userContext = useContext(UserContext);
    const { user } = useContext(UserContext);

    // const [currentUser, setUser] = useState({});

    const loginUser = (e) => {
        let newUser = {}
        e.preventDefault();
        // Guardo los datos del form en un objeto
        newUser.name = e.target.name.value;
        newUser.phone = e.target.phone.value;
        newUser.email = e.target.email.value;
        // Guardo el objeto en el estado
        userContext.login(newUser);
    }

    const logoutUser = () => {
        userContext.logout()
    }


    return (
        <div className="container">
            <h1>Identifiquemos tus datos antes de continuar</h1>
            {userContext.isLoggedIn ?
                <>
                    <div className="checkout-container">
                        <h2 className="checkout-title">Hola! {user.name}! Gracias por comprar con nosotros!</h2>

                        <div className="checkout-options">
                            <button className="btn btn-primary" onClick={logoutUser}>No soy {user.name}</button>
                            <Link to="final-step"><button className="btn btn-secondary">Proceder a la compra</button></Link>
                        </div>
                    </div>
                </>
                :
                <>
                    <form onSubmit={loginUser} className="checkout-container">
                        
                        <h2 className="checkout-title">Completa tus datos para concretar tu compra</h2>

                        <fieldset>
                            <div className="field">
                                <label htmlFor="name">Nombre y Apellido</label>
                                <input id="name" type="text" name="name" required></input>
                            </div>
                            <div className="field">
                                <label htmlFor="phone">Teléfono</label>
                                <input id="phone" type="tel" name="phone" required></input>
                            </div>
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" required></input>
                            </div>
                        </fieldset>

                        <button className="btn btn-secondary checkout-btn">Cargar mis datos</button>
                    </form>
                </>
            }
        </div>
    );
}

export default CheckoutForm;