// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

const deleteDuplicates = (head) => {
	function setDeep(obj, path, value, setrecursively = false) {
		path.reduce((a, b, level) => {
			if (
				setrecursively &&
				typeof a[b] === 'undefined' &&
				level !== path.length
			) {
				a[b] = {};
				return a[b];
			}
			if (level === path.length - 1) {
				a[b] = value;
				return value;
			}
			return a[b];
		}, obj);
	}
	let child = head;
	let arg = ['next'];
	while (child !== null) {
		if (child.next === null) {
			return head;
		} else if (child.val === child.next.val) {
			setDeep(head, arg, child.next.next);
		} else {
			child = child.next;
			arg.push('next');
		}
	}
	return head;
};
