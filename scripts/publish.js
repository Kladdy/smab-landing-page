'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

const sourcePath = upath.resolve(upath.dirname(__filename), '../dist/.');
const destPath = upath.resolve(upath.dirname(__filename), '../docs/');
    
sh.cp('-R', sourcePath, destPath)