// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = (nums) => {
	const uniqueItems = Array.from(new Set(nums));
	let count = 0;
	let answer;

	for (let i in uniqueItems) {
		const len = nums.filter(
			(item) => item === uniqueItems[i],
		).length;
		if (len > count) {
			count = len;
			answer = uniqueItems[i];
		}
	}
	return answer;
};
