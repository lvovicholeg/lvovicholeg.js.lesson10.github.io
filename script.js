
// Завдання №1
function arrCopy(arr) {
    return arr.slice();
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr1_1 = [1, 2, 3, 4, 5, 6, 7, [8, 9, 10, 11]];

const arr1Cope = arrCopy(arr1);
const arr1_1Cope = arrCopy(arr1_1);

console.log(arr1);
console.log(arr1Cope);
console.log(arr1_1);
console.log(arr1_1Cope);

// Завдання №2
function arrToString(arr) {
    let arrStr = arr.join(' ');
    arrStr = arrStr.split(' ');
    return arrStr;
}

const arr2 = arrToString([10, 200, 3333]);
const arr2_1 = arrToString([1,2,3]) ;
console.log(arr2);
console.log(arr2_1);


// Завдання №3
function getLength(arr) {
let lengths = arr.map(item => item.length);
return lengths;
}

const arr3 = getLength(['Ivan','Pavlo','Ira']);
const arr3_1 = getLength(['Oleksiy','Andriana']);
console.log(arr3);
console.log(arr3_1);


// Завдання №4
function removeDuplicates(arr) {
    arr.sort(); // сортуємо від а до я
    let length = arr.length - 1; // створюємо змінну в яку зберігаємо довжину початкового масиву
    // створюємо цикл, який перевіряє чи кожен наступний елемент масиву = попередньому,
    //  якщо так, то видаляє цей елемент і створюєє ще один цикл, який перевіряє чи є наступні повторення цього ж елементу,
    // якщо так то видаляє їх.
    for (let i = 0; i < length; i++) {

        if (arr[i] == arr[i + 1]) {
            arr.splice(i, 1);
            for (e = i; e < length; e++) {
                arr[e] == arr[e + 1] ? arr.splice(e, 1) : 0;
            }
        }
    }
    return arr;
}

let arr4 = removeDuplicates(['js', 'html', 'js', 'python', 'css', 'js', 'html', 'js', 'python', 'js', 'scss', 'js']);
const arr4_1 = removeDuplicates(['html', 'css', 'html', 'js']);


console.log(arr4);
console.log(arr4_1);





