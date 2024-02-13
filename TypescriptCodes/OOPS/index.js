// Classes are the blueprints for creating objects in TypeScript.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.getInfo = function () {
        return "This is a shape";
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.draw = function () {
        console.log("Drawing a circle of radius ".concat(this.radius));
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        var _this = _super.call(this) || this;
        _this.length = length;
        return _this;
    }
    Square.prototype.draw = function () {
        console.log("Drawing a square of length ".concat(this.length));
    };
    return Square;
}(Shape));
var shape1 = new Square(12);
console.log(shape1.draw());
