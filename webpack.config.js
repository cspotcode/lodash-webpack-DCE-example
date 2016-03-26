"use strict";
var path = require('path');
var webpack = require('webpack');

var dir_js = path.resolve(__dirname, 'src');
var dir_build = path.resolve(__dirname, 'build');

function config(name, doUglify, doMangle) {
    function entryName(name) {
        return `${ name }${ doUglify ? '-uglified' : '' }${ doMangle ? '-mangled' : '' }`;
    }
    return {
        entry: {
            [entryName(name)]: path.resolve(dir_js, `${ name }.js`)
        },
        output: {
            path: dir_build,
            filename: '[name].js',
            pathinfo: true
        },
        plugins: [
            doUglify && new webpack.optimize.UglifyJsPlugin({
                compress: {},
                mangle: doMangle,
                beautify: !doMangle,
                output: {
                    comments: doMangle ? false : undefined
                }
            })
        ].filter(Boolean),
        stats: {
            // Nice colored output
            colors: true
        },
        // Create source maps for the bundle
        devtool: 'source-map'
    };
}

function bundlesForEntry(name) {
    return [config(name, true, true), config(name, true, false), config(name, false, false)]
}

module.exports = []
    .concat(bundlesForEntry('named-export'))
    .concat(bundlesForEntry('path-to-file'))
    .concat(bundlesForEntry('wildcard'));
