var averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];

function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}

printMatrix(averageTemp);


var matrix3xx3x3 = [];
for (let i = 0; i < 3; i++) {
    matrix3xx3x3[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix3xx3x3[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matrix3xx3x3[i][j][z] = i + j + z;
        }
    }
}

for (let i = 0; i < matrix3xx3x3.length; i++) {
    for (let j = 0; j < matrix3xx3x3[i].length; j++) {
        for (let z = 0; z < matrix3xx3x3[i][j].length; z++) {
            console.log(matrix3xx3x3[i][j][z]);
        }
    }
}

//如果是一个3x3x3x3的矩阵，代码中就会用四层嵌套的for语句，一次类推。

//数组中一些常用的方法
/**
 *  concat 连接2个或更多数组，并返回结果
    every 对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
    filter 对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组
    forEach 对数组中的每一项运行给定函数。这个方法没有返回值
    join 将所有的数组元素连接成一个字符串
    indexOf 返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1 
    lastIndexOf 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值
    map 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
    reverse 颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了现在
    的第一个
    slice 传入索引值，将数组里对应索引范围内的元素作为新数组返回
    some 对数组中的每一项运行给定函数，如果任一项返回true，则返回true
    sort 按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数
    toString 将数组作为字符串返回
    valueOf 和toString类似，将数组作为字符串返回
 */