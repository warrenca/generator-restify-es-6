/*jslint node: true, indent: 2 */
'use strict';
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg     : grunt.file.readJSON('package.json'),
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['app.js',
               'server.es',
               './routes/**/*.es',
               './adaptors/**/*.es',
               './services/**/*.es'
              ]
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: ['babel-register', 'test/helpers.es'],
          slow: 5000,
          timeout: 10000
        },
        src: ['test/**/*.es']
      }
    },
    watch: {
      script: {
        files: ['app.js',
                'server.es',
                './routes/**/*.es',
                './adaptors/**/*.es',
                './services/**/*.es',
                './test/**/*.es'
                ],
        tasks: ['default'],
        options: {
          spawn: true,
          interrupt: false
        }
      },
    },
    notify_hooks: {
      options: {
        enabled: true,
        max_eslint_notifications: 5, // maximum number of notifications from jshint output
        success: true, // whether successful grunt executions should be notified automatically
        duration: 3 // the duration of notification in seconds, for `notify-send only
      }
    },
    env : {
      test : {
        src : "./.env.test.ini"
      }
    }
  });

  // On watch events, if the changed file is a test file then configure mochaTest to only
  // run the tests from that file. Otherwise run all the tests
  var defaultTestSrc = grunt.config('mochaTest.test.src');
  grunt.event.on('watch', function(action, filepath) {
    grunt.config('mochaTest.test.src', defaultTestSrc);
    if (filepath.match('test/')) {
      grunt.config('mochaTest.test.src', filepath);
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-env');

  // Default task(s).
  // grunt.registerTask('default', ['env:test', 'mochaTest', 'eslint', 'watch']);
  grunt.registerTask('default', ['env:test', 'mochaTest', 'eslint', 'watch']);

};
