// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Example 1:
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

function commonChars(words) {
	const charFreqs = new Map();
	for (let char of words[0]) {
		charFreqs.set(char, (charFreqs.get(char) || 0) + 1);
	}
	for (let i = 1; i < words.length; i++) {
		const wordFreqs = new Map();
		for (let char of words[i]) {
			wordFreqs.set(char, (wordFreqs.get(char) || 0) + 1);
		}
		for (let [char, freq] of charFreqs) {
			if (wordFreqs.has(char)) {
				charFreqs.set(
					char,
					Math.min(freq, wordFreqs.get(char)),
				);
			} else {
				charFreqs.delete(char);
			}
		}
	}
	const result = [];
	for (let [char, freq] of charFreqs) {
		for (let i = 0; i < freq; i++) {
			result.push(char);
		}
	}
	return result;
}
