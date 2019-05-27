
//es6模块
export function sum(x,y) {
    return x + y;
}

export var pi = 3.141593;

export default {
    sum,
    pi
}

import math {sum ,pi} from 'math.js';