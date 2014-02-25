This plugin is deprecated as there is no need for it anymore.

Just use the following gulp-web-module configuration instead (and include reactify in your package.json)
```javascript
  require('gulp-web-modules')(
    browserify: {
      transform: ['reactify']
    }
  });
```