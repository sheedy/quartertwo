module.exports = {

  options: {
    banner: '/*!\n * <%= pkg.name %> - v<%= pkg.version %>\n * <%= grunt.template.today("yyyy-mm-dd") %>\n**/\n'
  },

  my_target: {
    files: {
      '<%= build %>/js/script.min.js': [
      '<%= src %>/js/script.js'
      ]
    }
  }

}