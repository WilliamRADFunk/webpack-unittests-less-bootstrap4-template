var webpackConfig = require('./webpack.config.js');
// webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    reporters: ['progress'],
    port: 9876,
    colors: false,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    autoWatchBatchDelay: 300,

    files: [
      './src/index.js',
      './tests/**/*.js'],

    preprocessors: {
      './src/index.js': ['webpack'],      
      './tests/**/*.spec.js': ['babel']
    },

    plugins : [
        'karma-webpack',
        'karma-babel-preprocessor',
        'karma-junit-reporter',
        'karma-chrome-launcher',
        'karma-jasmine'
    ],

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
}