// import the plugins
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');
const minifyCss = require('gulp-minify-css');
const htmlTidy = require('gulp-htmltidy');
const runSequence = require('run-sequence');
const shell = require('gulp-shell');
const zip = require('gulp-zip');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const webpack = require('webpack-stream');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

// store the source files. These should be customized to work with your application
var jsFiles = ['app/**/*.js','*.js'];
var cssFiles = ['app/**/*.css','*.css'];
var htmlFiles = ['index.html','app/**/*.html'];
var assets = ['sp-config.json'];
var pushCommand;
if (process.platform === "win32") {
  // for Windows
  pushCommand = 'sp push -mainHtmlFile index.html';
} else {
  // for Mac and Linux
  pushCommand = '/Users/Aifred/Documents/sp_cmdln/sp.sh push -mainHtmlFile index.html';
}
// the build/dist folder. You can choose any name you like, but for this, it'll be called 'dist'
var distFolder = './dist/';
var path2sp = './Users/Aifred/Documents/sp_cmdln/';
/* 
  ============================================================================================================
                                            RUN CONFIGURATIONS
  ============================================================================================================
*/
// runs all of the build tasks at the same time
gulp.task('build-all', ['compile','webpack:build','build-js', 'build-styles', 'build-html', 'build-assets']);

// builds all files when launching gulp
gulp.task('default', function() {
  runSequence('build-all');
});

gulp.task('build-n-push', function() {
  runSequence('build-all', 'sp-push', 'watch');
});
/* 
  ============================================================================================================
                                            END RUN CONFIGURATIONS
  ============================================================================================================
*/

/* 
  ============================================================================================================
                                          COMMON TASK CONFIGURATIONS
  ============================================================================================================
*/
// clean the contents of the distribution directory
gulp.task('clean',function() {
  return del('dist/**/*');
});

// compile typescript
gulp.task('compile',['clean'],function() {
  return gulp.src('app/**/*.ts',{ base: './' })
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('./'))
});

// the task that lints, minifies, and concatenates javascript
gulp.task('build-js', function(callback) {
  return gulp.src(jsFiles)
    // .pipe(jshint({"lookup":false}))
    // .pipe(jshint.reporter('default'))
    .pipe(uglify().on('error', gutil.log))
    .pipe(concat('all-scripts.js'))
    .pipe(gulp.dest(distFolder));
});

// the task that minifies and concatenates css
gulp.task('build-styles', function() {
  return gulp.src(cssFiles)
    .pipe(minifyCss())
    .pipe(concat('all-styles.css'))
    .pipe(gulp.dest(distFolder));
});

// the task that tidies up the html
gulp.task('build-html', function() {
  return gulp.src(htmlFiles, { base: './' }) // base is specified to preserve sub-folders
    .pipe(htmlTidy())
    .pipe(gulp.dest(distFolder));
});

// just copies the assets to the dist folder
gulp.task('build-assets', function() {
  return gulp.src(assets, { base: './' })
    .pipe(gulp.dest(distFolder));
});
/* 
  ============================================================================================================
                                          END COMMON TASK CONFIGURATIONS
  ============================================================================================================
*/


/* 
  ============================================================================================================
                                          PRODUCTION TASK CONFIGURATIONS
  ============================================================================================================
*/
// Task to push contents within the 'dist' folder into the WCM server 
gulp.task('setupWCMdist', function() {
  gulp.src('./sp-config.json')
      .pipe(gulp.dest(distFolder));
});
gulp.task('sp-push',['setupWCMdist'],shell.task(pushCommand, { cwd: distFolder }));

// Task to ZIP 'dist' folder into a distributable format
gulp.task('package', function() {
  return gulp.src(distFolder+"**")
        .pipe(zip('scriptPortlet.zip'))
        .pipe(gulp.dest('dist'));
});
gulp.task("webpack:build", function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});
/* 
  ============================================================================================================
                                          END PRODUCTION TASK CONFIGURATIONS
  ============================================================================================================
*/

/* 
  ============================================================================================================
                                          DEVELOPMENT TASK CONFIGURATIONS
  ============================================================================================================
*/
// Task to constantly watch for changes in the folders to trigger the appropriate task to run
gulp.task('watch', function() {
  gulp.watch(htmlFiles, function() { runSequence('build-html') });
  gulp.watch(cssFiles, function() { runSequence('build-css') });
  gulp.watch(jsFiles, function() { runSequence('build-scripts') });
  gulp.watch(assets, function() { runSequence('build-assets') });
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;
// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);
gulp.task("webpack:build-dev", function(callback) {
  // run webpack
  devCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build-dev", err);
    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});
// task to start a development server
gulp.task("webpack-dev-server", function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "eval";
  myConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath: "/" + myConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});
/* 
  ============================================================================================================
                                          END DEVELOPMENT TASK CONFIGURATIONS
  ============================================================================================================
*/


