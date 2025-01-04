// Contoh soal google interview
// Given 2 arrays, create a fddunction that
// let's user know (true/false) whether these two arrays contain any common items

// For Example:
// const array1 = ['a', 'b,', 'c', 'x'];
// const array2 = ['z', 'y,', 'i'];
// shoud return false.
// ----------------
// const array1 = ['a', 'b,', 'c', 'x'];
// const array2 = ['z', 'y,', 'x'];
// should return true. 


// 2 parameters - arrays - no size limit
// return true or false

// Nah disini kuncinya saat kita sedang di interview, kita harus tanyakan juga asumsi yang diberikan dari interviewer
// menanyakan fungsi ini untuk efisiensi saja, atau melihat dari big O, time atau space complexity

// Solusi naive untuk menjelaskan ke interviewer bahwa pendekatan code dibawah ini tidak efektif karna nested loop atau pada bigO disebut O(n^2) - big O Quadratic atau Pangkat
// const array1 = ['a', 'b,', 'c', 'x'];
// const array2 = ['z', 'y,', 'x'];


// containCommonItem = (arr1, arr2) => {
//     for (let i=0; i < arr1.length; i++){
//         for (let j=0; j < arr2.length; j++){
//             {
//                 if (arr1[i] === arr2[j]){
//                     return true
//                     // console.log("True, ada item yang sama")
//                 }
//             }
//         }
//     }
//     return false
// }
// console.log(containCommonItem(array1, array2))
// O(a*b)


const array1 = ['a', 'b,', 'c', 'x'];
const array2 = ['z', 'y,', 'x'];

containsCommonItem2 = (arr1, arr2) => {
    const map = {}
    for (let i=0; i < arr1.length; i++){
        if (!map[arr1[i]]) {
            const item = arr1[i]
            map[item] = true;
        }
    }

    for (let j=0; j < arr2.length; j++){
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false
}

console.log(containsCommonItem2(array1, array2))
// O (a + b) Time Complexity



// Cara untuk ES6 menggunakan method bawaan atau fungsi bawaan javascript
containCommonItem3 = (arr1, arr2) => {
    return arr1.some(item => arr2.includes(item))
}

console.log(containsCommonItem3(array1, array2))