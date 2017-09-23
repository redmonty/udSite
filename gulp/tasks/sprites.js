const gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

var config = {
    mode: {
        css:{
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
};
gulp.task('clean',()=>{
    return del(['./app/temp/sprite','./app/assets/images/sprites']);
});
gulp.task('endClean',['copySpriteGraph','copySpritecss'], ()=>{
    return del('./app/temp/sprite')
});
gulp.task('createSprite',['clean'], ()=>{
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraph',['createSprite'],()=>{
    return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpritecss',['createSprite'],()=>{
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('icons',['clean','createSprite', 'copySpriteGraph', 'copySpritecss','endClean']);