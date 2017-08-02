const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const TS_FILE = "src/**/*.ts";

// Intégrer la configuration typescript au projet
const tsProject = ts.createProject('tsconfig.json');

// Tache de transpilation ts vers js
gulp.task('typescript', () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
})

// Traitement des fichiers JSON
gulp.task('json-files', () => {
    return gulp.src(JSON_FILES)
        .pipe(gulp.dest("dist"));
})

// Tache de surveillance des sources et au cas ou compilation de celle-ci.
gulp.task('watch', () => {
    gulp.watch(TS_FILE, ['typescript']);
    gulp.watch(JSON_FILES, ['json-files'])
})

gulp.task('default', ['typescript', 'json-files']);
