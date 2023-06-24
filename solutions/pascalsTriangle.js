// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

const generate = (numRows) => {
	let res = [];
	if (numRows === 0) {
		return res;
	}
	res.push([1]);
	for (let i = 1; i < numRows; i++) {
		let count = [];
		count.push(1);
		for (let a = 1; a < res[i - 1].length; a++) {
			let sum = res[i - 1][a - 1] + res[i - 1][a];
			count.push(sum);
		}
		count.push(1);
		res.push([...count]);
	}

	return res;
};
