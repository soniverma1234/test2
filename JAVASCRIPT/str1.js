let lang = "soni verma"
console.log(lang[5]);

let name = "soni verma";
console.log(name)

let student = {
    name: "soni",
    age:20,
    cgpa : 8.2,
    isPass: true
}
console.log(typeof(student))
console.log(student["cgpa"])

const product = {
    tital : "ball pen",
    rating : 4,
    offer : 5,
    price : 200,
}
console.log(typeof(product))   
console.log(product);

const profile = {
    userName : "@soniverma",
    followers =1000,
    following = 200,
    bio = "aktu student"
}
console.log(profile);

// unary operater
let a = 5;
let b = 6;
console.log(a++)
console.log(++b)
console.log(a--)
console.log(--a)

let num = 5;
if (num % 2 !== 0){
    console.log("odd")
}else{
    console.log("even")
}
let a = 5;
let b = "5";
console.log("a=b:" , a === b)
