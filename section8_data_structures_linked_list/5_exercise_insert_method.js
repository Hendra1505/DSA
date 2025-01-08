class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

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
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }


    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // Hampir benar cara ekky untuk membuat method Insert
    // insert(index, value){
        
    //     if (index == 0){
    //         this.prepend(value);
    //         return this.printList();
    //     } else if (index >= this.length){
    //         this.append(value);
    //         return this.printList();
    //     } else if(index == this.length) {
    //         this.append(value);
    //         return this.printList();
    //     }
    //     const newNode = new Node(value);
    //     let currNode = this.length(index - 1);
    //     newNode.next = currNode.next;
    //     currNode.next = newNode;
    //     this.length++;
    //     return this;
    // }

    insert(index, value){
        //Check for proper parameters;
        if(index >= this.length) {
          console.log('yes')
          return this.append(value);
        }
    
        const newNode = {
          value: value,
          next: null
        }
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
      }
      traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
          currentNode = currentNode.next;
          counter++;
        }
        return currentNode;
      }

    printList(){
        const arr = [];
        let currNode = this.head;
        while (currNode !== null){
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        return arr;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(12);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 69);
console.log(myLinkedList.printList());
