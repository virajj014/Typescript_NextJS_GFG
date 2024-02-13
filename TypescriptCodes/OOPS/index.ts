// Classes are the blueprints for creating objects in TypeScript.

// class Car {
//   brand: string;
//   model: string;

//   constructor(brand: string, model: string) {
//     this.brand = brand;
//     this.model = model;
//   }

//   startxyz(): string {
//     console.log(`${this.brand} ${this.model} is starting....`);
//     return `${this.brand} ${this.model} is starting....`;
//   }
//   fasfaxyz(): void {
//     console.log(`${this.brand} ${this.model} is starting....`);
//   }
// }

// let myCar1 = new Car('Toyota', 'Camry');
// let myCar2 = new Car('Honda', 'Accord');

// myCar2.startxyz();

// class SportsCar extends Car {

//   accelerate(): void {
//     console.log(`${this.brand} ${this.model} is accelerating....`);
//   }
// }

// class SedanCar extends Car {
//     tyreSize : number;

//     constructor(model: string , brand: string , tyresSize: number){
//         super(model, brand);
//         this.tyreSize = tyresSize;
//     }

//     color() : void{
//         console.log(`${this.brand} ${this.model} is having color....`);
//     }

//     ts():void{
//         console.log(`${this.brand} ${this.model} has ${this.tyreSize} tyre size`);
//     }
// }

// let mySportsCar = new SedanCar("Toyota", "Camry", 12);
// mySportsCar.ts();
// mySportsCar.accelerate();

// class Person {
//   public name: string;
//   private password: string;

//   constructor(name: string, password: string) {
//     this.name = name;
//     this.password = password;
//   }

//   sayHello(): void {
//     console.log(`Hello ${this.name}`);
//   }

//   setPassword(password: string): void {
//     this.password = password;
//   }

//   getpassword(): void {
//     console.log(`${this.name} ${this.password}`);
//   }
// }

// class Male extends Person {
//   sayHello(): void {
//     console.log(`Hello Mr. ${this.name} and your password is ${this.password}`);
//   }
// }

// let person1 = new Person("John", "hj123");

// console.log(person1.name);
// person1.getpassword();
// person1.setPassword("gfg");
// person1.getpassword();



// class Animal{
//     speak():void{
//         console.log('Animal is speaking')
//     }
// }


// class Dog extends Animal{
//     speak():void{
//         console.log('Dog barks')
//     }
// }

// class Cat extends Animal{
//     speak():void{
//         console.log('Cat meows')
//     }
// }


// let myAnimal = new Cat();
// myAnimal.speak();



// abstract class Shape{
//     abstract draw():void;

//     color: string;

//     constructor(color: string){
//         this.color = color;
    
//     }

//     getInfo():string{
//         return "This is a shape"
//     }
// }


// class Circle extends Shape{
//     radius : number;


//     constructor(radius: number){
//         super();
//         this.radius = radius;
//     }


//     draw(): void {
//         console.log(`Drawing a circle of radius ${this.radius}`)
//     }
// }


// class Square extends Shape{
//     length : number;

//     constructor(length: number){
//         super();
//         this.length = length;
//     }

//     draw(): void {
//         console.log(`Drawing a square of length ${this.length}`)
//     }

// }


// let shape1 = new Shape("red");
// console.log(shape1.draw());