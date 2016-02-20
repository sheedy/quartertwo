module.exports = function(grunt) {

  grunt.registerTask('serve', function (target) {

    if (target === 'build') {

      return grunt.task.run([
        'build',
        'open',
        'connect:build:keepalive'
        ]);

    }

    grunt.task.run([
      'clean:server',
      'sass:server',
      'copy',
      'connect:livereload',
      'open:server',
      'watch'
      ]);
  });

}