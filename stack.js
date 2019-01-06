/**
 * 实现栈
 */

/**
 * push(element(s))：添加一个（或几个）新元素到栈顶。
   pop()：移除栈顶的元素，同时返回被移除的元素。
   peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返
   回它）。
   isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
   clear()：移除栈里的所有元素。
   size()：返回栈里的元素个数。这个方法和数组的length属性很类似。
 */

function Stack() {

    var items = []; //声明一个数组来保存栈里的元素

    this.push = function (element) {
        items.push(element);
    }

    this.pop = function () {
        return items.pop();
    }

    this.peek = function () {
        return items[items.length - 1];
    }

    this.isEmpty = function () {
        return items.length == 0;
    }

    this.size = function () {
        return items.length;
    }

    this.clear = function () {
        items = [];
    }

    this.print = function () {
        console.log(items.toString());
    }
}

var stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);
console.log(stack.peek());

stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size());
stack.print();

//十进制转二进制
function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));

/**
 * 根据base参数将十进制转换成二进制、八进制、十六进制
 * @param {*} decNumber 要转换的十进制
 * @param {*} base 二进制、八进制、十六进制
 */
function baseConverter(decNumber, base) {
    var remStack = new Stack(),
        rem, baseString = '',
        digits = '0123456789ABCDEF';

        while (decNumber > 0) {
            rem = Math.floor(decNumber % base);
            remStack.push(rem);
            decNumber = Math.floor(decNumber / base);
        }

        while (!remStack.isEmpty()) {
            baseString += digits[remStack.pop()];
        }

        return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));