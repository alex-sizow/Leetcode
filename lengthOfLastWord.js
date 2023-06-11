// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.


const lengthOfLastWord = (s) => {
	const punctuation =
		s.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) || [];
	let lastWord = '';
	for (let i in s) {
		if (
			(punctuation.includes(s[s.length - 1 - i]) ||
				s[s.length - 1 - i] === ' ') &&
			lastWord.length > 0
		) {
			return lastWord.length;
		} else if (
			punctuation.includes(s[s.length - 1 - i]) ||
			s[s.length - 1 - i] === ' '
		) {
		} else {
			lastWord = s[s.length - 1 - i] + lastWord;
		}
	}
	return lastWord.length;
};
