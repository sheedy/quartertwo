module.exports = {

  build: {
    options: {
      banner: '/*!\n * QuarterTwo v<%= pkg.version %> | <%= pkg.author %> | MIT Licensed\n **/\n'
    },
    files: {
      '<%= build %>/css/main.css': ['<%= build %>/css/*.css']
    }
  }
}