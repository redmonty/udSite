const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();
    
gulp.task('watch',()=>{//создаем таск 
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    watch('./app/index.html',()=>{//наблюдаем за данным файлом
        gulp.start('html');//при каждом изменение запускаем таск html
    });
    watch('./app/assets/styles/**/*.css',()=>{//watch changes in every css file in styles directory
        gulp.start('cssInject');//with every change make task 'styles  '
    });
    watch('./app/assets/scripts/**/*.js',()=>{//watch changes in js files
        gulp.start('scriptsRefresh');//start webpack and reload browser with changes
    });
});
gulp.task('cssInject', ['styles'], ()=>{
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});

gulp.task('html',()=>{
    console.log('Html changed, you a very nice proger and have a nice day!');
    browserSync.reload();
});
gulp.task('scriptsRefresh',['scripts'], ()=> {
    browserSync.reload();
});