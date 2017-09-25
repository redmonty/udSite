const gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del'),
    raster = require('gulp-raster');

var config = {
    shape: {
        spacing: {
            padding: 1
        }
    },
    mode: {
        css:{
            variables: {
                replaceSvgWithPng: function() {
                    return function(sprite,render) {
                        return render(sprite).split('.svg').join('.png');
                    };
                }
            },
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
    return del('./app/temp/sprite');
});
gulp.task('createSprite',['clean'], ()=>{
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});
gulp.task('pngCopy', ['createSprite'], ()=>{
    return gulp.src('./app/temp/sprite/css/*.svg')
        .pipe(raster())
        .pipe(rename({extname: '.png'}))
        .pipe(gulp.dest('./app/temp/sprite/css'));
});
gulp.task('copySpriteGraph',['pngCopy'],()=>{
    return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});
 
gulp.task('copySpritecss',['createSprite'],()=>{
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('icons',['clean', 'createSprite', 'pngCopy', 'copySpriteGraph', 'copySpritecss', 'endClean']);