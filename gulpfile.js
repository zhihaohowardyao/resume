var gulp      = require('gulp'),
    webserver = require('gulp-webserver');

var server = {
  host: '0.0.0.0',
  port: '8080'
}

gulp.task('webserver', function () {
  gulp.src( '.' )
    .pipe(webserver({
      host:                server.host,
      port:                server.port,
      livereload:          true,
      directoryListing:    true 
    }))
});


gulp.task('default', ['webserver']);