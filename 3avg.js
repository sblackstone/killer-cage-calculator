#!/usr/bin/env node



function find(target, targetCount, stack = [], sum = 0, digit = 1, avg = 0) {
    if (stack.length == targetCount && sum == target) {
        if (stack.indexOf(target / targetCount) > -1) {
            console.log(avg, stack);
        } else {
//            console.log(`\t${stack}`)
        }
        return;
    }
    if (digit == 10 || stack.length > targetCount || sum > target) {
        return;
    }
    find(target, targetCount, stack,             sum,       digit + 1, avg)
    find(target, targetCount, [...stack, digit], sum+digit, digit + 1, avg)

}





for (let i = 2; i < 9; i++) {
    find(i*3,3, [], 0, 1, i)
    console.log()

}

console.log(`\n`);
