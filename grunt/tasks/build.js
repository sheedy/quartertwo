module.exports = function(grunt) {

  grunt.registerTask('build', function (target) {

    grunt.task.run([
      'clean:build',
      'sass:build',
      'copy:vendor_build',
      'imagemin',
      'cssmin',
      'prettify',
      'uglify'
      ]);
  });

}