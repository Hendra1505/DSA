// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 12,
//             next:{
//                 value:16,
//                 next: null
//             }
//         }
//     }
// }

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(12));
console.log(myLinkedList.append(16));
console.log(myLinkedList);
