//> 1. get element by id

const heading = document.getElementById("main");
console.log(heading);


//> 2. get elements by tag name

const title = document.getElementsByTagName("h1");
// console.log(title[0]); // returns an array of elements
// console.log(title[1]);
// or we can write like this
console.log(title);
// print all h1 elements


//> 3. get elements by class name

const list = document.getElementsByClassName("pro");
// console.log(list[0]); // returns an array of elements just like getElementsByTagName
// console.log(list[1]); // this is same as getElementsByTagName but instead of tag name we use class name
// or we can write like this
console.log(list);


//> 4. querySelector

const queryS = document.querySelector(".querySel"); 
// this this exactly work like CSS selector 
// for id we use # and for class we use . and for tag name we use tag name
//* other non recommended method
// const queryS2 = document.querySelectorAll(".querySel");
// console.log(queryS2);
//*
console.log(queryS);
//^ in shortway we can tell that qurey selector has all the Infinity stones just like Thanos, XD.



//> Traverse the DOM
//< 1. parentNode
const child = document.querySelector(".child"); //* first select the child element
console.log(child.parentNode);

//< 2. childNodes
const parent = document.querySelector(".parent"); //*first select the parent element
console.log(parent.childNodes); //* this will print all the child nodes of the parent element

//< 3. nextElementSibling
const nES = document.querySelector(".child"); //* first select the child element
console.log(nES.nextElementSibling); //* this will print the next element sibling of the child element

//< 4. previousElementSibling
const pES = document.querySelector(".child"); //* first select the child element
console.log(pES.previousElementSibling); //* this will print the previous element sibling of the child element



