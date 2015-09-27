var del = require('del');
var gulp = require('gulp');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json', {typescript: require('typescript')});

gulp.task('js', function() {
    var tsResult = tsProject.src()     
      .pipe(ts(tsProject));
    
    return tsResult.js
      .pipe(rename({dirname: ''}))
      .pipe(gulp.dest('dist/'));
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(done) {
  del(['dist'], done);
});

gulp.task('libs', function () {
    return gulp.src([
          'bundle/angular2.dev.js',
          'node_modules/traceur/bin/traceur-runtime.js',
          'node_modules/es6-module-loader/dist/es6-module-loader.js',
          'node_modules/systemjs/dist/system.js'          
        ])
      .pipe(gulp.dest('dist/lib'));
});

gulp.task('default', ['js', 'libs', 'html']);