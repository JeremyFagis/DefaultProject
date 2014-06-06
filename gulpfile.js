var gulp = require('gulp'),
  sass   = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  plumber = require('gulp-plumber'),
  gutil = require('gulp-util'),
  watch = require('gulp-watch'),
  minifyCSS = require('gulp-minify-css')
  header = require('gulp-header'),
  meta   = require('./package.json');

var jsDir   = 'public/js/',
    sassDir = 'public/sass/',
    distDir = 'dist',
    jquerySrc = 'vendors/jquery-1.10.2.min.js',
    banner = [
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
  gutil.beep();
  console.log(err.toString());
  this.emit('end');
};

gulp.task('sass-dev', function() {
  return gulp.src(sassDir + 'style.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(distDir));
});
gulp.task('sass-prod', function() {
  return gulp.src(sassDir + 'style.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass())
    .pipe(rename('style.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(distDir));
});


gulp.task('scripts-dev', function() {
  return gulp.src([jsDir + jquerySrc, jsDir + '**/*.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(distDir))
    .pipe(rename('main.min.js'))
    .pipe(header(banner, meta))
    .pipe(gulp.dest(distDir));
});
gulp.task('scripts-prod', function() {
  return gulp.src([jsDir + jquerySrc, jsDir + '**/*.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(distDir))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(header(banner, meta))
    .pipe(gulp.dest(distDir));
});

gulp.task('watch-dev', ['sass-dev', 'scripts-dev'], function() {
  gulp.watch(jsDir + '**/*.js', ['scripts-dev']);
  gulp.watch(sassDir + '**/*.scss', ['sass-dev']);
});
gulp.task('watch-prod', ['sass-dev', 'scripts-dev'], function() {
  gulp.watch(jsDir + '**/*.js', ['scripts-prod']);
  gulp.watch(sassDir + '**/*.scss', ['sass-prod']);
});

gulp.task('dev', ['watch-dev']);
gulp.task('prod', ['watch-prod']);
