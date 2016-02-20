module.exports = {

  all: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= src %>',
      dest: '<%= temp %>',
      src: [
      '*.html',
      '../vendor/**/*',
      'js/**/*'
      ]
    }]
  },

  images: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= src %>/images',
      dest: '<%= temp %>/images',
      src: [
      '{!(svg-src),!(svg-build),**}/**'
      ]
    }]
  },

  vendor: {
    files: [{
      expand: true,
      dot: true,
      cwd: 'vendor/bower_components',
      dest: '<%= temp %>/vendor',
      src: [ '**/*' ]
    }]
  },

}