
// Var and let difference
var a = 'Orange';
// Here a is Orange
{ 
  let b = 'Tomato';
  // Here b is Tomato
}
// Here x is Orange
// let only changes variable in the given block scope


var s = 'apple';
//Here s is apple
{
    let r = 'orange';
    //Here r is orange
}
// here r is orange too
// var changes the variable everywhere



// Const demo
var x = 'Banana';
// Here x is Banana
{ 
  const x = 'Apple';   //
  // Here x is Apple
}
// Here x is Banana

const z = 'Fruit' // Now z is Fruit everywhere and cannot be changed



//Arrow functions
var multiply = function(x, y) {
    return x * y;
 }
 
 // The same would be
 const multiplyArrow = (x, y) => x * y;


 //Spread operator demo
 const fullName = { firstName: 'Vyom', lastName : 'Sharma' };
 const profileInfo = { email: 'sharm843@umn.edu', ...fullName, address: 'Minneapolis' };
 console.log(profileInfo) /* Logs {
    email: 'sharm843@umn.edu',
    firstName: 'Vyom',
    lastName: 'Sharma',
    address: 'Minneapolis'
  }
  */
 

  
//Array Destructuring
const arr = [1, 3, 5];
let [a1, b1, c1] = arr;
console.log(a1, c1); // Prints 1 and 5


