
class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value) {
      let addr = this._hash(key);
      if (!this.data[addr]) {
        this.data[addr] = [];
      }
      this.data[addr].push([key, value])
      return this.data
    }

    get(key) {
      let addr = this._hash(key);
      const currBucket = this.data[addr];
      if (currBucket) {
        for(let i = 0; i < currBucket.length; i++) {
          if(currBucket[i][0] === key){
            return currBucket[i][1];
          }
        }
      }
      return undefined
    }

    // Method keys namun masih terjadinya collision
    // keys() {
    //   const keysArray = [];
    //   for (let i=0; i < this.data.length; i++) {
    //     if(this.data[i]) {
    //       keysArray.push(this.data[i][0][0])
    //     }
    //   }
    //   return keysArray;
    // }

    // Method keys versi lebih advance tanpa collision
    keys() {
      if (!this.data.length) {
        return undefined
      };
      let result = []
      // loop throught all the elements
      for (let i=0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j=0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          }
        }
      }
      return result
    }
  }
  
const myHashTable = new HashTable(50); // O(1)
// myHashTable.set('grapes', 10000);
console.log(myHashTable.set('grapes', 10000))
console.log(myHashTable.set('apples', 9))
console.log(myHashTable.get('apples'))
console.log(myHashTable.keys())
  // myHashTable.select('grapes')