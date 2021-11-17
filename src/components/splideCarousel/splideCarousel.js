//Importo la libreria Splide js disponible en https://splidejs.com/
import { Splide, SplideSlide } from '@splidejs/react-splide';
//Linkeo los estilos de la librería
import '@splidejs/splide/dist/css/splide.min.css';

const SplideCarousel = ({images, imgAlt}) => {
    /* props: images: array de imagenes, imgAlt: string con el texto alternativo de la imagen */
    /* Crea un slide por cada imagen del producto que haya */
    return (
        <Splide
            //Configuracion del carousel de imagenes.
            options={ {
                type: "loop",
                gap: '1rem'
            }}
        >
            {images.map((src, index) => (
                <SplideSlide>
                    <img key={index} src={`images/products/${src}.webp`}
                        alt={imgAlt}
                    />
                </SplideSlide>
            ))};
        </Splide>
    )
}

export default SplideCarousel;

