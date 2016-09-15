module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      options: {
        separator: ';'
      },
      default: {
        src: ['js/jquery-3.1.0.min.js','js/materialize.min.js','js/snap.js','js/jquery.smoothState.min.js','js/sidebar.js','js/functions.js','js/bootstrap.min.js','js/contactForm.js','js/cookiechoices.js'],
        dest: 'js/built.js'
      }
    },
    cssmin: {
      target: {
        src: ['css/keyframes.css'],
        dest: 'css/keyframes.min.css'
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-css');
    
  grunt.registerTask('default', ['uglify','cssmin']);
}