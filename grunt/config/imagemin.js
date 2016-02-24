module.exports = {

  build: {
    options: {
      optimizationLevel: 5
    },
    files: [{
      expand: true,
      flatten: false,
      cwd: '<%= src %>/images',
      src: ['**/*.{png,jpg,gif,svg}'],
      dest: '<%= build %>/images'
    }]
  }

}