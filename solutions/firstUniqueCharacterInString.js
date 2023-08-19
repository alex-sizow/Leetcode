// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

const firstUniqChar = (s) => {
	const map = new Map();
	for (let l of s) {
		!map.has(l) ? map.set(l, 1) : map.set(l, -1);
	}
	for (let i of map) {
		if (i[1] === 1) return s.indexOf(i[0]);
	}
	return -1;
};
