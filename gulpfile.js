const { src, dest, parallel, watch, series } = require("gulp");
const fs = require("fs");
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglifyEs = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const htmlbeautify = require('gulp-html-beautify');
const image = require('gulp-image');

// Static Server
function gulpServer(cb)
{
    browserSync.init({
        server:{
            baseDir: "./app"
        }
    });
}

// updating all the javascript Scenes
function updateScenes()
{
    return src("./scenes/**/*.js")
        .pipe(concat("scenes.js"))
        .pipe(uglifyEs())
        .pipe(dest("app/js/"));
}

// updating all the javascript Supers
function updateSupers()
{
    return src("./supers/**/*.js")
        .pipe(concat("supers.js"))
        .pipe(uglifyEs())
        .pipe(dest("app/js/"));
}

// updating all the javascript Sprites
function updateSprites()
{
    return src("./sprites/**/*.js")
        .pipe(concat("sprites.js"))
        .pipe(uglifyEs())
        .pipe(dest("app/js/"));
}

// updateing all the js functions
function updateFunctions()
{
    return src("./functions/**/*.js")
        .pipe(concat("functions.js"))
        .pipe(uglifyEs())
        .pipe(dest("app/js/"));
}

// update the game.js file
function updateGame()
{
    return src("./game.js")
        .pipe(concat("game.js"))
        .pipe(uglifyEs())
        .pipe(dest("app/js/"));
}

// update the html file
function updateHtml()
{
    let options = {indentSize: 1};
        return src('./index.html')
        .pipe(htmlbeautify(options))
        .pipe(dest('app/'));
}

// update and compile the Sass
function updateSass()
{
    return src('./src/container.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('app/src'));
}

// updateing all js libraries
function updateLibJs()
{
    return src('./lib/**/*.js')
        .pipe(dest('app/lib'));
}

// updating all css libraries
function updateLibCss()
{
    return src('./lib/**/*.css')
        .pipe(dest('app/lib'));
}

function updateAssets()
{
    return src('./src/assets/**/*.{png, jpg, jpeg, gif, svg}')
        .pipe(image())
        .pipe(dest('app/src/assets'));
}

// reloadBrowsers to reload all connected browsers
function reloadBrowsers(cb)
{
    browserSync.reload();
    cb();
}

// message the display the update has been finished
function messageUpdate(cb)
{
    console.log(" ____ ** FINISHED UPDATE ** ____");
    cb();
}

// default function
function container(cb)
{
    watch(["./game.js",
         "./supers/**/*.js",
         "./sprites/**/*.js",
         "./scenes/**/*.js",
         "./functions/**/*.js",
         "./index.html",
         "./lib/**/*.js",
         "./lib/**/*.css",
         "./src/**/*.sass"
       ],
         series(
           updateSass,
           updateHtml,
           updateSupers,
           updateSprites,
           updateScenes,
           updateFunctions,
           updateGame,
           updateLibJs,
           updateLibCss,
           messageUpdate,
           reloadBrowsers
         )
       );
    cb();
}

// default to crop and compile all files (without assets)
exports.compile = parallel( updateHtml,
                               updateSass,
                               updateSupers,
                               updateSprites,
                               updateScenes,
                               updateFunctions,
                               updateLibJs,
                               updateLibCss,
                               updateGame,
                               messageUpdate
                              );
exports.serve = gulpServer;
exports.watcher = container;
exports.default = parallel( gulpServer, container);
