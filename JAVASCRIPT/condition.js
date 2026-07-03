// if condition 
let age = 18;
if(age => 18){
    console.log("you can vote");
}
if(age < 18){
    console.log("you can not vote");
}

let mode = "dark";
let color;

if(mode === "dark"){
    color = "black";
}
if(mode === "light"){
    color = "white";
}
console.log(color);

// Ternary operater
let age = 25;
let result = age >=18 ? "you can drive" : "you can not drive"
console.log(result);
let name = alrt("hello")
    console.log(name);

 let num =  prompt("enter a number");
    if (num % 5 === 0){
        console.log(num, "is multipal 5");
    }
    else{
        console.log(num, "is not a multipal 5");
    }
 

// whrit a code which can give grades to student according to their scores:
// 90-100, A
// 70-89, B
// 60-69, c
// 50-59,d
// 0-49,f
// let score = 85;



let score = 85;

if(score >=90 && score <= 100){
    console.log("Grad:, A");
}
 else if(score >=70  && score <=89){
    console.log("Grad: B");
 }
 else if (score >=60 && score <=69){
    console.log("Grade:, c");
 }
 else if(score >=50 && score <=59){
    console.log("Grad:, d");
 }
 else if(score >=0 && score <= 49){
    console.log("Grad:, f");
 }
 else{
    console.log("Invailid Score");
 }



for(let i = 0; i <= 100; i ++) {
    console.log(i);
}

for(let i = 0; i <= 100; i += 2) {
    console.log(i);
}

let text1 = "soni";
let text2 = "verma";
console.log("soni".concat(  " ","verma"));



let text1 = "I like tea";
console.log(text1.replace("tea","cofee"));

let name = "good morning"
result = name.replace("morning", "evining")
console.log (result)


let message = "Name:\tSoni\nCourse:\tJavaScript";

console.log(message);


let name = "soni";
console.log(`hello ${name}`);

