//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const firstRecurringCharacter = (input) => {
    check_arr = new Set();
    for (let element of input) {
        if (check_arr.has(element)) {
            return element
        } 
        
        check_arr.add(element)
    }
    return undefined
} 


// const firstRecurringCharacter = (input) => {
//     check_arr = []
//     for (i=0; i < input.length; i++) {
//         check_arr = check_arr.push(i)
//         if (check_arr === i) {
//             return console.log(i)
//         } else {
//             return undefined
//         }
//     }
// } 

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]))