// let value:any = "Hello World";
// value = true;
// value = 42;


// let value:any;
// value = "Hello World";
// console.log(typeof value);


// let value:unknown="12";
// console.log(typeof value)
// if(typeof value === "number"){
//     console.log("value is a number")
// }
// else if(typeof value === "string"){
//     console.log("value is a string")
// }
// else{
//     console.log("value is something else")
// }

// let myVar:undefined;
// myVar = 12;
// console.log(myVar)


// function mySum(a:number,b:number):void{
//    console.log(a+b)
// }



// An interface for objects defines the blueprint for the structure of an object, specifying property names and their corresponding types.


// interface Person{
//     name : string;
//     age : number;
//     email : string;
//     phone?:number;
// }


// let person1:Person = {
//     name : "John",
//     age : 21,
//     email : "hj1@gmail.com",
//     phone:1234567789
// }


// interface Calcultor{
//     (a:number, b:number):number;
// }


// let add:Calcultor = (a,b)=> a+b;
// let sub:Calcultor = (a,b)=> a-b;
// let mul:Calcultor = (a,b)=> a*b;
// let div:Calcultor = (a,b)=> a/b;



// interface Shape{
//     color:string;
// }


// interface Square extends Shape{
//     sideLength:number;
// }

// interface Circle extends Shape{
//     radius:number;
// }


// const sq1:Square = {
//     color:"red",
//     sideLength:12
// }




let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];
// fruits.push("12");
// fruits.pop();
// fruits.shift();
// fruits.unshift("12");
// fruits.splice(1,0,"PINEAPPLE");
// console.log(fruits)

// fruits.forEach((fruit,index)=>{
//     fruits[index] = "12";
// })



// let person: { name: string; age: number } = {
//     name: "Alice",
//     age: 30
// };


// interface Person {
//     name: string;
//     age: number;
// }

// let user: Person = {
//     name: "Bob",
//     age: 25
// };



// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022
// };

// car.year = 2023

// interface Address {
//     street: string;
//     city: string;
//     state: string;
// }

// interface user {
//     name: string;
//     age: number;
//     email: string;
//     address: Address;
//     greet:()=>void;
// }

// let user1: user = {
//     name: "John",
//     age: 21,
//     email: "sdasd",
//     address: {
//         street: "123",
//         city: "asdasd",
//         state: "asdasd"
//     },
//    greet: function(){
//     console.log(`Hello ${this.name}`)
//    }
// }

// console.log(user1.greet())


enum Color{
    Red,
    Green,
    Blue
}

let chosenColor = Color.Green;
console.log(chosenColor)