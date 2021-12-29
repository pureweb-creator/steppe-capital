var
    gulp            = require("gulp"),
    rename          = require("gulp-rename"),
    sourcemaps      = require("gulp-sourcemaps"),
    uglify          = require("gulp-uglifyes"),
    plumberNotifier = require("gulp-plumber-notifier"),
    browserSync     = require("browser-sync").create(),
    webp            = require("gulp-webp"),
    wait            = require("gulp-wait"),
    sass            = require("gulp-sass");

function livereload(done){
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });  
    
    done();
}

function browserReload(done){
    browserSync.reload();
    done();
}

function build(done){
    gulp.src("./static/scss/**/*.scss")
        .pipe(wait(200))
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: "compressed"
        }))
        .on("error", console.error.bind(console))
        .pipe(rename({suffix: ".min"}))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./static/css/"))
        .pipe(browserSync.stream());
    done();
}

function jsBuild(done){
	gulp.src('./static/js/**/main.js')
        .pipe(plumberNotifier())
		.pipe(sourcemaps.init())
		.pipe(uglify({
            mangle: false,
            ecma: 6
        }))
		.pipe(rename({suffix: ".min"}))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest("./static/js/"))
		.pipe(browserSync.stream());
	done();
}


function imgToWebp(done){
    gulp.src(['./static/img/*.jpg','./static/img/*.png','./static/img/*.tiff'])
        .pipe(webp())
        .pipe(gulp.dest('static/img'))
    done();
}

function watch(){
    gulp.watch("./static/scss/**/*.scss", build);
    gulp.watch("./*.html", browserReload);
    gulp.watch("./static/js/**/main.js", jsBuild);
    gulp.watch("php/**/*.php", browserReload);
    gulp.watch(['./static/img/*.jpg','./static/img/*.png','./static/img/*.tiff'], imgToWebp);
}

gulp.task("default", gulp.parallel(watch, livereload));
gulp.task(livereload);