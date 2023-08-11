// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, return the Hamming distance between them.

// Example 1:
// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

// Example 2:
// Input: x = 3, y = 1
// Output: 1

const hammingDistance = (x, y) => {
	let binX = x.toString(2);
	let binY = y.toString(2);
	let lenDiff = Math.abs(binX.length - binY.length);
	if (binX.length < binY.length) {
		binX = '0'.repeat(lenDiff) + binX;
	} else {
		binY = '0'.repeat(lenDiff) + binY;
	}
	let count = 0;
	for (let i = 0; i < binX.length; i++) {
		if (binX[i] !== binY[i]) {
			count += 1;
		}
	}
	return count;
};
