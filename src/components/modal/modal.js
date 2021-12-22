import { useEffect } from "react";
import "./modal.css";

const Modal = ({title, content, button}) => {
    
    useEffect(() => {
        document.querySelector("#modalTrigger").click()
    }, []);

    return (
        <>
            
            <button type="button" id="modalTrigger" className="btn modal-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                {/* Boton oculto que muestra el alert */}
                Mostrar modal
            </button>
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Ok"></button>
                    </div>
                    <div className="modal-body">
                        <p>{content}</p>
                    </div>
                        <div className="modal-footer">
                            {
                                button ?
                                    button
                                    :
                                    <button type="button" className="btn btn-primary"                     
                                    data-bs-dismiss="modal">Ok</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;