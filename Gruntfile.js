module.exports = function(grunt){
  
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssc: {
      build: {
        options: {
          consolidateViaDeclarations: true,
          consolidateViaSelectors:    true,
          consolidateMediaQueries:    false,
          compress:                   true
        },
        files: {
          'css/build/ashuttl.css': 'css/build/ashuttl.css'
        }
      }
    },

    cmq: {
      your_target: {
        files: {
          'css/build/': ['css/build/ashuttl.css']
        }
      }
    },

    cssmin: {
      build: {
        src: 'css/build/ashuttl.css',
        dest: 'css/build/ashuttl.css'
      }
    },

    sass: {
      build: {
        files: {
          'css/build/ashuttl.css': 'css/ashuttl.sass'
        }
      }
    },

    autoprefixer: {
      build: {
        src: 'css/build/ashuttl.css',
        dest: 'css/build/ashuttl.css'
      }
    },

    watch: {
      css: {
        files: ['css/*.sass'],
        tasks: ['buildcss']
      }
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('buildcss', ['sass', 'autoprefixer', 'cssc', 'cmq', 'cssmin']);

};