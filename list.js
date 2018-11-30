/**
 * 实现列表类
 */
function list() {
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