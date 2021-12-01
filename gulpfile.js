// import imagemin from 'gulp-imagemin';
const { src, dest, parallel } = require('gulp');
const webp = require('gulp-webp');

const paths = {
    imagenesJpg: 'resized jpg/**/*.{jpg,png}',
    imagenesWebp: 'webp output',
}

// function compressImg() {
//     return src(paths.imagenesJpg)
//         .pipe(cache(imagemin({ optimizationLevel: 3})))
//         .pipe(dest('build/img'))
// }

function convertToWebp() {
    return src(paths.imagenesJpg)
        .pipe( webp() )
        .pipe(dest(paths.imagenesWebp))
}

exports.default = parallel(convertToWebp);