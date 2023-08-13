// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
// In the American keyboard:
// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Example 1:
// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]

// Example 2:
// Input: words = ["omk"]
// Output: []

// Example 3:
// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]

const findWords = function (words) {
	function checkFirstRow(letter) {
		return [
			'q',
			'w',
			'e',
			'r',
			't',
			'y',
			'u',
			'i',
			'o',
			'p',
		].includes(letter);
	}
	function checkSecondRow(letter) {
		return [
			'a',
			's',
			'd',
			'f',
			'g',
			'h',
			'j',
			'k',
			'l',
		].includes(letter);
	}
	function checkThirdRow(letter) {
		return ['z', 'x', 'c', 'v', 'b', 'n', 'm'].includes(
			letter,
		);
	}
	let count = [];
	for (let i = 0; i < words.length; i++) {
		if ([...words[i].toLowerCase()].every(checkFirstRow)) {
			count.push(words[i]);
		} else if (
			[...words[i].toLowerCase()].every(checkSecondRow)
		) {
			count.push(words[i]);
		} else if (
			[...words[i].toLowerCase()].every(checkThirdRow)
		) {
			count.push(words[i]);
		}
	}

	return count;
};
