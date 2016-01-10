var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var ts = require('gulp-typescript');

gulp.task('compile:ts', function () {
    var tsProject = ts.createProject('src/client/tsconfig.json');

    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
});

gulp.task('compile:html', function () {
    return gulp
        .src('src/**/*.html')
        .pipe(gulp.dest('build'));
});

// Static Server + watching scss/html files
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./build/client"
        }
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("styles/default.scss")
        .pipe(sass({ 
            includePaths : [
                'node_modules/muicss/src/sass/'
                ,'node_modules/materialize-css/sass/'
                ] })
                .on('error', sass.logError))
        .pipe(gulp.dest("app/client"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);