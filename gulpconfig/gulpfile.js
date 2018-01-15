var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('test', function () {
    console.log('Test Task');
});

//Compile SASS
gulp.task('sass', function () {
    return gulp.src('../scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest("../css"));
});

gulp.task('default',['test','sass']);