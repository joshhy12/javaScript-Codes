//this is a comment in js
/*
big comment or multiple  
console.log( 'my name is joshy');
console.log("I like Coding ")

window.alert("used to display data")



let firstname = "joshy";//string
let age=22;//int or numbers hatuweki utu za juu when we declare variables in js numbers ty
let student =false; //boolean

//age= age +1;
 
console.log("Hello",firstname);
console.log("You are",age,"years old");
console.log("Enrolled",student); 

document.getElementById("p1").innerHTML ="Hello " +firstname;
document.getElementById("p2").innerHTML ="You are  " +age+" years old";
document.getElementById("p3").innerHTML ="Enrolled " + student +" am not a student";
*/

//let student =21;
//student =student +1;
//let extraStudent =student % 3;
//student +=1; shotcut for js
//console.log(student);

//let result =1+2*(3+4);
//console.log(result);

//how to accept user name
//let username =window.prompt("What is ur username");
//console.log(username);

/*
let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").Value;
    console.log(username);
    document.getElementsById("mylabel").innerHTML ="Hello " + username;
}

let age = Window.prompt("How old are you??");
age = Number(age);
age +=1;
console.log("Happly BirthDay!!! ",age , " years Old");


// nimeishia dakika 30 on data type  masaa 8hours video
let x;
let y;
let z;

x = Number("pizza");
y = String("3.14");
z = Boolean("pizza");

console.log(x, typeof x);  
console.log(y, typeof y);
console.log(z, typeof z);


//naanza leo variable dakika 30
// variable that cant be change
//let solve the problem of the cylce of radius 

let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of the circle");
radius = Number(radius);

pi = 420.69;

circumference = 2 * pi * radius;

console.log("The circumference is : ", circumference);


// let do some maths in javascript


let x = 3.14;
//x= Math.round(x);
//x = Math.floor(x);
//x = Math.pow(x,2);

console.log(x);
*/
// solve for hypotenuse   Right angled triangle

let a;
let b;
let c;
/*
a = window.prompt("Enter side A");
a =Number(a);

b=window.prompt("Enter side B")
a=Number(b);

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

console.log("Side C : ", c);*/

document.getElementById("submitButton").onclick =function(){

a = document.getElementById("aTextBox").value;
a = Number(a);

b = document.getElementById("bTextBox ").value;
b = Number(b);

c=Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));

document.getElementById('cLabel').innerHTML= "Side C: " + c;

}