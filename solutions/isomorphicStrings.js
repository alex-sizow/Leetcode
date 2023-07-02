// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

const isIsomorphic = (s, t) => {
	if (s.length !== t.length) return false;
	const mapa = new Map();
	const mapb = new Map();
	for (let i = 0; i < s.length; i++) {
		if (mapa.has(s[i])) {
			if (mapa.get(s[i]) !== t[i]) {
				return false;
			}
		} else {
			mapa.set(s[i], t[i]);
		}
		if (mapb.has(t[i])) {
			if (mapb.get(t[i]) !== s[i]) {
				return false;
			}
		} else {
			mapb.set(t[i], s[i]);
		}
	}
	return true;
};
