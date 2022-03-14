var climbStairs = function(n) {
    let one = 1;
    let two = 1;
    let temp = 0;
    for (let i = 0; i < n; i++){
        temp = one
        one = one + two
        two = temp
    }
    return two
};