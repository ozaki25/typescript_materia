'use strict';

let gulp = require('gulp');
let runSequence = require('run-sequence');
let exec = require('child_process').exec;
let browserify = require('browserify');
let soruceStream = require('vinyl-source-stream');
let typedoc = require('gulp-typedoc');

// default
gulp.task('default', ['build']);

// build
gulp.task('build', () => {
    runSequence(['tsc', 'html'], 'browserify');
});

// tsc
gulp.task('tsc', (cb) => {
    exec('tsc', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(); // can pass err, but not recommend this time.
    });
});

// copy html.
gulp.task('html', () => {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});

// browserify
gulp.task('browserify', () => {
    browserify({
        entries: 'dist/app/script/app.js'
    })
    .bundle()
    .pipe(soruceStream('main.js'))
    .pipe(gulp.dest('dist/app'));
});

// typedoc
gulp.task('typedoc', () => {
    gulp.src(['src/app/**/*.ts', 'typings/**/*.d.ts'])
        .pipe(typedoc({
            mode: 'modules',
            module: 'umd',
            target: 'es5',
            out: 'docs',
            name: 'My project title'
        }));
});
