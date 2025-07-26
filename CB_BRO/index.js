// console.log("Hello world");
// console.log("Hara Hara Mahadeva");

// window.alert("Hi");
// window.alert("Kaise ho aap?");

// //single Line Comment

// /*multiline
//     comment*/

// document.getElementById("myH1").textContent=`Amma Nanna`;

// document.getElementById("myP").textContent='I like Pizza';

/*// variable:Acontainer that stores a value behaves as if it were the value it contains

// declartion let x;
// assignment x=16;*/

// let roll;
// roll=16;
// document.write("Roll number: ",roll);

// console.log("Roll number: ",roll)

// document.write("\nDatatype of roll is: ",typeof(roll))

// let age=16;
// let price=10.99;
// let gpa=9.4;

// console.log(`Your age is: ${age}`)
// console.log(`The price of the product is: $${price}`
// );
// console.log(`Your GPA Is: ${gpa}`);

// console.log(`Typeof age is ${typeof(age)}----Typeof price is: ${typeof(price)}-----Typeof GPA is: ${typeof(gpa)}`);

// let name="mouli"

// console.log("My name is: ",name);
// console.log(`Typeof name is: ${typeof(name)}`);

// let flag=true

// console.log("Typeof flag is: ",typeof flag)

// document.getElementById('myP1').textContent=`My name is: ${name}`;

// document.getElementById('myP2').textContent=`I'm 18 years old`

// document.getElementById('myP3').textContent=`Is Student: `+flag

////operators

// let students=30;

// console.log("Total strength of the class at present: ",students)

// students+=2;
// console.log(students);

// students-=1
// console.log(students)

// students*=2
// console.log(students)

// students/=2
// console.log(students)

// students**=2
// console.log(students)

// students%=10
// console.log(students)

// let result=1+2*3+4**2;

// console.log(result)

// //How to accept user Input

// // Window promp

// username=window.prompt("What is your Name?")

// console.log(`Your names is: ${username}`)

// let username;

// document.getElementById('mySubmit').onclick=function(){
//     username=document.getElementById("mytext").value;
//     console.log("Your name is: ",username);

//     document.getElementById('myH1').textContent=`Hello ${username}`
// }

// //type Conversion

// let age=window.prompt("Enter your age: ");

// age=Number(age)

// age+=1;

// console.log(age)

// let x="pizza"
// let y="pizza"
// let z="pizza"

// x=Number(x)
// y=String(y)
// z=Boolean(z)

// console.log(x," ",typeof x);
// console.log(y," ",typeof y)
// console.log(z," ",typeof z)

// //const=the variable whose value cannot be changed

// const pi=3.14159;22

// let radius;
// let circumference;

// radius=window.prompt("Enter radius: ")
// radius=Number(radius)

// let area=pi*radius**2;
// circumference=2*pi*radius

// console.log("Area of Circle: ",area);
// console.log("Circumference of circle: ",circumference);

// document.getElementById("mySubmit1").onclick=function(){
//     rd=document.getElementById("myText1").value;
//     document.getElementById("myP4").textContent=`Circumference of the circle is: ${2*pi*rd} cm`
// }

// //Counter Program

// const decrease=document.getElementById("Decrease");
// const reset=document.getElementById("Reset");
// const increase=document.getElementById("Increase");
// const countLabel=document.getElementById("countable");

// let count=0;

// decrease.onclick=function(){
//     count--;
//     document.getElementById("countable").textContent=`${count}`;
// }

// reset.onclick=function(){
//     count=0;
//     document.getElementById("countable").textContent=`${count}`;
// }

// increase.onclick=function(){
//     count+=1;
//     document.getElementById("countable").textContent=`${count}`;
// }

// //Math

// console.log(Math.PI);
// console.log(Math.E);

// let x=3.21;
// let y=2;
// let z;

// z=Math.round(x)

// console.log(z)

// z=Math.floor(x)

// console.log(z)

// z=Math.ceil(x)

// console.log(z)

// z=Math.trunc(x)

// console.log(z)

// z=Math.pow(x,2)

// console.log(z)

// console.log(Math.sqrt(81))
// console.log(Math.sin(45))
// console.log(Math.abs(-16))
// console.log(Math.sign(-16))

// console.log(Math.max(1,2,3))
// console.log(Math.min(1,2,3))


// let randomNumber=Math.floor(Math.random()*6)+1;

// console.log(randomNumber)

// randomNum=Math.floor(Math.random()*100)+1;

// console.log(randomNum)

// let max=100;
// let min=50;

// console.log(Math.floor(Math.random()*(max-min)+min))


// const Min=1;
// const Max=7;

// document.getElementById("myButton").onclick=function(){
//     let val=Math.floor(Math.random()*(Max-Min)+Min);
//     document.getElementById("myLabel").textContent=`${val}`
// }


// //control STATEMENTS

// let age=18;

// if(age>100){
//     console.log("You're too old")
// }
// else if(age==0){
//     console.log("You can't enter you were just born");
// }
// else if(age>=18){
//     console.log("You're old enough to vote");
// }
// else{
//     console.log("You're not allowed vote");
// }

// document.getElementById("myButton1").onclick=function(){
//     let age=document.getElementById("myText2").value;
//     age=Number(age);
//     if(age>=18){
//         document.getElementById("age").textContent=`You're ${age} year's old You're Eligible to vote`;
//     }
//     else{
//         document.getElementById("age").textContent=`You're ${age} years's old You're unable to vote`
//     }
// }

// document.getElementById("myButton2").onclick=function(){
//     if(document.getElementById("subscribe").checked){
//         document.getElementById("text1").textContent=`You're subscribed`;
//     }
//     else{
//         document.getElementById("text1").textContent=`You're not subscribed yet`;
//     }

//     if(document.getElementById("visa").checked){
//          document.getElementById("text2").textContent=`Your transaction has done through payment method visa`;
//     }
//     else if(document.getElementById("mastercard").checked){
//          document.getElementById("text2").textContent=`Your transaction has done through payment method mastercard`;
//     }
//     else if(document.getElementById("paypal").checked){
//          document.getElementById("text2").textContent=`Your transaction has done through payment method paypal`;
//     }
//     else{
//         document.getElementById("text2").textContent=`Your transaction has not yet done through payment any of the above methods `;
//     }
// }

// //ternary operator

// let age=21;

// let message=age>=18?"You're an adult":"You're not an adult";

// console.log(message)

// //switch case statement

// let day=3;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("It's not a day");
//         break;
// }

// //string methods

// let username="Mouli";

// console.log(username.charAt(0));
// console.log(username.indexOf('M'));
// console.log(username.lastIndexOf('i'));
// console.log(username.length);
// console.log(username.trim())
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.repeat(2));
// console.log(username.startsWith('M'));
// console.log(username.endsWith('M'));
// console.log(username.includes(' '));

// let phoneNumber="123-456-7890";
// phoneNumber= phoneNumber.replaceAll('-',"");
// console.log(phoneNumber)

// console.log(phoneNumber.padStart(15,"0"));
// console.log(phoneNumber.padEnd(15,"0"));

// //string slicing

// const fullname="Mouli Samireddi";

// let firstName=fullname.slice(0,2);
// console.log(firstName);
// console.log(fullname.slice(6,15));

// let firstChar=fullname.slice(0,1);
// let lastChar=fullname.slice(-1);

// console.log(firstChar)
// console.log(lastChar);

// let fname=fullname.slice(0,fullname.indexOf(" "));
// let lname=fullname.slice(fullname.indexOf(" "));

// console.log(fname);
// console.log(lname);

// const email="moulisamireddi@gmail.com";

// let username=email.slice(0,email.indexOf("@"));
// console.log(username);


// //Method chaining:calling one method after another in one continous line of code

// //No method chaining

// let username=window.prompt("Enter your Username: ");
// username=username.trim();

// let letter=username.charAt(0);
// letter=letter.toUpperCase();

// let extraChars=username.slice(1,);
// extraChars=extraChars.toLowerCase();

// console.log(letter+extraChars )

// //method chaining

// username=username.trim().charAt(0).toUpperCase();
// console.log(username);

// console.log(username.trim().charAt(0).toUpperCase()+username.trim().slice(1,).toLowerCase());

// //while loop

// let username="";

// do{
//     username=window.prompt("Enter your name: ");
// }while(username==="" || username==null);

// console.log("Hello ",username);

// let username="";
// let password="";
// let loggedIn=false;

// while(!loggedIn){
//     username=window.prompt("Enter Username: ");
//     password=window.prompt("Enter password: ");

//     if(username==="mouli" && password==="mouli383"){
//         console.log("Logged In successfully");
//         loggedIn=true;
//     }
//     else if(username!=="mouli" && password==="mouli383"){
//         console.log("Invalid Username");
//     }
//     else if(username==="mouli" && password!=="mouli383"){
//         console.log("Invalid Password");
//     }
//     else{
//         console.log("Invalid Credentials");
//     }
// }

// //for loop

// for(let i=0;i<=10;i++){
//     if(i==8){
//         continue;
//     }
//     console.log(i);
// }

// //Number guessing game


// let max=100;
// let min=1;
// let number=Math.floor(Math.random()*(max-min)+min);
// let guess=window.prompt("Enter your guess: ");
// let find=true;
// let attempts=1;

// do{
//     if(isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }

//     if(guess<min || guess>max){
//         window.alert("Please eneter a number in the range 1 to 100 only")
//     }
//     if(guess<number){
//         guess=window.prompt("Your previous guess number is lesser than computer guess now enter number greater than previous one: ");
//         attempts++;
//     }
//     else if(guess>number){
//         guess=window.prompt("Your previous guess number is greater than computer guess now enter number lesser than previous one: ");
//         attempts++;
//     }
//     else{
//         console.log("You guessed Correctly and the number is: ",guess," in ",attempts," attempts");
//         find=false;
//     }
// }while(find)

// //functions

// function happyBirthday(name){
//     console.log("Happy Birthday To You ",name);
// }

// happyBirthday("mouli");

// function isValidEmail(email){
//     return email.includes("@")?true:false;
// }

// console.log(isValidEmail("moulisamireddi@gmail.com"));


// convert1.onclick=function(){

// }

// convert2.checked=function(){
//     let val=document.getElementById("num").value;
//     document.getElementById("result").textContent=`${val} F = ${(5/9)(val-32)}`
// }

// const textBox=document.getElementById("textbox");
// const toFarenheit=document.getElemenrById("toFarenheit");
// const toCelsius=document.getElementById("toCelsius");
// const result=document.getElementById("result");
// let temp;

// function convert(){
//     if(toFarenheit.checked){
//       temp=Number(textBox.value);
//       temp=(temp-32)*(5/9);
//       result.textContent=temp;
//     }
//     else if(toCelsius("convert1").checked){
        
//     }
// }

// //array

// let fruits=["Apple","Banana","Custard Apple"];

// console.log(fruits[0])

// fruits[2]="Coconut";
// fruits.push("Kiwi");

// console.log(fruits[3]);

// console.log(fruits.pop());

// console.log(fruits.unshift("mango"))
// console.log(fruits);

// console.log(fruits.shift());
// console.log(fruits);

// let numOfFruits=fruits.length;

// console.log(numOfFruits);

// let index=fruits.indexOf("Apple");
// console.log(index);

// console.log(fruits.indexOf("mango"));

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// for(let i=fruits.length-1;i>=0;i--){
//     console.log(fruits[i]);
// }

// //enhanced for loop

// for(let fruit of fruits){
//     console.log(fruit);
// }

// fruits.unshift("mango")

// console.log(fruits);

// console.log(fruits.sort());

// console.log(fruits)

// console.log(fruits.sort().reverse());


// //spread operator:it allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)

// let nums=[1,2,3,4,5,6,7];
// console.log(nums)

// let maxi=Math.max(nums);

// console.log(maxi);

// maxi=Math.max(...nums);
// console.log(maxi)

// console.log(Math.min(...nums));

// let username="mouli";

// let letters=[...username];

// console.log(letters);

// console.log(letters.length);

// console.log(letters.join('-'));

// let fruits=["Apple","Orange","Banana"];

// //shallow copy

// let newFruits=[...fruits];

// console.log(newFruits);

// let veg=["Carrot","Potatoes","Celery"];

// let foods=[...fruits,...veg];

// console.log(foods);


// //rest parameters: (...rest) allow a function work with a variable number of arguements by bundling them into an array

// //spread = expands an array into seperate elements
// //rest = bundles seperate elements into an array

// function openFridge(...foods){
//     console.log(...foods);
// }

// function getFood(...foods){
//     return foods;
// }

// const food1="pizza";
// const food2="hamburger";
// const food3="hotdog";
// const food4="sushi";
// const food5="ramen"

// // openFridge(food1,food2,food3,food4,food5);

// const foods=getFood(food1,food2,food3,food4,food5);

// console.log(foods)

// function sum(...numbers){
//     let result=0;
//     for(let number of numbers){
//         result+=number;
//     }

//     return result;
// }

// console.log(sum(1,2,3,4,5,6,7,8,9,10));

// function getAverage(...numbers){
//     let result=0;

//     for(let number of numbers){
//         result+=number;
//     }

//     return result/numbers.length;
// }

// console.log(getAverage(1,2,3,4,5,6,7,8,9,10));

// function combineStrings(...str){
//     string=""
//     for(let st of str){
//         string+=st;
//     }

//     return string;
// }

// console.log(combineStrings("Mr.","Mouli","Samireddi"));

// function rollDice(){
//     const numOfDice=document.getElementById("numOfDice").value;
//     const diceResult=document.getElementById("diceResult");
//     const diceImages=document.getElementById("diceImages");
//     const values=[];
//     const images=[];

//     for(let i=0;i<numOfDice;i++){
//         const value=Math.floor(Math.random()*(6))+1;
//         values.push(value);
//         images.push(`<img height="200" width="200" src="${value}.png">`);
//     }

//     diceResult.textContent=`Dice: ${values.join(', ')}`;

//     diceImages.innerHTML=images.join('');
// }

// //Random password generator

// function toGeneratePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    
//     const lowerCaseChars="abcdefghijklmnopqrstuvwxyz";
//     const upperCaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars="0123456789";
//     const symbolChars="!@#$%^&*()_+={}[]";

//     let allowedChars="";
//     let password="";

//     allowedChars += includeLowerCase ?lowerCaseChars:"";
//     allowedChars+=includeUpperCase ?upperCaseChars:"";
//     allowedChars+=includeNumbers ? numberChars:"";
//     allowedChars+=includeSymbols?symbolChars:"";

//     // console.log(allowedChars);

//     if(length<=0){
//         return `{password length must be atleast 1}`;
//     }

//     if(allowedChars.length === 0){
//         return `(Atleast one character should be selected)`
//     }

//     for(let i=0;i<length;i++){
//         const randomIndex=Math.floor(Math.random() * allowedChars.length);
//         password+=allowedChars[randomIndex]
//     }
//     return password;
// }

// const passwordLength=12;
// const includeLowerCase=true;
// const includeUpperCase=true;
// const includeNumbers=true;
// const includeSymbols=true;

// const password=toGeneratePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols)

// console.log("Generated Password: ",password);


// //Call back: a function that is passed as an arguement to another function

// //used to handle asyncg=hronus operations:1)reading a file 2)Network requests 3)Interacting with databases
// //Hey when you are done next done this

// hello(goodBye);

// function hello(callback){
//     // setTimeout(function(){
//     //     console.log("Hello");
//     // },3000);

//     console.log("Hello");
//     callback();
// }

// hello(leave);

// hello(wait);
// function wait(){
//     console.log("Wait");
// }
// function leave(){
//     console.log("Leave");
// }

// function goodBye(){
//     console.log("Good Bye!");
// }

// goodBye();

// function sum(callback,x,y){
//     let result=x+y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("myh1").textContent=result;
// }

// sum(displayConsole,5,6);
// sum(displayPage,5,6);

// //forEach

// let nums=[1,2,3,4,5,6]

// function display(element){
//     console.log(element);
// }

// function double(element,index,array){
//     array[index]=element*2;
// }

// nums.forEach(double)
// nums.forEach(display);

// let fruits=["apple","orange","banana","coconut"];

// function dis(element){
//     console.log(element);
// }

// function upper(element,index,array){
//     array[index]=element.toUpperCase();
// }

// function capitalize(element,index,array){
//     array[index]=element.charAt(0).toUpperCase()+element.slice(1);
// }

// fruits.forEach(upper);
// fruits.forEach(capitalize);
// console.log(fruits);
//fruits.forEach(dis);

// //.map() == accepts a callback and applies that function to each element of an array,then return a new array

// const nums=[1,2,3,4,5];

// const sq=nums.map(square);

// function square(element){
//     return Math.pow(element,2);
// }

// function cube(element){
//     return Math.pow(element,3);
// }

// const cb=nums.map(cube);
// console.log(sq);
// console.log(cb);

// console.log(nums)

// const stu=["SpongeBob","Patrick","Sandy","Sarah"];

// const stuUpper=stu.map(upperCase);

// function upperCase(element){
//     return element.toUpperCase();
// }

// function lowerCase(element){
//     return element.toLowerCase();
// }

// function capitalize(element){
//     return element.charAt(0).toUpperCase()+element.slice(1);
// }

// console.log(stuUpper);
// console.log(stu);
// console.log(stu.map(lowerCase));
// console.log(stu.map(capitalize));


// const dates=["2024-1-10","2025-2-20","2026-3-30"];


// function formatDates(element){
//     const parts=element.split("-");
//     return `${parts[1]}/ ${parts[2]}/${parts[0]}`;
// }

// console.log(dates.map(formatDates));

// //.filter() =creates a new array by filtering out elements

// let nums=[1,2,3,4,5,6];

// let evenNums=nums.filter(isEven);

// console.log(evenNums);

// function isEven(element){
//     return element%2 === 0;
// }

// console.log(nums.filter(isOdd));

// function isOdd(element){
//     return element%2===1;
// }

// const ages=[16,17,18,18,19,20,21,22];

// function isAdult(element){
//     return element>=18;
// }

// function isChild(element){
//     return element<18;
// }

// console.log(ages.filter(isAdult));

// console.log(ages.filter(isChild));

// const words=["Apple","Orange","Banana","Coconut","Kiwi","Pomegranate"];

// console.log(words);

// function longWords(element){
//     return element.length>=6;
// }

// function shortWords(element){
//     return element.length<6;
// }

// console.log(words.filter(longWords));

// console.log(words.filter(shortWords));

// //.reduce() = reduce the elemnts of an array to a single value;

// const prices=[5,10,20,25,16];

// const total=prices.reduce(sum);
// console.log(`$${total}`);

// function sum(prev,next){
//     return prev+next;
// }

// const nums=[1,2,3,4,5,6,7,8,9];

// function getMax(prev,next){
//     return Math.max(prev,next);
// }

// function getMin(prev,next){
//     return Math.min(prev,next);
// }

// console.log(nums.reduce(getMax));
// console.log(nums.reduce(getMin));

// //function expressions = a way to define function as values or variables

// const hello=function(){
//     console.log("Helo");
// }

// hello();

// //setTimeOut(callback,time)

// setTimeout(hello,3000);

// setTimeout(function(){
//     console.log("Mouli");
// },5000);

// const nums=[1,2,3,4,5,6];

// console.log(nums.map(function(element){
//     return element*element;
// }));

// console.log(nums.map(function(element){
//     return element*element*element;
// }));
// //same for filter and reduce too......

// //arrow functions = a concise way to write function expressions good for simple functions that you use only once(parameters) => some code

// function hello(){
//     console.log("Hello");
// }

// const hello1=function(){
//     console.log("Helo");
// }

// hello1();

// const helo=(name) =>{
//     console.log("Helo",name);
// }

// helo("Mouli");

// const greet =function(name){
//     console.log("Helo ",name,"Good Evening");
// }

//greet("Mouli");

// setTimeout(hello,3000);

// function hello(){
//     console.log("Helo");
// }

// setTimeout(()=>{
//     console.log("Helo")
// },2000)


// const nums=[1,2,3,4,5,6];

// const sq=nums.filter((element)=>{
//     return element%2===0; 
// });

// const cube=nums.map((element)=>{
//    return Math.pow(element,3);
// });

// const total=nums.reduce((prev,next)=>{
//     return prev+next;
// })

// console.log(sq);

// console.log(cube);

// console.log(total);

// //Object: A collection of related properties and/or methods can represent real world objects (people,products,places)
// //object={
// //key:value,function()
// //}

// const person={
//     firstName: "Mouli",
//     lastName:"Samireddi",
//     age:18,
//     isEmployed:true,
//     sayHello: function(){
//         console.log("Helo I'm Mouli");
//     },
// }

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.isEmployed);
// console.log(person.sayHello())
// person.sayHello();

// //this = reference to the object where THIS is used

// const person1={
//     name:"mouli",
//     favfood:"prawns",
//     sayHello:function(name){console.log("Helo I'm ",this.name)},
// }

// person1.sayHello("mouli");

// //constructor : special method for defining the properties and methods of objects

// function car(make,model,year,color){
//     this.make=make,
//     this.model=model,
//     this.year=year,
//     this.color=color,
//     this.drive=function(){
//         console.log(`You drive the ${this.model}`);
//     }
// }

// const car1= new car("Ford","Mustang",2024,"red");
// const car2= new car("Chervolet","Camaro",2025,"blue");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive();

// console.log();

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// car2.drive();

// //classes: (ES#6 FEATURE) provides a more structured and cleaner way to work with objects compared to traditional constructor functions ex:static keyword,encapsulation,inheritence

// class Product{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price.toFixed(2)}`);
        
//     }

//     calculateTotal(salesTax){
//         return this.price+(this.price * salesTax);
//     }
// }

// const salesTax=0.05;

// const product1=new Product("Shirt",19.99);
// const product2=new Product("T-shirt",16.00);

// product1.displayProduct();
// product2.displayProduct();

// console.log("Tax on the product is: ",product1.calculateTotal(salesTax).toFixed(2));


// //static: keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static,not the objects)

// class MathUtil{
//     static PI=3.14159;

//     static getDiameter(radius){
//         return radius*2;
//     }

//     static getCircumference(radius){
//         return 2*this.PI*radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));

// console.log();
// console.log();

// class User{
//     static userCount=0;

//     constructor(username){
//         this.username=username;
//         User.userCount++;
//     }

//     static getUserCount(){
//         console.log(`There are ${User.userCount} user were on Online`);
//     }

//     sayHello(){
//         console.log("Helo my username is ",this.username);
//     }

// }

// const u1=new User("Spongebob");
// const u2=new User("mouli");

// console.log(User.userCount);

// console.log(User.getUserCount());

// //inheritence

// class Animal{
//     alive=true;

//     eat(){
//         console.log(`${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name="rabbit";
// }

// class Fish extends Animal{
//     name="fish";
// }

// class Hawk extends Animal{
//     name="Hawk";
// }

// const rabbit=new Rabbit();

// const fish=new Fish();

// const hawk=new Hawk();

// console.log(rabbit.alive);
// console.log(rabbit.eat());
// console.log(rabbit.sleep());

// rabbit.alive=false;

// console.log(rabbit.alive);

//super = keyword is used in classes to call the constructor or the access the properties and methods of a parent(superclass) this=object; super=parent

// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// class Rabbit extends Animal{
//     constructor(name,age,runspeed){
//         super(name,age);
//         this.runspeed=runspeed;
//     }
// }

// class Fish extends Animal{
//       constructor(name,age,swimspeed){
//         super(name,age);
//         this.swimspeed=swimspeed;
//     }
// }

// class Hawk extends Animal{
//       constructor(name,age,flyspeed){
//         super(name,age);
//         this.flyspeed=flyspeed;
//     }
// }

// const rabbit=new Rabbit("rabbit",1,25);
// const fish=new Fish("fish",2,12);
// const hawk=new Hawk("hawk",5,16);

// console.log(rabbit.name," ",rabbit.age," ",rabbit.runspeed);

// //getters = special methods that makes a property readable
// //setters = special method that makes a property writable

// class Rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//     }

//     set width(newWidth){
//         if(newWidth>0){
//             this._width=newWidth;
//         }
//         else{
//             console.log("Width must be a positive number");
//         }
//     }

//     set height(newHeight){
//         if(newHeight>0){
//             this._height=newHeight;
//         }
//         else{
//             console.log("Height must be a positive number");
//         }
//     }

//     get width(){
//         return this._width;
//     }

//     get height(){
//         return this._height;
//     }

//     get area(){
//         return `${(this._width*this._height).toFixed(2)}cm`;
//     }
// }
// const rec=new Rectangle(100,90);

// console.log(rec.width," ",rec.height);

// console.log("Area: ",rec.area);


// class person{
//     constructor(fname,lname,age){
//         this.fname=fname;
//         this.lname=lname;
//         this.age=age;
//     }

//     set fname(firstName){
//         if(typeof firstName === "string"){
//             this._fname=firstName;
//         }
//         else{
//             console.error("Enter a valid firstname");
//         }
//     }

//     get fname(){
//         return this._fname;
//     }

//     set lname(lastName){
//         if(typeof lastName === "string"){
//             this._lname=lastName;
//         }
//         else{
//             console.error("Enter a valid lastname");
//         }
//     }

//     get lname(){
//         return this._lname;
//     }

//     set age(Age){
//         if(Age>0){
//             this._age=Age;
//         }
//         else{
//             console.error("Enter a valid age");
//         }
//     }

//     get age(){
//         return this._age;
//     }

// }

// const person1=new person("Mouli","Samireddi","pizza");

// console.log(person1.fname," ",person1.lname," ",18);

// //destructuring :
// // it helps us to extract values from arrays and objects, then assign them to variable in a convinent Way

// // [] = to perform array destruturing
// // {} =to perform object destructuring

// //ex1: swap two variable;

// let a=3;
// let b=4;

// [a,b]=[b,a];

// console.log(a)
// console.log(b)

// //ex:2 swap elements in a array

// const colors=["Red","Orange","Blue","Black","White"];

// [colors[0],colors[4]]=[colors[4],colors[0]]

// console.log(colors)

// // ex3: assign array elemnts to variables
// const colors1=["Red","Orange","Blue","Black","White"];

// const [first,second,third,...extraColors]=colors1;

// console.log(first," ",second," ",third,"   ",extraColors);

// // ex4: extract values from objects

// const person={
//     fname:"mouli",
//     lname:"Samireddi",
//     age:18,
// }

// const {fname,lname=null,age}=person;

// console.log(fname," ",lname," ",age);

// //ex5: in function parameters

// //nested objects: Object inside of other objects
// //                        Allows you to represent more complex datastructur
// //                        child object is enclosed by a parent object

// const person={
//     fname:"Spngebob",
//     age:30,
//     isStudent:true,
//     hobbies:['Karate','jellyfishing','cooking'],
//     address:{
//         street:" 124 conch st.",
//         city:"Bottom",
//         country:" Int. water"
//     }
// }

// console.log(person.fname);
// console.log(person.age);
// console.log(person.address.street);

// for(const property in person.address){
//     console.log(property)
// }


// const fruits=[{name:"apple",color:"red",calaroies:95},
//     {name:"orange",color:"orange",calaroies:45},
//     {name:"banana",color:"yellow",calaroies:105},
//     {name:"coconut",color:"white",calaroies:96}
// ];

// console.log(fruits[0].name);

// fruits.push({name:"pineapple",color:"yellow",calaroies:76})

// console.log(fruits);

// fruits.pop()

// console.log(fruits);

// fruits.splice(1,2);

// console.log(fruits);

// fruits.forEach(fruit => console.log(fruit.color));

// const fruitNames=fruits.map(fruits => fruits.name);
// const fruitColors=fruits.map(fruits => fruits.color);

// console.log(fruitNames);
// console.log(fruitColors);

// console.log(fruits.filter(fruit => fruit.color === 'red'));

// const maxFruit=fruits.reduce((max,fruit)=>
//                                                 fruit.calaroies>max.calaroies?
//                                                 fruit:max);

// console.log(maxFruit);


// //sort()

// const str=["apple","orange","kiwi","banana"];
// str.sort();
// console.log(str);

// const nums=[1,2,8,5,10,7,3,6,4,9];

// nums.sort();
// console.log(nums);

// nums.sort((a,b)=> a-b)

// console.log(nums)

// nums.sort((a,b) => b-a);
// console.log(nums)

// const person=[{name:"mouli",age:18},
//     {name:"Madhu",age:19}
// ]

// person.sort((a,b)=> b.age-a.age); localcompare
// console.log(person)

// //shuffle an array

// const cards=['A',2,3,4,5,6,7,8,9,10,'J','K','Q'];

// shuffle(cards);

// // cards.sort(()=>Math.random()-0.5);

// //Fisher yates algo.

// function shuffle(array){
//     for(let i=array.length-1;i>=0;i--){
//         const random=Math.floor(Math.random()*(i+1));
//         [array[i],array[random]]=[array[random],array[i]];
//     }
// }

// console.log(cards)

// //DateObjects =Objects that contain values that represent dates and times These date objects can be changes and formatted

// const date=new Date(2025,6,19,17,47,5);

// console.log(date);

// console.log(date.getFullYear());

// console.log(date.getMonth()+1);

// console.log(date.getDate());

// console.log(date.getHours());

// console.log(date.getMinutes());

// console.log(date.getSeconds());

// console.log(date.getDay());

// const dt=new Date();

// dt.setFullYear(2025);
// dt.setMonth(7);
// dt.setDate(0);
// dt.setHours(12);
// dt.setMinutes(16)

// console.log(dt);

// const date1=new Date("2023-12-31");
// const date2=new Date("2024-01-01");

// if(date2>date1){
//     console.log("HAPPY NEW YEAR🎉🎉");
// }

// //CLOSURE: A function defined in another function , the inner function has access to the variables and scope of the outer function. Allow for private variables and state maintainence used for frequently in JS Frameworks:React,Vue,Angular

// function outer(){

//     let message="Hello";

//     function inner(){
//         console.log(message);
//     }

//     return inner();
// }

// outer();

// function counter(){
//     let count=0;

//     function increement(){
//         count++;
//         console.log(`Count increemented to ${count}`);
//     }

//     function getCount(){
//         return count;
//     }

//     return {increement,getCount};
// }

// const cnt=new counter();

// cnt.increement();
// cnt.increement();

// console.log(cnt.getCount());

// function createGame(){
//     let score=0;

//     function increaseScore(points){
//         score+=points;
//         console.log(`+${points}pts`);
//     }

//     function decreaseScore(points){
//         score-=points;
//         console.log(`-${points}pts`);
//     }

//     function getScore(){
//         return score;
//     }

//     return {increaseScore,decreaseScore,getScore};
// }

// const obj=new createGame();

// obj.increaseScore(5);
// obj.increaseScore(6);

// obj.decreaseScore(3);

// console.log(obj.getScore())

//setTimeOut: function in javascript that allows you to schedule the execution of a function after an amount of time (milliseconds) 

function hello(){
    window.alert("Hello");
}

// setTimeout(hello,3000);

// setTimeout(function(){window.confirm("Hi This is mouli samireddi")},5000);

// const timeOutId=setTimeOut(()=>{window.alert("Helo says Hi and Hi says Helo")},3000);

// clearTimeout(timeOutId);

// let timeOutId;

// function startTimer(){
//     timeOutId=setTimeout(()=> window.alert("Helo says Hi and Hi says Helo"),3000);

//     console.log("STARTERED");
// }

// function clearTimer(){
//     clearTimeout(timeOutId);
//     console.log("CLEARED");
// }

//ES-6 Module= An external file that contains reusable code that can be imported into other javascript files. Write reusable code for many different apps. can contain variables, classes and functions and more..... Introducesd as part of ECMASCRIPT 2015 update

// import {PI, getCircumference, getArea, getVolumeOfSphere} from './mathUtils.js'


// console.log(PI);

// // console.log(getCircumference(5));

// // console.log(getArea(10));

// // console.log(getVolumeOfSphere(5));

//syncgronous = Execute line by line consecutively in a sequential manner code that waits for a n operation to complete.

// //asynchronous = Allows multiple operations to be performed concurrently without waiting doesn't block the execution flow and allows the program to continue (I/O Operations,network requests, fetching data) Handled with: Callbacks, promises, Async/Await

// function func1(callback){
//         setTimeout(()=>{console.log("Tasks Completed");
//                                     callback();
//         },3000);
// }

// function func2(){
//     console.log("Task1");
//     console.log("Task2");
//     console.log("Task3");
// }

// func1(func2);

//Error = An object that is created to represent a problem that occurs occur often with user input or establishing a connection

// console.log("Hello");
// console.log("You have reached end of the program");

// try{
//     console.log(x);
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("You have reached the end of the code");
// }

// try{
//     const dividend=Number(window.prompt("Enter a dividened: "));

//     const divisor=Number(window.prompt("Enter divisior: "));

//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("Values must be a number");
//     }

//     if(divisor == 0){
//         throw new Error("You can't divide a number with 0");
//     }

//     console.log(dividend/divisor);
// }catch(error){
//     console.error(error);
// }
// finally{
//     console.log("Executed Successfully");
// }

//DOM

// document.title="My JavaScript Course";
// document.body.style.backgroundColor="hsl(0,0%,15%)";
// console.log(document);


// const username="Mouli Samireddi";

// const welcomeMsg=document.getElementById("welcomeMsg");

// welcomeMsg.textContent+=username===""?"Guest":username;


// //step1: create the element
// const newH1=document.createElement("h1");
// newH1.id="myH1";
// newH1.style.color="red";
// // newH1.style.backgroundColor="black";
// newH1.style.textAlign="center";


// //step2: add attributes and properties
// newH1.textContent="I like Pizza";

// //step3:Append element to dom
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);

// document.getElementById("box2").prepend(newH1);

// // document.body.removeChild(newH1);

// const box2=document.getElementById("box2");
// document.body.insertBefore(newH1,box2);

// const boxes=document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[3]);

// //remove html element
// // document.body.removeChild(newH1);

// document.getElementById("box0").removeChild(newH1);


// //step1: create the elemnt
// const newListItem=document.createElement("li");


// //step2: add attributes/properties
// newListItem.textContent="coconut";
// newListItem.id="coconut";
// newListItem.style.fontWeight="bold";
// newListItem.style.backgroundColor="lightgreen";

// //step3: append the element to the dom
// document.body.prepend(newListItem);

// const orange=document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem,orange)


//eventListener=Listen for specific events to create interactive web pages events:click,mouseover,mouseout
//.addEventListener(event,callback


// const mybox=document.getElementById("mybox");

// function changeColor(event){
//     // console.log(event);
//     event.target.style.backgroundColor="tomato";
//     event.target.textContent="Ouch 🤷‍♂️!!!";
// }

// mybox.addEventListener("click",changeColor);

// mybox.addEventListener("click",(event)=>{
//     event.target.style.backgroundColor="tomato";
//     event.target.textContent="Ouch 🤷‍♂️!!!";
// })

// mybox.addEventListener('mouseover',(event)=>{
//     event.target.style.backgroundColor="yellow";
//     event.target.textContent="Don't do it 😆";
// });

// mybox.addEventListener('mouseout',(event)=>{
//     event.target.style.backgroundColor='lightgreen';
//     event.target.textContent="Click Me🤣";
// });

// const clickme=document.getElementById("clickme");

// // clickme.addEventListener('');

//eventListener =Listen for specific events to create interactive webpages 
//events:keydown,keyup
//document.addEventListener(event,callback)

document.addEventListener("keydown",event=>{
    console.log(`key down: ${event.key}`);
});

document.addEventListener('keyup',event=>{
    console.log(`key up: ${event.key}`);
});

const boxx=document.getElementById("boxx");

// document.addEventListener('keydown',event=>{
//     boxx.textContent='😆';
//     boxx.style.backgroundColor="tomato";
// });

// document.addEventListener('keyup',event=>{
//     boxx.textContent=`🐍`;
//     boxx.style.backgroundColor='lightblue';
// })

// let movement=10;
// let x=0;
// let y=0;

// document.addEventListener('keydown',event=>{
//     if(event.key.startsWith("Arrow")){
//         switch (event.key){
//             case "ArrowUp":
//                 y-=movement;
//                 break;
//             case "ArrowDown":
//                 y+=movement;
//                 break;
//             case "ArrowLeft":
//                 x-=movement;
//                 break;
//             case "ArrowRight":
//                 x+=movement;
//                 break;
//         }

//         boxx.style.top=`${y}px`;
//         boxx.style.top=`${x}px`;
      
//     }
// });

// const hide=document.getElementById("hide");
// const myimg=document.getElementById("myimg");

//hide.addEventListener("click",event=>{
//     if(myimg.style.display==="none"){
//         myimg.style.display="block";
//         hide.textContent="Hide";
//     }
//     else{
//          myimg.style.display="none";
//          hide.textContent="Show";
//     }
   
// });

// hide.addEventListener("click",event=>{
//     if(myimg.style.visibility==="hidden"){
//         myimg.style.visibility="visible";
//         hide.textContent="Hide";
//     }
//     else{
//          myimg.style.visibility="hidden";
//          hide.textContent="Show";
//     }
   
// });

//NodeList= Static collection of html elements by(id,class,element) can be created by using querySelectorAll(), similar to an array, but no(map,filter,reduce),Nodelist won't update to automatically reflect changes
 

let mybuttons=document.querySelectorAll(".mybuttons");

// mybuttons.forEach(element=>{
//     element.style.backgroundColor="green";
//     element.textContent+=`💖`;
// });

// mybuttons.forEach(element=>{
//     element.addEventListener("click",event=>{
//         event.target.style.backgroundColor="tomato";
//     })
// });

// mybuttons.forEach(element=>{
//     element.addEventListener("mouseover",event=>{
//         event.target.style.backgroundColor="blue";
//     });
// });

// mybuttons.forEach(element=>{
//     element.addEventListener("mouseout",event=>{
//         event.target.style.backgroundColor="lightblue";
//     });
// });

// const newButton=document.createElement("button")

// newButton.textContent=`Button5`;
// newButton.classList="mybuttons";
// document.body.appendChild(newButton);

// console.log(mybuttons);

// mybuttons=document.querySelectorAll(".mybuttons");

// console.log(mybuttons);

// mybuttons.forEach(element=>{
//     element.addEventListener("click",event=>{
//         event.target.remove();
//         mybuttons=document.querySelectorAll(".mybuttons");
//         console.log(mybuttons);
//     });
// });

//classlists

// const mybutton=document.getElementById("mybtn");

// mybutton.classList.add("enabled");

// mybutton.classList.remove("enabled");

// mybutton.addEventListener("mouseover",event=>{
//     event.target.classList.toggle("hover");
// });

// mybutton.addEventListener("mouseout",event=>{
//     event.target.classList.toggle("hover");
// });

// mybutton.classList.add("enabled");

// mybutton.addEventListener("click",event=>{

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent+=`🤷‍♀️`;
//     }
//     else{
//         event.target.classList.replace("enabled","disapled");
//     }
// });

// let btns=document.querySelectorAll(".btns");

// btns.forEach(element=>{
//     element.classList.add("enabled");
// });

// btns.forEach(element=>{
//     element.classList.remove("")
// })

// btns.forEach(button=>{
//     button.addEventListener("mouseover",event=>{
//         event.target.classList.toggle("hover");
//     })
// })

// btns.forEach(button=>{
//     button.addEventListener("mouseout",event=>{
//         event.target.classList.toggle("hover");
//     })
// })

// btns.forEach(button=>{
//     button.addEventListener("click",event=>{
//         event.target.classList.replace("enabled","disabled");
//     })
// })'


//promise= An object that manages synchronus operations. wrap a promise object around(asynchronous code) "I promise to return a value " pending-> RESOLVED or REJECTED
//new Promise((resolve,reject)=>{asynchronous code})

//DO THESE CHORES IN ORDER

//1.WALK THE DOG
//2.CLEAN THE KITCHEN
//3. TAKE OUT THE TRASH

function walkDog(){
    // return new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //     resolve("You walk the dog");
    // },1500);
    // });
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let isWalked=true;
            if(isWalked){
                 resolve("You walk the dog");
            }
            else{
                reject("How dare you, you didn't even walk the dog");
            }
       
    },1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
           setTimeout(()=>{
        resolve("You clean the kitchen");
       
    },2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        resolve("You take out the trash");
        // callback(); 
    },500);
    })
}

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>{
//             console.log("You finished all the chores");
//         })
//     })
// })

// walkDog().then(value=>{console.log(value);return cleanKitchen()})
//                 .then(value=>{console.log(value); return takeOutTrash()})
//                 .then(value=>{console.log(value); console.log("You finished all the chores")});

// async function doChores(){
//     const walkDogResult=await walkDog();
//     console.log(walkDogResult);

//     const cleanKitchenResult=await cleanKitchen();
//     console.log(cleanKitchenResult);

//     const takeOutTrashResult=await takeOutTrash();
//     console.log(takeOutTrashResult);

//     console.log("You finished all the chores!");
// }

// doChores();

//JSON=(JavaScript Object Notation)data-interchange format Used to represent structured data in a human-readable format. It is often used for data exchange between a server and a client. JSON is language-independent and can be easily parsed and generated by many programming languages, including JavaScript.)
//JSON.stringify() = Converts a JavaScript object or value to a JSON string
//JSON.parse() = Parses a JSON string and converts it into a JavaScript object or value

const names=["Mouli","Roni","Ravi","Madhu"];

const jsonString=JSON.stringify(names);

console.log(names)

console.log(jsonString);

const person={
    name:"Mouli",
    age:18,
    isEmployed:true,
    hobbies:["reading","gaming","hiking"]
}

const personJsonString=JSON.stringify(person);

console.log(person);
console.log(personJsonString);

