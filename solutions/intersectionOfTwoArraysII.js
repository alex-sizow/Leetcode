// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const intersect = (nums1, nums2) => {
	const maxArr = nums1 > nums2 ? nums2 : nums1;
	const minArr = nums1 < nums2 ? nums2 : nums1;
	const output = [];

	for (let i of maxArr) {
		const index = minArr.indexOf(i);
		if (index !== -1) {
			output.push(minArr[index]);
			minArr.splice(index, 1);
		}
	}
	return output;
};
