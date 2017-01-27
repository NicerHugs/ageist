'use strict';

function count(data) {
	const ageCt = data.split('\n').reduce((a,b) => {
		if (b) {
			const age = b.split(',')[1];
			if (a[age]) {
				a[age] += 1;
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
	return result;
}

module.exports = count;
