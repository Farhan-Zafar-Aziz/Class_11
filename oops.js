"use strict";
// const obj1 = {
//     first_name: "Ali",
//      display() {
//         console.log(this.first_name);
//         //console.log(this);//repesent the whole objct
//     }
// }
// obj1.display();
// //class = ko ham ak ojct ko multiple time use kr skty hn is called as (oop)
// //class use as blueprint or skatch one time we create and many time use 
// //constructor ko ham dynamically values ko jo objct mn ho ya class mn un ko assign krny k liye use krty hn
// class User {
//     firstName: string;
//     constructor(fn: string) {
//         (this.firstName = fn);
//     }
//     display() {
//         console.log(this.firstName);
//     }
// }
// const obj2 = new User ("Hassan");
// obj2.display();
// const obj3 = new User ("Saad");
// obj2.display();
// //4 principles of oops
// //abstract using for hide unuseable things
// //abstract always work in abstract class
// abstract class Operation {
//     num1: number;
//     num2: number;
//     constructor(num1: number, num2: number){
//         this.num1 = num1;
//         this.num2 = num2;
//     };
//     abstract execute():number
// }
// //Encapsulation mn aap kisi property ko hide kr skty hn private keyword se jese num3 mn h
// class Addition extends Operation {
//   private num3: number;                //ab jb isko obj4 mn assign krogy to 3num hide kr dega or agr public krogy to show kr dega 
//     constructor (a: number, b: number, c:number) {
//         super(a,b)//print class constructor
//         this.num3 = c; 
//     }
//     execute() {
//         return this.num1 + this.num2;
//     }
//     }
// //Encapsulation 
//     const obj4 = new Addition(12,10,2)
//     console.log(obj4.execute());
//    // obj4...
// class Substraction extends Operation {
//     execute(): number {
//         return this.num1 * this.num2;
//     }
// }
// const obj5 = new Substraction(3,5);
// console.log(obj5.execute());
//polymorphism means method same h or logic diffr 
//jese k Addition class mn hamny add kra h or Substraction mn subs kra h execute func dono mn same h lekin logic different hn ak + h or doosri - h 
//Inheritance mtlb parent class ki properties hm child class mn use kren jese Class Operation ki properties child class Addition or substraction mn use ho rahi hn
class Person {
    // Constructor
    constructor(Name, age, address) {
        this.Name = Name;
        this.age = age;
        this.address = address;
    }
    // Method
    getFullName() {
        return `${this.Name} ${this.age} ${this.address}`;
    }
}
// Create an object of the Person class
const person1 = new Person("s", 1, "");
console.log(person1.getFullName()); // Output: John Doe
class Teacher extends Person {
    constructor(salary, Name, age, address) {
        super(Name, age, address);
        this.salary = salary;
    }
}
let teacerData = new Teacher(5000, 'jhone', 20, 'Pakistan');
console.log(teacerData);
class Animal {
    eat() {
        console.log("Animal is hungry");
    }
}
class Tiger extends Animal {
    eat() {
    }
}
let a = new Tiger();
a.eat();
class B {
    constructor() {
        this._length = 0;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        if (value < 10) {
            this._length = value;
        }
    }
}
let obj1 = new B();
obj1.length = 10;
console.log(obj1.length);
