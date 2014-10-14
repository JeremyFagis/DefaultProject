var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var meta        = require('./package.json');

var jsDir     = 'web/public/js/',
    sassDir   = 'web/public/sass/',
    distDir   = 'web/dist',
    jquerySrc = 'vendors/jquery-1.11.1.min.js',
    banner    = [
        '/*!',
        ' * =============================================================',
        ' * <%= name %> v<%= version %> | <%= description %>',
        ' * <%= homepage %>',
        ' *',
        ' * (c) 2014 <%= author.name %> <<%= author.email %>> | <%= author.url %>',
        ' * =============================================================',
        ' */\n\n'
    ].join('\n');

var onError = function (err) {
    $.util.beep();
    console.log(err.toString());
    this.emit('end');
};

gulp.task('sass-dev', function() {
    return gulp.src(sassDir + 'style.scss')
        .pipe($.plumber({ errorHandler: onError }))
        .pipe($.sass())
        .pipe($.rename('style.min.css'))
        .pipe(gulp.dest(distDir));
});
gulp.task('sass-prod', function() {
    return gulp.src(sassDir + 'style.scss')
        .pipe($.plumber({ errorHandler: onError }))
        .pipe($.sass())
        .pipe($.minifyCss())
        .pipe($.rename('style.min.css'))
        .pipe(gulp.dest(distDir));
});


gulp.task('scripts-dev', function() {
    return gulp.src([jsDir + jquerySrc, jsDir + '**/*.js'])
        .pipe($.concat('main.js'))
        .pipe(gulp.dest(distDir))
        .pipe($.rename('main.min.js'))
        .pipe($.header(banner, meta))
        .pipe(gulp.dest(distDir));
});
gulp.task('scripts-prod', function() {
    return gulp.src([jsDir + jquerySrc, jsDir + '**/*.js'])
        .pipe($.concat('main.js'))
        .pipe(gulp.dest(distDir))
        .pipe($.rename('main.min.js'))
        .pipe($.uglify())
        .pipe($.header(banner, meta))
        .pipe(gulp.dest(distDir));
});

gulp.task('watch-dev', ['sass-dev', 'scripts-dev'], function() {
    gulp.watch(jsDir + '**/*.js', ['scripts-dev']);
    gulp.watch(sassDir + '**/*.scss', ['sass-dev']);
});

gulp.task('serve', function () {
    browserSync.init(null, {
        server: {
            baseDir: ['web']
        },
        notify: false
    });

    gulp.watch(['web/**/*.html'], reload);
    gulp.watch(jsDir + '**/*.js', ['scripts-dev', reload]);
    gulp.watch(sassDir + '**/*.scss', ['sass-dev', reload]);
});

gulp.task('dev', ['watch-dev']);
gulp.task('prod', ['sass-prod', 'scripts-prod']);
