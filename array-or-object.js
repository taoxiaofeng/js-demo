//打印函数
function print(args) {
    document.write(args);
}

function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(temp) {
    this.dataStore.push(temp);
}

function average() {
    var total = 0;
    for (let i = 0; i < this.dataStore.length; ++i) {
        total += this.dataStore[i];
    }
    print('total： ', total, '平均值： ', total / this.dataStore.length)
    return total / this.dataStore.length;
}

var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
print(thisWeek.average());

//拼接字符串
function concat(accumulatedString, item) {
    return accumulatedString += item;
}
var letter = ['a','b','c','d'];
print(letter.reduce(concat));