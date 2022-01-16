
/* --------------- Funcionalidades --------------- */

//globales
const { src, dest, parallel  } = require('gulp');

//img
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');


/* --------------- Tareas --------------- */


//imagemin
function imageLighter(done) {   

    const opciones = {
        optimizationLevel: 3
    }

    src('img/**/*.{jpg,jpeg,png}')
    .pipe( cache( imagemin(opciones) ) )
    .pipe ( dest('build/imgs') );


    done();
}



//webp
function versionWebp(done) {
    
    const opciones = {
        quality: 50
    }

    src('img/**/*.{jpg,jpeg,png}')
    .pipe( webp(opciones) )
    .pipe( dest('build/imgs'));


    done();
}

exports.versionWebp = versionWebp;
exports.imageLighter = imageLighter;