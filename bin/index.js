#! /usr/bin/env node
'use strict';

const fs = require('fs');
const count = require('../index.js');
const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (e, data) => {
	if (e) console.error(e);
	else console.log(count(data));
});
