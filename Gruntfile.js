module.exports = function(grunt){
  
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssc: {
      build: {
        options: {
          consolidateViaDeclarations: true,
          consolidateViaSelectors:    true,
          consolidateMediaQueries:    true
        },
        files: {
          'css/build/ashuttl.css': 'css/build/ashuttl.css'
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

    watch: {
      css: {
        files: ['css/*.sass'],
        tasks: ['buildcss']
      }
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('buildcss', ['sass', 'autoprefixer', 'cssc', 'cssmin']);

};