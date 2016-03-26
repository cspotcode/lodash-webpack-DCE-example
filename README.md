# LoDash dead code removal example

This project bundles LoDash with webpack, emitting bundles that are un-mangled and un-compressed so you can see what is
and isn't removable via dead code elimination.

There are two main entry points:

* src/named-export.js imports `{isObject} from 'lodash-es';`
* src/path-to-file.js imports `isObject from 'lodash-es/isObject';`

For each entry point, bundles are created at several levels of minification:

* `[name].js`: Raw output from webpack, with all unused exports left un-exported.  No uglification.
* `[name]-uglified.js`: Webpack output with dead code removed by Uglify.  Output is unmangled and prettified so you can inspect it more easily.
* `[name]-uglified-mangled.js`: Bundle is totally minified.

In all of lodash-es's .default.js files, object literal property value shorthand has been replaced so that Babel transpilation is not necessary.

```
// Instead of this:
export default {foo, bar};
// do this:
export default {foo: foo, bar: bar};
```
