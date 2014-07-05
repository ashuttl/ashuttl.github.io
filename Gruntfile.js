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
          'css/build/ashuttl-exp.css': 'css/build/ashuttl-exp.css'
        }
      }
    },

    cmq: {
      your_target: {
        files: {
          'css/build/': ['css/build/ashuttl-exp.css']
        }
      }
    },

    cssmin: {
      build: {
        src: 'css/build/ashuttl-exp.css',
        dest: 'css/build/ashuttl.css'
      }
    },

    sass: {
      build: {
        files: {
          'css/build/ashuttl-exp.css': 'css/ashuttl.sass'
        }
      }
    },

    autoprefixer: {
      build: {
        src: 'css/build/ashuttl-exp.css',
        dest: 'css/build/ashuttl-exp.css'
      }
    },

    watch: {
      sass: {
        files: ['css/*.sass'],
        tasks: ['buildcss']
      },
      scss: {
        files: ['css/*.scss'],
        tasks: ['buildcss']
      }
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('buildcss', ['sass', 'autoprefixer', 'cssc', 'cmq', 'cssmin']);

};