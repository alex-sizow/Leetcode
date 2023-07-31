// Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.

// Example 1:
// Input: s1 = "sea", s2 = "eat"
// Output: 231
// Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
// Deleting "t" from "eat" adds 116 to the sum.
// At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

// Example 2:
// Input: s1 = "delete", s2 = "leet"
// Output: 403
// Explanation: Deleting "dee" from "delete" to turn the string into "let",
// adds 100[d] + 101[e] + 101[e] to the sum.
// Deleting "e" from "leet" adds 101[e] to the sum.
// At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
// If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.

const minimumDeleteSum = (s1, s2) => {
	let dp = {};

	return solve(0, 0);

	function solve(i, j) {
		if (dp[`${i}.${j}`]) return dp[`${i}.${j}`];
		if (i >= s1.length && j < s2.length) {
			var temp = 0;
			for (let k = j; k < s2.length; k++) {
				temp += s2[k].charCodeAt(0);
			}
			return temp;
		}
		if (j >= s2.length && i < s1.length) {
			var temp = 0;
			for (let k = i; k < s1.length; k++) {
				temp += s1[k].charCodeAt(0);
			}
			return temp;
		}
		if (i >= s1.length && j >= s2.length) {
			return 0;
		}

		if (s1[i] != s2[j]) {
			var one = s1[i].charCodeAt(0) + solve(i + 1, j);
			var two = s2[j].charCodeAt(0) + solve(i, j + 1);
		} else {
			return (dp[`${i}.${j}`] = solve(i + 1, j + 1));
		}

		return (dp[`${i}.${j}`] = Math.min(one, two));
	}
};
