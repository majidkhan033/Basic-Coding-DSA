// Objects 
// let person = {
//     Age : '12',
//     Name : "JavaScript",
//     LastName : "Language",

//     phone_number : {
//         mobile : "1234567890",
//         landline : "23455"
//     },

//     callingMethod : function() {
//         return (`The name of the person is ${person.Name}`);
//     } 
// }

// console.log(person.callingMethod());
// console.log(person.phone_number.mobile);




// --> Method overloading

// function person(age, name, lastname){
//     this.age = age;
//     this.name = name;
//     this.lastname = lastname;
// }

// function person(lastname){
//     this.lastname = lastname;
// }

// let ob1 = new person(21, "abdul", "shaik");
// let ob2 = new person(21, "majid", "khan");

// let ob3 = new person("abdul");

// console.log(ob2.name);
// console.log(ob3.lastname);

//-----------------------------------------------------------------------------------------------

// CLASSES 

class vehicle {
    constructor(name, brand, color) {
        this.name = name;
        this.brand = brand;
        this.color = color;
    }

    getName(){
        return (`The name of the vehicle is ${this.name}`)
    }

    getBrand(){
        return (`The name of the vehicle is ${this.brand}`)
    }
}

let vehicle1 = new vehicle("Supra", "Toyota", "Orange");

console.log(vehicle1.getName());

console.log(vehicle1.name);