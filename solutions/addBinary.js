// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

const addBinary = (a, b) => {
	let first;
	let second;
	if (a.length >= b.length) {
		first = a;
		second = b;
	} else {
		first = b;
		second = a;
	}
	let res = 0;
	let answer = '';
	for (let i = 0; i < first.length; i++) {
		if (!second.at(-1 - i)) {
			answer = `${(res + first.at(-1 - i) / 1) % 2}` + answer;
			res = Math.max(0, res + first.at(-1 - i) / 1 - 1);
		} else if (
			first.at(-1 - i) + second.at(-1 - i) ===
			'11'
		) {
			answer = res + answer;
			res = 1;
		} else if (
			(first.at(-1 - i) + second.at(-1 - i)).includes('1')
		) {
			answer = `${(res + 1) % 2}` + answer;
		} else if (res === 1) {
			answer = res + answer;
			res = 0;
		} else {
			answer = '0' + answer;
		}
	}
	if (res === 1) {
		return '1' + answer;
	}
	return answer;
};