function fibonacci(num) {
// your code here
	 if (num === 1) {
        return 0;
    }

    let first = 0;
    let second = 1;
	let result = 0;

	for (let index = 2; index < num; index++) {
		result = first+ second;
		first = second;
		second = result;
	}

    return result
}

module.exports = fibonacci;
