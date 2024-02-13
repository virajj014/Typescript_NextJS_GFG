// function greet(name: string, message?: string): void {
//   if (name.length > 0 && message && message.length > 0) {
//     console.log(`Hello ${name} ${message}`);
//   }
//   else{
//     console.log(`Hello ${name}`);
//   }
// }

// function greet(name: string, message: string = "FSFSFSFSFSFSDFSFSF"): void {
//       console.log(`Hello ${name} ${message}`);

//   }

// greet("Harshal","HEY THERE THIS IS ME HJ");

// function sum(...nums: number[]):number{
//     return nums.reduce((acc,val)=> acc+val,0);
// }

// let sum1 = sum(1,2,3,4,2,3,4,6,78,9,5,3,2,5,6,7,4,34,4,4,45,6,7,5,4,34);
// console.log(sum1);

// const multiply = (x:number,y:number):number => x*y;
// console.log(multiply(2,3));

// function combine(a:string , b:string):string;
// function combine(a:number , b:number):number;

// function combine(a:any, b:any):any{
//     if(typeof a === "number" && typeof b === "number"){
//         return a+b;
//     }
//     else if(typeof a === "string" && typeof b === "string"){
//         return a+b;
//     }
//     else{
//         throw new Error("Parameters must be of type number or string");
//     }
// }

// console.log(combine(2,3));

// type Age = number;

// let age1:Age = 30;
// console.log(age1);

// interface Point{
//     x:number;
//     y:number;
// }

// type Point ={
//     x:number;
//     y:number;
// }

// let p1:Point = {
//     x:10,
//     y:20
// }

// UNION

// let age: number | string = "30";
// age = 12;
// age = true

// INTERSECTION

// type Person = {
//     name: string;
// }

// type Employee = {
//     empId: number;
// }

// type PersonEmp = Person & Employee;

// let employee:PersonEmp = {
//     empId : 123,
//     name : "Employee"
// }

// interface Person{
//     name: string;
// }

// interface Employee{
//     empId: number;
// }

// interface PersonEmp extends Person, Employee{

// }

// GENERIC FUNCTIONS

// function identity<T>(arg: T):T{
//     return arg;
// }

// let res1 = identity<string>("heyyyy");
// console.log(res1);

// function sum<T>(arg1: T, arg2: T):T{
//     if(typeof arg1 === 'number' && typeof arg2 === 'number'){
//         return arg1 + arg2 as T;
//     }
//     else if(typeof arg1 === 'string' && typeof arg2 === 'string'){
//         return arg1 + arg2 as T;
//     }
//     else{
//         throw new Error("Parameters must be of type number");
//     }

//     // return arg1+arg2 as T;
// }

// console.log(sum<number>(2,3));
// console.log(sum<string>("hey","there"));
// console.log(sum<boolean>(true,false));

//  TYPE ALIASES AND TYPE INTERFACES

// ALIAS
// type Person = {
//     name: string;
//     age: number;
// }

// INTERFACE
// interface Person{
//     name: string;
//     age: number;
// }

// REVERSE ARRAY

// function reverseArray<T>(myarr: T[]):T[]{
//     return myarr.reverse();
// }

// let arr1 = reverseArray<number>([1,2,3,4,5]);
// console.log(arr1);

// function makePair<T,U>(first:T, second:U):[U,T]{
//     return [second,first];
// }

// function getLength<T>(value : T[]): number{
//     return value.length;
// }

// let arrayLength = getLength([1, 2, 3]);
// console.log(arrayLength);

// class Box<T> {
//   private value: T;

//   constructor(value: T) {
//     this.value = value;
//   }

//   getValue(): T {
//     return this.value;
//   }
// }


// let numberBox = new Box<number>(10);
// console.log(numberBox.getValue());

// let stringBox = new Box<string>("Hello");
// console.log(stringBox.getValue());



function printLength<T extends { length: number}>(value : T):void{
    console.log(value.length);
}

printLength([1,2,3]);