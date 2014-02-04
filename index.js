module.exports = function(options, React) {
  React = React || require('gulp-react');
  options = options || {};

  return {
    javascript: {
      glob: ['**/*.jsx', '**/*.js'],
      beforeMerge: function(_options, pipeline) {
        return pipeline.pipe(React(options));
      }
    }
  }
};
