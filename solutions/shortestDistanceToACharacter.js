// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.
// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

// Example 1:
// Input: s = "loveleetcode", c = "e"
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
// The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
// The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
// For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
// The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.

// Example 2:
// Input: s = "aaab", c = "b"
// Output: [3,2,1,0]

function shortestToChar(s, c) {
	const indexOfC = [];
	const output = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === c) {
			indexOfC.push(i);
		}
	}
	for (let i = 0; i < s.length; i++) {
		output[i] = +Infinity;
		for (let j = 0; j < indexOfC.length; j++) {
			if (i === indexOfC[j]) {
				output[i] = 0;
				break;
			} else {
				if (Math.abs(indexOfC[j] - i) > output[i]) break;
				output[i] = Math.min(
					output[i],
					Math.abs(indexOfC[j] - i),
				);
			}
		}
	}

	return output;
}
