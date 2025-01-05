// Create a function that reverses a string:
// 'Hi My name is Hendra' should be:
// 'ardneH si eman yM iH'


// Solusi reverse1 ini ditunjukkan untuk mengembalikan string secara terbalik tanpa adanya method bawaan dari javascript
function reverse1(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Hmm that is not good';
    }

    const backwards = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    console.log(backwards);

    return backwards.join('');
}

reverse1('Hi My name is Hendra')
console.log(reverse1('Hi My name is Hendra'))


// Solusi reverse2 dengan menggunakan method bawaan javascript 
function reverse2(str) {
    return str.split('').reverse().join('')
}

const reverse3 = str => [...str].reverse().join('');







// Ekky
// reverseString = (str) => {
//     const strChange = str.split("")
//     for (let i = 0; i < this.length; i++) {
//         return str
//     }
// } 

// console.log(reverseString('Hi My name is Hendra'))