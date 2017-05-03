"use strict";

const fse = require('fs-extra');
const path = require('path');

// copy ui build folder into api/app/static
try {
  fse.copySync(
    path.join(__dirname, '..', 'ui', 'build'),
    path.join(__dirname, '..', 'api', 'app', 'static'));
  console.log('success!');
} catch (err) {
  console.error(err);
}