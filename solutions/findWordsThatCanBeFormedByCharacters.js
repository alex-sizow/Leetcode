const countCharacters = (words, chars) => {
	const map = Array(26).fill(0);
	const a = 'a'.charCodeAt(0);
	for (let i = 0; i < chars.length; i++) {
		map[chars.charCodeAt(i) - a]++;
	}
	let res = 0;
	outerLoop: for (let m = 0; m < words.length; m++) {
		const arr = Array.from(map);
		for (let n = 0; n < words[m].length; n++) {
			if (--arr[words[m].charCodeAt(n) - a] < 0)
				continue outerLoop;
		}
		res += words[m].length;
	}
	return res;
};
