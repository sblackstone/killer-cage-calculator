#!/usr/bin/env node



function find(target, targetCount, stack = [], sum = 0, digit = 9) {
    if (stack.length == targetCount && sum == target) {
        console.log(stack);
        return;
    }
    if (digit == 0 || stack.length > targetCount || sum > target) {
        return;
    }
    find(target, targetCount, stack,             sum,       digit - 1)
    find(target, targetCount, [digit, ...stack], sum+digit, digit - 1)

}

const arguments = process.argv;

if (arguments.length != 4) {
    console.log(`usage: target digits`);
    process.exit(-1);
}

const target = parseInt(arguments[2]);
const digits = parseInt(arguments[3]);

if (target < 1 || target > 45) {
    console.log(`invalid target ${target}`);
    process.exit(-1);
}

if (digits < 1 || digits > 9) {
    console.log(`invalid digits ${target}`);
    process.exit(-1);
}

console.log(`\n${target} in ${digits} digits:\n`);

find(target,digits)

console.log(`\n`);
