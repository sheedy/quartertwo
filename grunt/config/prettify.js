module.exports = {

  build: {
    options: {
      config: '.prettifyrc'
    },
    files: {
      '<%= build %>/index.html': ['<%= src %>/index.html']
    }
  }

}