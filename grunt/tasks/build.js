module.exports = function(grunt) {

  grunt.registerTask('build', function (target) {

    grunt.task.run([
      'clean:build',
      'sass:build',
      'copy:build',
      'imagemin',
      'cssmin',
      'prettify',
      'uglify'
      ]);
  });

}