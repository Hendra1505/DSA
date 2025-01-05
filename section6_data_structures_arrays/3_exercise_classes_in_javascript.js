// Reference type
// Nah uniknya di js ada nama istilah reference type dan pada contoh saat ini
var object1 = {value: 10} // object referal nya
var object2 = object1 // kita coba referalkan object2 dengan object1 tetapi output yang dihasilkan adalah object1 dan object2 ditampung pada storage atau memori yaang sama  
var object3 = {value: 10} // Sedangkan object3 karna dia membuat object baru maka output storage nya beda   

// Context
const object4 = {
    a: function() {
        console.log(this);
    }
}

// Instatiation
// Instansiasi (instantiation) adalah proses menciptakan sebuah objek dari sebuah kelas dalam pemrograman berorientasi objek. 
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, i'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`Weeee I'am a ${this.type}`)
    }
}

const wizard1 = new Wizard('shelly','hear;er');