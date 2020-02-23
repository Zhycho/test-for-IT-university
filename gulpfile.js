const gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
    return gulp.src('app/assets/less/**/*.less')
        .pipe(less())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('code', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});


gulp.task('watch', function() {
    gulp.watch('app/assets/less/**/*.less', gulp.parallel('less'));
    gulp.watch('app/*.html', gulp.parallel('code'));
    gulp.watch('app/assets/js/common.js', gulp.parallel('scripts'));
});

gulp.task('auto-pref', function() {
    return gulp.src('app/assets/css/main.css')
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/assets/css/main.pre.css'))
})

gulp.task('default', gulp.parallel('less', 'browser-sync', 'watch'));


