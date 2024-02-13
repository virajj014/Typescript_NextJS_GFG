// let myNumber: number = 10;
// let myString: string = "12";
// let myBoolean: boolean = false;
// let myArray: any[] = [1, 1 , "harshal"];
// let myArray:Array<number | string | boolean>= [1, 1 , "harshal", false];


// let myTuple: [number, string, boolean, number] = [24, "jain", true]




// function myFunction(a:number,b:number):number{
//     return a+b
// }
// let res = myFunction(5,4)
// console.log(res)


// let myFunction: (a:number , b:number) => number = (a,b)=>{
//     return a+b;
// }

// let res = myFunction(5,4)



// GENERAL WAY OF DECLARING OBJECT USING TYPE ANNOTATION
// let myObject:{
//     name: string,
//     age: number,
//     isMarried: boolean,
//     isAdult?: boolean    
// } = {
//     name : "Harshal",
//     age : 24,
//     isMarried : false,
//     isAdult: true
// }


// TYPE INTERFACE WAY OF DECLARING OBJECT
// interface Person {
//     name: string,
//     age: number,
//     isMarried: boolean,
//     isAdult?: boolean
// }


// let myObject: Person = {
//     name: "Harshal",
//     age: 24,
//     isMarried: false,
//     isAdult: true
// }



// let isTrue: boolean = false;



// function isActive(status: boolean): void {
//     if (status == true) {
//         console.log("Active")
//     }
//     else {
//         console.log("Inactive")
//     }
// }

// isActive(isTrue)



// let bigIntNumber:bigint = 1121231313131312131412412412412412412412n;



// any , null , unknown , void