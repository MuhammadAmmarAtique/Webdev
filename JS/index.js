// Learning JS

//1.VARIABLES:-

// let a="East or West let for making variable is best ";
// console.log(a);

// 2.OPERATORS:-

// let x=34.5;
// console.log(x);
// x=-x;
// console.log(x);

// let g=59;
// console.log(g);
// g=59+11;
// console.log(g);

// let f=9;
// let g=8;
// console.log("The answer of f+g is:" + (f+g));
// console.log("The answer of f-g is:" + (f-g));
// console.log("The answer of f*g is:" + (f*g));
// console.log("The answer of f/g is:" + (f/g));

// let a=2;
// let b=3;
// console.log(a**b);

// let a=1;
// // console.log(++a);
// console.log(a++);
// console.log(a);

// let b=3;
// console.log(b--);
// // console.log(--b);
// console.log(b);

// 3.STRINGS:-

// let q ='Ammar is student of "university"';
// let w="'Moiz' is a good boy";
// let e=`"Rafeh" is a pro 'developer'`;
// let r= q.length;
// let t=`Atiq has 3 sons. 1) ${e}, 2) ${q}, 3)${w}. `;

// console.log(t);

// 4.String Functions:

// a.indexof()
// let a='it is mad';
// let b=a.indexOf('is');
// console.log(b);

// b.lastindexof()
// let a='ammar is good but he is shy';
// let b=a.lastIndexOf('is');
// console.log(b);

// c.slice()
// let portion= str.slice(-16);
// let str= "I am a software engineer and My name is Ammar";
// console.log(portion);

// d.substring()
// let a='DANISH IS A SCAMMER,NOT A GAMMER';
// let b=a.substring(12);
// console.log(b);

// e.replace()
// let x="hamid is not good in studies";
// let y=x.replace('not','very');
// console.log(y);


// f+g.uppercase() /  .lowercase()
// let m="ammar";
// console.log(m.toUpperCase());

// h.string concantenate 
// let g="Ammar";
// let h='is a good boy';
// let i= g.concat( h);
// console.log(i);

// i.trim()
// let o ="    How are   you?    "
// console.log(o);
// console.log(o.trim());

// j.charat()
// let p=o.charAt(3);
// let o=`Ammar`;
// console.log(p);


// 5.Scope (global scope vs block scope)
// let a = `ammar`;
// console.log(a);
//  a = `apple`;
// console.log(a);

// 6.Conditional Statements

// a) If else
// let age;
// age=prompt('Enter your age');
// if (age<=0 || age>120)
// {
//     console.log(`Incorrect input.`);
// }
// else if (age>=18)
// {
//     console.log('You are an adult now!');
// }
// else
// {
//     console.log(`You are a kid.`)
// }

// b)Switch Case
// const age=18;
// switch (age) 
// {
//     case 12:
//         console.log('you are 12 years old!')
//     break;

//     case 14:
//         console.log('you are 14 years old!')
//     break;

//     case 16:
//         console.log('you are 16 years old!')
//     break;

//     case 18:
//         console.log('you are 18 years old!')
//     break;

//     default:
//         console.log('You are neither 12,14,16 nor 18 years old.')
//         break;
// }

// 7.Arrays and Objects

// a)OBJECT
// let student =
// {
//     name: "MuhammadAmmarAtique",
//     uni: "uoh",
//     age:'22',
//     year:'3rd year',
//     city:'toba',
//     "city 2":'haripur'

// }
// console.log(student);

// How to acess objects key value ?

// console.log(student.name);
// console.log(student.city);
// console.log(student['city 2']);



// b)ARRAY

// let arr=[1,21,13,"Ammar",null,undefined];    //1st way to declare an array
// console.log(arr);

// let names= new Array ("ammar",21);       //2nd way to declare an array
// console.log(names);


// ARRAY FUNCTIONS:-

// console.log(arr.length);
// console.log(arr.sort());
// console.log(arr.toString());
// console.log(arr);

// let array=[1,5,7,3,9,0,10];
// console.log(array);

// 8.Functions in JS

// let name1="Ammar";
// let name2="Rafeh";
// let name3="Moiz";
// let greet="Good morning!";

// function character(name,greeting)
// {

//     console.log(greeting, name)
//     console.log(name + " is a good boy");
// }

// character(name1,greet);
// character(name2,greet);
// character(name3,greet);


// let greeting=" I hope you are good!";
// let name1="Ammar";
// let name2="Rafeh";
// let name3="Moiz";

// function intro(name,greet=" All good!")
// {
//     console.log(name + greet );
//     return(name + greet);
// }
// intro(name1,greeting);
// intro(name2);
// intro(name3,greeting);

// let reaction=intro(name3,greeting);
// console.log(reaction);


// function sum(a,b)
// {
//     c=a+b;
//     return "The result of the sum is " + c;
// }

// let d=sum(1,2);
// console.log(d);

// Calclator using function and if else

// let decision=parseInt(prompt("Welcome to Ammar's Calculator:\nPress 1 for addition , 2 for substration, 3 for multiplication, 4 for division"));

// if(decision==1 || decision==2 || decision==3 || decision==4)
// {
//     let a=parseFloat(prompt("Enter value of 1st number:"));
//     let b=parseFloat(prompt("Enter value of 2nd number:"));
//     calculations(a,b);
// }
// else
// {
//     alert("Sorry invalid entry");
// }

// function calculations(a,b)
// {

// if(decision==1)
// {
//     let c=a+b;
//     alert("The addition of two numbers is: "+ c);
// }

// else if(decision==2)
// {
//     let c=a-b;
//     alert("The substraction of two numbers is: "+ c);

// }
// else if(decision==3)
// {
//     let c=a*b;
//     alert("The multiplication of two numbers is: "+ c);

// }
// else if(decision==4)
// {
//     let c=a/b;
//     alert("The division of two numbers is: "+ c);

// }
// }

// 9.Alert,Prompt,Confirm

// let name=prompt("what is your name?","Guest");

// let deletee=confirm("Do you really want to delete this post man ?");
// // console.log(deletee);

// if(deletee)
// {
//     console.log("Your post is deleted succesfully!");
// }

// else
// {
//     console.log("Your post is not deleted!");
// }

// let age=prompt("Enter you age!");
// if(age>=18)
// {
//     console.log("You can go to club!");
// }
// else
// {
//     console.log("Sorry you cannot go to this club!");
// }

// 10.Loops in JS

// a)for loop

// for (let i = 0; i < 4; i++)
// {
//     console.log(i);
// }

// let friends =["Ammar","Rafeh","Anas","Zohaib","Moiz"];

// for(let i=0; i<friends.length; i++)
// {
//     console.log(friends[i]);
// }


// for (let index = 0; index < friends.length; index++) {
//     const element = friends[index];
//     console.log(element);
    
// }

//b) for each loop

// let grocery=["Aallo","Tamatar","pyaaz"];

// function element(value) {
//     console.log(value);
// }

// grocery.forEach(element);


// c) for of loop
// for (element of grocery) {
//    console.log(element);
// }

// Again practicing for loop


// let student=['Ammar',21,"uoh","student"];

// for (let i = 0; i < student.length; i++) {
//     console.log(student[i] + " (for loop result)");   
// }

// console.log(" \n ");

// student.forEach(
//     function show(element)
//     {console.log(element + " (for-each loop result)");}
// );

// console.log(" \n ");

// for (element of student)
//  {
//     {console.log(element + " (for-of loop result)");}
// }

// How to iterate an object using loops ? (by using for-in loop)


// let employee=
// {
// name:"Ammar",
// post:"Teacher",
// "bef sal":32000,
// "aft sal":60000,
// age:42
// };

// d)for-in loop

// for (key in employee) 
// {
//     console.log( `The ${key} of employee is ${employee[key]} ` );
// }
 

// e)while + do while loop

// let i=0;
// while (i<10) 
// {
//     console.log("We are at number " + i);
//     i=i+1;   
// }

// let i=0;

// do {
//     console.log("I am number " + i);
//     i=i+1;
// } 

// while (i<5);


// Again practicing all loops:


// let market=["Xenon","Hattar",32,"kpk"];

// for(let i=0; i<market.length; i++)
// {
//     console.log(market[i]);
// };

// market.forEach(
//     function display(element)
//     {console.log(element);}
// );


// for (element of market)
// {
//     console.log(element);
// }

// let  bicyle={
//     name:"pheonix",
//     model:2010,
//     gender:"both",
//     usage:"adult",
//     "usage 2":"small kids but with extra 2 tires"
// }


// for (key in bicyle)
// {
    
//     console.log( `The ${key} of bicyle is ${bicyle[key]}` );
// }   


// 11.DOM Manipualtion in JS (Navigating the DOM)

// A).getElementById() + .innerHTML

// let select =document.getElementById("main");
// console.log(select);

// let show=select.innerHTML;
// console.log(show);

// main.innerHTML=    

// '\n    <ul>\n        <li>our Home</li>\n        <li>Not About us</li>\n        <li>Contact us</li>\n        <li>Learn More</li>\n    </ul>\n'  ;

// B).getElementByClassName( )

// let hi=document.getElementsByClassName("container");
// console.log(hi);

// console.log(hi[1]);

// C+D).queryselector()  &  .queryselectorAll()

// let qs=document.querySelectorAll('#main > ul > li');
// console.log(qs);


// 12.Browser Events & Listening to them




