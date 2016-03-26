const glob = require('glob');
const prettyBytes = require('pretty-bytes');
const gzipSize = require('gzip-size');
const _ = require('lodash');
const fs = require('fs');
process.chdir(__dirname);
process.chdir('../build');
fs.writeFileSync('file-sizes.txt', glob.sync('*.js').map(file => {
    const content = fs.readFileSync(file);
    return `${
        _.padStart(prettyBytes(content.length), 10)
        }, ${
        _.padStart(prettyBytes(gzipSize.sync(content)), 10)
        } gz ${file}`;
}).join('\n'));
