// let num:number = 10;
// let str:string = "Hello";
// let bool:boolean = false;


// console.log(num);
// console.log(str);
// console.log(bool);



function add(num1:number,num2:number):number{
    return num1+num2;
}

console.log(add(5,6));


// function myGeneric<T>(arg:T):T{
//     return 123;
// }




// interface Person{
//     name:string | number | boolean,
//     email:string,
//     age:number,
//     isAdult:boolean,
//     password:string,
//     address?:string,
// }


// let user:Person = {
//     name:true,
//     email:"virajj014@gmail.com",
//     age:23,
//     isAdult:true,
//     password:"1234",
//     address: "Pune"
// }



// let someValue:string = 1111;
// let strLength: number = (someValue as string).length;

// console.log(strLength);








function calculate(operator:string, num1:number, num2:number): number | string {
    switch (operator) {
        case '+':
            return num1 + num2;
           
        case '-':
            return num1 - num2;
           

        case '*':
            return num1 * num2;
          

        case '/':
            if (num2 == 0) {
                return "Divide by zero error";
            }
            return num1 / num2;
        

        default:
            return "Invalid operator";
    }
}

console.log(calculate('+', "10", 20));
console.log(calculate('-', 10, 20));
console.log(calculate('*', 10, 20));
console.log(calculate('/', 10, 20));
