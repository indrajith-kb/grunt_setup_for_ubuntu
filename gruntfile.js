module.exports = function (grunt) {
    grunt.initConfig({
      watch: {
        src: {
          files: ['**/*.scss'],
          tasks: ['sass:dev','cssmin']
        },
        options: {
          livereload: true,
        },
      },
      sass: {
        options: {
          sourcemap: false,
          precision: 8,
          lineNumbers: true
        },
        dev: {
          files: [{
            expand: 'expanded',
            check: false,
            update: false,
            cwd: './scss',
            src: ['*.scss'],
            dest: './css',
            ext: '.css'
          }]
        },
  
      },
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: './css',
            src: ['*.css', '!*.min.css'],
            dest: './css',
            ext: '.min.css'
          }]
        }
      }
      // todo: Create a task for production (sass: dist).
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
  };
  