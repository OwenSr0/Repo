// Gulp

// Automatizacion de procesos repetitivos, fuera del codigo.

const gulp = require('gulp');
const server = require('gulp-server-livereload');
    
gulp.task('build', function(cb) {
    console.log('Building');
    setTimeout(cb, 1200);
})
// Actualizar a gulp4 npm i gulp@4.0.0

gulp.task('serve', function(cb){
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true
        }))
})

gulp.task('default', gulp.series('build', 'serve'))