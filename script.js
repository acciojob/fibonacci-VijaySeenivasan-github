function fibonacci(num) {
    if (num === 1) {
        return 0;
    }

    let first = 0;
    let second = 1;

    for (let i = 3; i <= num; i++) {
        const next = first + second;
        first = second;
        second = next;
    }

    return Number(second);
}

module.exports = fibonacci;