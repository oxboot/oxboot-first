let mix = require('laravel-mix');

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

mix.setPublicPath("./");

// Settings for Default Oxboot Starter Theme
mix.js('htdocs/content/themes/theme/assets/scripts/theme.js', 'htdocs/content/themes/theme/dist/scripts/theme.js')
  .sass('htdocs/content/themes/theme/assets/styles/theme.scss', 'htdocs/content/themes/theme/dist/styles/theme.css');
