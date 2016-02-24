module.exports = {

  all: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= src %>',
      dest: '<%= temp %>',
      src: [
        '*.html',
        // '../vendor/**/*',
        'js/**/*',
        'images/{!(svg-src),!(svg-build),**}/**'
      ]
    }]
  },

  vendor: {
    files: [{
      expand: true,
      flatten: true,
      dot: true,
      cwd: 'vendor/bower_components/',
      dest: '<%= temp %>/vendor',
      src: [
        'vivus/dist/vivus.min.js'
      ]
    }]
  },

  build: {
    files: [{
      expand: true,
      flatten: true,
      dot: true,
      cwd: 'vendor/bower_components/',
      dest: '<%= build %>/vendor',
      src: [
        'vivus/dist/vivus.min.js'
      ]
    }],
    files: [{
      expand: true,
      flatten: true,
      dot: true,
      cwd: '.',
      dest: '<%= build %>/',
      src: [
        'CNAME'
      ]
    }]
  },

}