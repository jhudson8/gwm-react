gulp-web-modules plugin used to scan for all jsx files and compile them

Usage
-----
Place any jsx files within any section directories and they will be converted to javascipt using [gulp-react](https://github.com/sindresorhus/gulp-react) before the merge

Install
------
Add *gwm-react* **and** *reactify* to package.json

Add this plugin to the gulp-web-module reference in your gulpfile
```javascript
    var gulpWebModules = require('gulp-web-modules'),
        gwmReact = require('gwm-react');

    gulpWebModules({
      plugins: [
        gwmReact(options[, gulp-react instance])
      ]
    }).injectTasks(gulp);
```

Options
-------
The options are a pass through to the gulp-react module with the second parameter as the gulp-react instance to use one other than the default
