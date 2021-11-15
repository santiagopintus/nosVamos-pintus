import imageminWebp from 'imagemin-webp';
import imagemin from "imagemin";

/*
Convierte las imagenes de jpg de "resized jpg" a WebP en la carpeta "webp output"
 */
(async () => {
    await imagemin(['../resized jpg/*.{jpg,png}'], '../build', {
        use: [
            imageminWebp({quality: 50})
        ]
    });
 
    console.log('Images optimized');
})();