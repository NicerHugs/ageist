#! /usr/bin/env node
'use strict';

const fs = require('fs');
const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (e,  data) => {
	const ageCt = data.split('\n').reduce((a,b) => {
		if (b) {
			console.log(b);
			const age = b.split(',')[1];
			if (a[age]) {
				a[age] = a[age] + 1;
			} else {
				a[age] = 1;
			}
		}
		return a;
	}, {});
	let result = [];
	for (let a in ageCt) {
		result.push([Number(a), ageCt[a]])
	}
	console.log(result);
	return result;
});
