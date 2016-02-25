module.exports = {

  options: {
    config: '.prettifyrc'
  },
  build: {
    expand: true,
    ext: '.html',
    cwd: '<%= src %>/',
    src: ['**/*.html'],
    dest: '<%= build %>/'
  }

}