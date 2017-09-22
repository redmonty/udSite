const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),//$variableName
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');

gulp.task('styles',function(){//
    console.info('style.css changed');
    return gulp.src('./app/assets/styles/styles.css')//take file and upgraid it with 
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))//postcss-simle-vars, postcss-nestet, autoprefixer
        .on('error',(err)=>{
            console.error(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));//and create updaited css file in our directory
});