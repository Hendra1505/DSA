const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 Bytes of storage

console.log(strings[2])
console.log(strings)


// Beberapa Method bawaan dari JavaScript:

// Push
// Dan method ini pada bigO adalah O(1), karna dia hanya menambahkannya pada bagian belakang array dan itu hanya memakan waktu operasi 1 kali eseksusi
strings.push('e');
console.log(strings);


// Pop 
strings.pop(); // O(1)
console.log(strings);

// Unshift
strings.unshift('x') //O(n)
console.log(strings)

// Splice
strings.splice(2, 0, 'alien') // O(n)
console.log(strings)
