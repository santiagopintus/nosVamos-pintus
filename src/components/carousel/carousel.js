import './carousel.css';

const Carousel = ({ controls, images, imgAlt }) => {
    const imgPath = 'images/products/';
    const imgExt = '.webp';
    console.log(images);
    console.log(imgAlt);
    return (
        <>
            
        <div id={controls} className="carousel slide d-block" data-bs-ride="carousel">
                <div className="carousel-inner">
                    
                    {images.map((imgSrc, index) => {
                        return (
                            <div key={index} className="carousel-item d-block">
                                <img height="auto" src={imgPath+imgSrc+imgExt} alt={imgAlt} className="d-block w-100"/>
                            </div>
                        );
                    })}
                    
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target={'#'+controls} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={'#'+controls} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel;