import { useEffect, useState } from "react";
import "./toTopArrow.css";

const ToTopArrow = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.clientHeight;
    
        if (scrollTop > windowHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => { 
        document.addEventListener('scroll', handleScroll)
    }, []);

    return (
        <>
            {isVisible &&
                <div className="to-top-arrow" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                    <img className="arrow-icon" src="images/icons/top-arrow.svg" alt="Ir a la cima de la página"/>
                </div>
            }
        </>
    )
}

export default ToTopArrow;