const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.copy('resources/css/styles.css', 'resources/sass/_styles.scss')
    .copy('resources/css/success.css', 'resources/sass/_success.scss')
    .copy('resources/css/aos.css', 'resources/sass/_aos.scss')
    .copy('node_modules/@icon', 'public/icofont' )
    .copy('resources/js/main.js', 'public/js/main.js')
    .copy('resources/js/serialize.js', 'public/js/serialize.js')
    .copy('resources/js/jquery', 'public/js/jquery')
    .copy('resources/js/jquery-ui', 'public/js/jquery-ui')
    .copy('resources/js/js-easing-functions', 'public/js/js-easing-functions')
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();
