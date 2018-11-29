//打印函数
function print(args) {
    document.write(args);
}

function weelTemps() {
    this.dataStore = dataStore;
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