const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');

gulp.task('bs', ['css'], () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(["index.html", "tailwind.js"], ['css', 'html-watch']);
});

gulp.task('html-watch',  done => {
    browserSync.reload();
    done();
});

// Example https://tailwindcss.com/docs/installation#gulp

gulp.task('css', () => {
    return gulp.src('src/styles.css')
        // ...
        .pipe(postcss([
            // ...
            tailwindcss('./tailwind.js'),
            require('autoprefixer'),
            // ...
        ]))
        // ...
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['bs']);
