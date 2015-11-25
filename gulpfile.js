var gulp = require('gulp');

var bowerPath = "./bower_components";
var jsPath = "./js/vendor";
var cssPath = "./css/vendor";
var fontPath = "./fonts/vendor";

gulp.task('init', function() {
    // jquery
    console.log('copy jquery');
    gulp.src(bowerPath+"/jquery/dist/jquery*")
    .pipe(gulp.dest(jsPath));

    // bootstrap
    console.log('copy bootstrap js');
    gulp.src(bowerPath+"/bootstrap/dist/js/bootstrap*")
    .pipe(gulp.dest(jsPath));

    console.log('copy bootstrap css');
    gulp.src(bowerPath+"/bootstrap/dist/css/*")
    .pipe(gulp.dest(cssPath));

    console.log('copy bootstrap fonts (glyphicons)')
    gulp.src(bowerPath+"/bootstrap/dist/fonts/*")
    .pipe(gulp.dest(fontPath));

    // fontawesome
    console.log('copy fontawesome css')
    gulp.src(bowerPath+"/font-awesome/css/*")
    .pipe(gulp.dest(cssPath + "/font-awesome/css"));

    console.log('copy fontawesome fonts')
    gulp.src(bowerPath+"/font-awesome/fonts/*")
    .pipe(gulp.dest(cssPath + "/font-awesome/fonts"));
});

gulp.task('default', function() {
    console.log('default');
});