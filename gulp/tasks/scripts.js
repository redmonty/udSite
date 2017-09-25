const gulp = require('gulp'),
    webpack = require('webpack');

//запускает webpack компиляцию(настроено в webpack.config.js)
gulp.task('scripts',['modernizr'], (callback)=> {
    webpack(require('../../webpack.config.js'), (err,stats)=>{
        if(err) {
            console.log(err.toString());
        }
        console.log('webpack completed!Scripts changed! Be happy!');
        console.log(stats.toString());
        callback(); 
    });
});