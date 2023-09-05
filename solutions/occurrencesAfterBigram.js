// Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.
// Return an array of all the words third for each occurrence of "first second third".

// Example 1:
// Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
// Output: ["girl", "student"]

// Example 2:
// Input: text = "we will we will rock you", first = "we", second = "will"
// Output: ["we", "rock"]

function findOcurrences(text, first, second) {
	text = text.split(' ');
	let answer = [];
	for (let i = 0; i < text.length - 2; i++) {
		if (text[i] == first && text[i + 1] == second) {
			answer.push(text[i + 2]);
		}
	}
	return answer;
}
