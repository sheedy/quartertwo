module.exports = {

  // Clean/delete out directories and/or their contents
  // https://github.com/gruntjs/grunt-contrib-clean

  options: {
    force: true
  },

  build: {

    files: [{
      dot: true,
      cwd: '.',
      src: [
        '<%= build %>/**/*',
        '!<%= build %>/.git*' // if you want to keep build directory under version control
      ]
    },
    {
      dot: true,
      cwd: '.',
      src: [
        '<%= temp %>**/*'
      ]
    }]
  },

  server: {
    files: [{
      dot: true,
      cwd: '.',
      src: [
        '<%= temp %>**/*'
      ]
    }]
  }

}