
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssimport = require('postcss-import'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create();
    colorFunctions = require("postcss-sass-color-functions")
    ;


gulp.task('default', function(){
    console.log("Great, you created a gulp task");
});

gulp.task('html', function(){
    console.log('Imaging something useful being done to your html file here.');
});

gulp.task('styles', function(){
    return gulp.src('./styles/_main.css')
            .pipe(postcss([
                cssimport,
                cssvars,
                colorFunctions,
                nested,
                autoprefixer
            ]))
            .pipe(rename('sarnoff-styles.css'))
            .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function(){
    
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'public',
            index: 'index1.html'
           
        }
    });

    watch('./public/index1.html', function(){
        browserSync.reload();
    });   

    watch('./styles/**/*.css', function(){
        gulp.start('cssInject');
    });


});

gulp.task('cssInject',['styles'], function(){
    return gulp.src('./public/css/sarnoff-styles.css')
        .pipe(browserSync.stream());
});