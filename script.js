function fibonacci(num) {
// your code here
	 if (num === 1) {
        return 0;
    }

    let first = 0;
    let second = 1;

    if (num === 1) {
        return first;
    }

    for (let i = 3; i <= num; i++) {
        const next = first + second;
        first = second;
        second = next;
    }

    return second;

}

module.exports = fibonacci;
