// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

// Example 2:
// Input: num = 0
// Output: 0

const addDigits = (num) => {
	const digits = (n) => {
		return [...(n + '')].reduce(function (
			previousValue,
			currentValue,
		) {
			return previousValue + currentValue * 1;
		},
		0);
	};
	num = digits(num);
	while ([...(num + '')].length > 1) {
		num = digits(num);
	}
	return num;
};
