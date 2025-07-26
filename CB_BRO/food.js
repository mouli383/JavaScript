//element selectors =methods used to target and manipulate HTML elements  They allow you to select onr or multiple HTML elements from the DOM

//document.getElementById() //Element or Null
//document.getElementsClassName()  //HTML collection
//document.getElementsByTagName() //HTML collection
//document.getquerySelector() //Element or NULL
//document.querySelectorAll()  //NODELIST

const myHeading=document.getElementById("my-heading");
myHeading.style.backgroundColor="yellow";
myHeading.style.textAlign="center";

console.log(myHeading);

const fruits=document.getElementsByClassName("fruits");
console.log(fruits);

fruits[0].style.backgroundColor="orange";

for(let fruit of fruits){//enhanced for loop
    fruit.style.backgroundColor="pink";
}

// fruits.forEach();//unable to use forEach

Array.from(fruits).forEach((fruit)=>{
    fruit.style.backgroundColor="aqua";
});

const h4Elements=document.getElementsByTagName("h4");
console.log(h4Elements);

h4Elements[0].style.backgroundColor="red";

for(let ele of h4Elements){
    ele.style.backgroundColor="green";
}

const liElements=document.getElementsByTagName("li");
console.log(liElements);

for(let ele of liElements){
    ele.style.backgroundColor="pink";
}

Array.from(liElements).forEach((li) =>{
    li.style.backgroundColor="Orange";
});

// const element=document.querySelector(".fruits");

// element.style.backgroundColor="Black";
// element.style.color="White";


// const element=document.querySelector("h4");

// element.style.backgroundColor="Black";
// element.style.color="White";

// const element=document.querySelector("li");

// element.style.backgroundColor="Black";
// element.style.color="White";

const element=document.querySelector("ul");

element.style.backgroundColor="Black";
element.style.color="White";

const frt=document.querySelectorAll(".fruits");

frt[0].style.backgroundColor="yellow";

frt.forEach((frt) =>{
    frt.style.backgroundColor="yellow";
});

//DOM NAVIGATION = tThe process of navigating through the structure of an html document using javaScript

//.firstElementChild
//.lastElementChild
//.nextElementChild
//.previousElementSibling
//.parentElement
//.children


// const ele=document.getElementById("fruit");

// const firstChild=ele.firstElementChild;
// firstChild.style.backgroundColor="red";

const ulElements=document.querySelectorAll("ul");
ulElements.forEach((ulElement)=>{
    const firstChild=ulElement.firstElementChild;
    firstChild.style.backgroundColor='yellow';
})

const ele=document.getElementById("vegetables");
const lastChild=ele.lastElementChild;
lastChild.style.backgroundColor='red';

const ulEle=document.querySelectorAll("ul");
ulEle.forEach((ele)=>{
    const lastChild=ele.lastElementChild;
    lastChild.style.backgroundColor="green";
});

const el=document.getElementById("vegetables");
const nextSibling=element.nextElementSibling;
nextSibling.style.textAlign='center';

const e=document.getElementById("onion");
const prevSibling=element.previousElementSibling;
prevSibling.style.textAlign='center';

const m=document.getElementById("onion");
const parent=element.parentElement;
parent.style.textAlign='center';


const ml=document.getElementById("vegetables");
const child=element.children ;

Array.from(child).forEach((child)=>{
    child.style.backgroundColor="pink";
})


