var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

var config = {
    port: 3002,
    localUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js:   './src/**/*.js',
        css:  './src/css/*.css'
    },
    dist: './build',
    mainJs: './src/main.js'
}

// Setup local dev server
gulp.task('connect', function(){
    connect.server({
        root: ['build'],
        port: config.port,
        base: config.localUrl,
        livereload: true
    });
});

// Setup gulp open
gulp.task('open', ['connect'], function(){
    gulp.src('build/index.html')
        .pipe(open({
            url: config.localUrl + ':' + config.port + '/'
        }));
});

// Copy and process html files
gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.dist))
        .pipe(connect.reload());
});

// Copy and process js files
gulp.task('js',function(){
    browserify(config.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.dist + '/js'))
        .pipe(connect.reload());
});

// Copy and process css files
gulp.task('css', function(){
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.dist + '/css'))
        .pipe(connect.reload());
});

// Setup file monitor feature
gulp.task('watch', function(){
    // Watch html changes
    gulp.watch(config.paths.html, ['html']);
    // Watch js changes
    gulp.watch(config.paths.js, ['js']);
    // Watch css changes
    gulp.watch(config.paths.css, ['css']);
});

// Setup build workflow as default task
gulp.task('default', ['html', 'js', 'css', 'open', 'watch']);

