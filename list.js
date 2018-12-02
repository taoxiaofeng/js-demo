function print(args) {
    document.write(args);
}

/**
 * 实现列表类
 */
function List() {
    this.listSize = 0; //列表元素的个数
    this.pos = 0; //列表的当前位置
    this.dataStore = []; //初始化一个空数组来保存列表元素
    this.clear = clear; //清空列表中的所有元素
    this.find = find; //查找要删除的元素 返回该元素的下标
    this.toString = toString; //返回列表的字符串形式
    this.insert = insert; //在现有元素后插入新元素
    this.append = append; //在列表的末尾添加新元素
    this.remove = remove; //从列表中删除元素
    this.front = front; //将列表的当前位置设移动到第一个元素
    this.end = end; //将列表的当前位置移动到最后一个元素
    this.prev = prev; //将当前位置后移一位
    this.next = next; //将当前位置前移一位
    this.length = length;
    this.currPos = currPos; //返回列表的当前位置
    this.moveTo = moveTo; //将当前位置移动到指定位置
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

/**
 * append() 给列表添加元素
 * @param {*} element 需要添加的列表元素
 */
function append(element) {
    this.dataStore[this.listSize++] = element;
}

/**
 * find() 用于查找要删除的元素
 * @param {*} element 
 */
function find(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

/**
 * remove() 删除元素
 * @param {*} element 
 */
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(element);
        --this.listSize;
        return true;
    }
    return false;
}

/**
 * length() 返回列表中元素的个数
 */
function length() {
    return this.listSize;
}

/**
 * toString() 显示列表中的元素
 */
function toString() {
    return this.dataStore;
}
// var names = new List();
// names.append("Cynthia");
// names.append("Raymond");
// names.append("Barbara");
// print(names.toString());
// names.remove("Raymond");
// print(names.toString());

/**
 * insert() 向列表中插入一个元素
 * @param {*} element 需要插入数组的元素
 * @param {*} after 参照元素 将需要插入的元素插入到 after 元素之后
 * find() 方法会寻找传入的after 参数在列
 * 表中的位置，找到该位置后，使用splice() 方法将新元素插入该位置之后，然后将变量
 * listSize 加1 并返回true，表明插入成功。
 */
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++listSize;
        return true;
    }
    return false;
}


/**
 * clear() 方法使用delete 操作符删除数组dataStore，接着在下一行创建一个空数组。最
 * 后一行将listSize 和pos 的值设为1，表明这是一个新的空列表。
 */
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

/**
 *  container() 判断一个给定的值是否在列表中
 * @param {*} element 需要查找的元素
 */
function contains(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Bryan");
names.append("Danny");

//移动列表中的第一个元素并显示它：
// names.front();
// print(names.getElement());

// //想前移动一个单位并且显示它：
// names.next();
// print(names.getElement());

// //先向前移动两次，然后向后移动一次，显示出当前元
// names.next();
// names.next();
// names.prev();
// print(names.getElement());

//使用迭代器访问列表
/**
 * 在for 循环的一开始，将列表的当前位置设置为第一个元素。只要currPos 的值小于列表
 * 的长度，就一直循环，每一次循环都调用next() 方法将当前位置向前移动一位。
 */
for (names.front(); names.currPos() < names.length(); names.next()) {
    print(names.getElement());
}


for (names.end(); names.currPos() >= 0; names.prev()) {
    print(names.getElement());
}