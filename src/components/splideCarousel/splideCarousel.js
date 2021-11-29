//Importo la libreria Splide js disponible en https://splidejs.com/
import { Splide, SplideSlide } from '@splidejs/react-splide';
//Linkeo los estilos de la librería
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';
const SplideCarousel = ({images, imgAlt, isItemDetail = false, itemId}) => {
    /* props: images: array de imagenes, imgAlt: string con el texto alternativo de la imagen */
    /* Crea un slide por cada imagen del producto que haya */

    /* Si el item no contiene imagenes o el item no se pudo obtener todavía */
    if (typeof images === 'undefined') {
        images = [];
    }
    
    return (
        <Splide
            //Configuracion del carousel de imagenes.
            options={ {
                type: "loop",
                gap: '1rem'
            }}
        >
            {images.map((src, index) => (
                <SplideSlide key={index}>
                    {/* Si el item es un detalle de producto, La imagen no tiene link */}
                    {isItemDetail ?
                        <img className="slide__image" key={index} src={constants.productsImgUrl + src}
                            alt={imgAlt}
                        />
                        :
                        <Link to={`/item/${itemId}`}>
                            <img className="slide__image" key={index} src={constants.productsImgUrl + src}
                                alt={imgAlt}
                            />
                        </Link>
                    }
                </SplideSlide>
            ))};
        </Splide>
    )
}

export default SplideCarousel;

