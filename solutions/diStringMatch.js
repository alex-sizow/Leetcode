// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

// Example 1:
// Input: s = "IDID"
// Output: [0,4,1,3,2]

// Example 2:
// Input: s = "III"
// Output: [0,1,2,3]

// Example 3:
// Input: s = "DDI"
// Output: [3,2,0,1]

const diStringMatch = (s) => {
	const amount = [];
	let countI = 0;
	let countD = s.length;

	for (let i in s) {
		if (s[i] === 'I') {
			amount.push(countI);
			countI++;
		} else {
			amount.push(countD);
			countD--;
		}
	}

	amount.push(s.at(-1) === 'I' ? countD : countI);

	return amount;
};
