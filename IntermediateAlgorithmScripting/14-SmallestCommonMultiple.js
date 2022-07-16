/* Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */




function smallestCommons(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    let lcm = result[0];
    for (let i = 1; i < result.length; i++) {
        lcm = lcm * result[i] / gcd(lcm, result[i]);
    }
    return lcm;
}


function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

