const plusOne = (digits) => {
	const strArr = digits.join('');
	if (strArr.length > 16) {
		const big = BigInt(strArr) + 1n;
		return [...big.toString()];
	}
	const addOne = strArr / 1 + 1 + '';
	return [...addOne];
};
