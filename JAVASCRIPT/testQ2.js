// // Global scope
// let name ="soni";
// function greet (){
//     console.log(name);
// }
// console.log(name);
// greet();

// // Fucntion scope  {You're learning scope now, so this is actually a
//  good error—it proves that function scope is working correctl}

// function greet() {
//     let message = "Hello";
//     console.log(message);
// }
// greet();
// console.log(message);

// Block scope
if (true) {
    let age = 20;
    console.log(age);
}

console.log(age);