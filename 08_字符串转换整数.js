/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
	let result = [];
	let positive = true;
	let startWith0Count = 0;
	let numStrs = '0123456789';
	let validCount = 0;
	s = s.trim();
	while (
		(s.startsWith('0') || s.startsWith('-') || s.startsWith('+')) &&
		!numStrs.includes(numStrs.substring(1))
	) {
		if (s.startsWith('0')) startWith0Count += 1;
		if (s.startsWith('+')) validCount += 1;
		if (s.startsWith('-')) validCount += 1;
		s = s.substring(1);
	}
	if (
		(startWith0Count > 1 && validCount > 0) ||
		(startWith0Count === 0 && validCount > 1)
	) {
		console.log('1');
		return 0;
	}
	for (const iterator of s) {
		if (numStrs.includes(iterator)) {
			result.push(iterator);
		}
	}
	let resultNum = Number(result.join('')) * (positive ? 1 : -1);
	if (resultNum >= 2 ** 31) {
		resultNum = 2 ** 31 - 1;
	}
	if (resultNum < -(2 ** 31)) {
		resultNum = -(2 ** 31);
	}
	return resultNum;
};

console.log(myAtoi('+-11'));
