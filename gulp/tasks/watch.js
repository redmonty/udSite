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
});
gulp.task('cssInject', ['styles'], ()=>{
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});

gulp.task('html',()=>{
    console.log('Html changed');
    browserSync.reload();
});