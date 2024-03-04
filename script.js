// Arithmetic Operators
// let a = 5; let b =2;
// console.log("a = ",a, "b = ",b);
// console.log("a+b ",a+b);
// console.log("a-b ",a-b);
// console.log("a*b ",a*b);
// console.log("a/b ",a/b);
// console.log("a%b ",a%b);
// console.log("a**b ",a**b);

// // Unary Operators
// // pre-increment/decrement
// console.log("a++ ",++a);
// console.log("b++ ",++b);//increment/decrement and print
// console.log("a--",--a);
// console.log("b--",--b);
// //post-increment/decrement
// console.log("a++ ",a++);
// console.log("b++ ",b++);//print and increment/decrement
// console.log("a--",a--);
// console.log("b--",b--);

// //Assignment Operators
// a+=b; 
// console.log(a);
// a-=b;
// console.log(a);
// a*=b;
// console.log(a);
// a%=b;
// console.log(a);
// a**=b;
// console.log(a);

// //Comparison Operators
// console.log("a == b ",a==b);
// console.log("a === b ",a===b);
// console.log("a != b ",a!=b);
// console.log("a !== b ",a!==b);
// console.log("a>b ",a>b);
// console.log("a<b ",a<b);
// console.log("a>=b ",a>=b);
// console.log("a<=b ",a<=b);

// //Logical Operators
// let cond1 = a>b;
// let cond2 = a === 5;
// let cond3 = a === b;
// let cond4 = a<b;
// console.log(" cond1&&cond2 = ", cond1 && cond2);
// console.log(" cond1&&cond3 = ", cond1 && cond3);
// console.log(" cond1||cond2 = ", cond1 || cond2);
// console.log(" cond1||cond3 = ", cond3 || cond4);
// console.log("!(2<5)",!(b<a));
// console.log("!(5<2)",!(a<b));

//Conditional Statements
// let age = 15;
// // let age = 25;
// if (age>=25){
//     console.log("you can drive a vehicle/you can vote");
// }
// else{
//     console.log("cannot drive/vote");
// }

// // let mode ="dark";
// let mode = "light";
// let color;
// if(mode==="dark"){
//     color ="black";
// }
// else{
//     color="white";
// }
// console.log(color);

// //odd or even
// let num = 10;
// // let num =15;
// if (num%2===0){
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }

// // let age =79;
// let age =15;
// // let age=40;
// if (age<=18){
//     console.log("Youngster");
// } else if(age>60){
//     console.log("Senior");
// }
// else{
//     console.log("Middle-Aged");
// }

// // let mode ="dark";
// let mode = "light";
// let color;
// if(mode==="dark"){
//     color ="black";
// }
// else if(mode == "blue"){
//     color ="blue";
// }
// else if(mode == "pink"){
//     color ="pink";
// }
// else{
//     color="white";
// }
// console.log(color);

// let mode="dark"
// if(mode==="dark") console.log(mode);

// //Ternary Operator -- Comapct if-else
// // let age = 25;
// let age = 15;
// let result = age > 18 ? "adult" : "young";
// console.log(result);

//Loops
//for Loop

// for(let i =1;i<=5;i++){
//     console.log(i,"JavaScript"); //executes 6 & prints 5 times successfully!
// }

// //calcualte sum of 1 to n
// let sum=0;
// let n = prompt("Enter a number");
// for(let i =1; i<=n; i++){
//     sum +=i;
// }
// console.log("sum is ",sum); 

// //Infinite loop
// for(let i =1;i>=0;i++){
//     console.log(i,"JavaScript"); //executes 6 & prints 5 times successfully!
// }

// //while loop
// let i=1;
// while(i<=5){
//     console.log(i,"JS");
//     i+=1;
// }

// //do while loop
// let i=1;
// do{
//     console.log(i, "JS");
//     i++;
// } while(i<=10);

// //for of loop 
// let str="Javascript";
// let size = 0;
// for(let val of str){ // iterator -> characters
//     console.log(val);
//     size++;
// }
// console.log(size);

// //for in loop
// let student ={
//     name: "Manoj Kumar",
//     age: 21,
//     cgpa: 7.90,
//     isPass: true,
// };

// for(let key in student){
//     console.log(key,":",student[key]);
// }

// //Strings
// let str = "Javascript";
// console.log(str);
// console.log(str.length);
// console.log(str[0]);
// let sentence = `This is template literal ${1+2+3} in JS. It is also known as special type of string.`;
// console.log(sentence);

// //template literal
// let obj ={
//     item:"pen",
//     price:10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// console.log("the cost of",obj.item,"is",obj.price,"rupees");

// //escape characters
// console.log("Java\n\tScript");

// //string methods
// let str="manoj";
// let str1="          M AN OJ           ";
// let str2 = "manananannananan";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str1.trim())
// console.log(str.slice(0,4));
// let res = str+str1;
// let res1 = "hello"+123;
// console.log(res1);
// console.log(res);
// console.log(str1.concat(str));
// console.log(str.replace("oj","ly"));
// console.log(str2.replaceAll("an","L"));
// console.log(str.charAt(4));

// //Arrays
// let marks =[97,109,234];
// let heroes =["Ironman","Hulk","Thor","Batman"];
// console.log(heroes);
// console.log(marks);
// marks[0]=143;
// console.log(marks[0]);
// console.log(marks);
// console.log(heroes[3]);
// // for loop
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }
// // for of 
// for(let hero of heroes){
//     console.log(hero);
// }

// Array Methods
// let foodItems = ["Burger", "Paneer", "Chicken"];
// console.log(foodItems);
// foodItems.push("Egg","Prawns","Fish");
// console.log(foodItems);
// foodItems.pop();
// console.log(foodItems);
// let delval = foodItems.pop();
// console.log("deleted value = ",delval);
// console.log(foodItems);
// console.log(foodItems.toString());
// let nums=[1,2,3,4,5,6];
// console.log(nums.toString());
// let mcu = ["ironman","spiderman","captain america","doctor strange"];
// let dcu = ["batman","superman","flash","wonderwoman","shazam","bluebeetle"];
// let heroes = mcu.concat(dcu);
// console.log(heroes);
// mcu.unshift("antman");
// console.log(mcu);
// console.log(heroes);
// let val = dcu.shift();
// console.log(val);
// console.log(dcu);
// console.log(mcu.slice(3));
// // replacing through splice
// nums.splice(2,2,101,102);
// console.log(nums);
// // adding through splice
// nums.splice(2,0,21);
// console.log(nums);
// // deleting through splice
// nums.splice(3,1);
// console.log(nums);

// //functions
// function myFunction(){
//     console.log("I am learning JS.");
// }
// myFunction();
// myFunction();
// function myFunction(msg){ //parameter -> input variable
//     console.log(msg);
// }
// myFunction("Manly Manoj"); //argument 
//Function -> sum of 2 no.s
// function sum(a,b){
       //a,b are local variables -> local scope 
//     // console.log(a+b);
//     s=a+b;
//     return s;
// }
// let val=sum(2,12);
// console.log(val);

// //sum function               //mul function
// function sum(a,b){           function mul(a,b){
//     return a+b;                 return a*b;
// }                            }

// //Arrow Functions
// const arrowSum =(a,b)=>{         const arrowMul = (a,b)=>{
//     console.log(a+b);               console.log(a*b);
// }                                }

// const printHello = ()=> console.log("hello");
// printHello();

// //forEach Loop in arrays //Higher Order Functions/Methods
// let arr =["hyd","blg","dlh"];
// arr.forEach((val,idx,arr) => {
//     console.log(val.toUpperCase(),idx,arr);
// });

// //Map
// let nums =[67,52,76];
// let newNums=nums.map((val)=>{
//     // console.log(val); 
//     return val**2;
// });
// console.log(newNums);

// //Filter
// arr=[1,2,3,4,5,6,7,8,9,10];
// let evenArr = arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(evenArr);

// //Reduce
// let arr =[5,1,4,9];
// const out = arr.reduce((res,curr)=>{
//     return res > curr ? res : curr;
// });
// console.log(out);

// let bt1=document.querySelector("#bt1");
// let bt2=document.querySelector("#bt2");
// // bt1.onclick =()=>{
// //     alert("clicked once");
// // }
// // bt2.ondblclick =()=>{
// //     alert("double clicked once");
// // }
// bt1.addEventListener("click",()=>{
//     alert("clicked once");
// })
// const handler2=()=>{
//     alert("clicked once by handler2");
// }
// bt1.addEventListener("click",handler2);
// bt2.addEventListener("click",()=>{
//     alert("double clicked once");
// })
// bt1.removeEventListener("click",handler2);

// // objects
// const student ={
//        fullName: "Manoj",
//        marks: 97.7,
//        printMarks: function(){
//               console.log("marks =", this.marks);
//        },
// };
// const employee ={
//        calcTax(){
//               console.log("tax rate is 10%");
//        },
// };

// const karanArjun ={
//        salary: 50000,
// };

// karanArjun.__proto__=employee;

// //sync
// console.log("one");
// console.log("two");
// console.log("three");

// //async
// // function hello(){
// //        console.log("hello");
// // }
// console.log("one");
// console.log("two");
// setTimeout(()=>{
//        console.log("hello");
// }, 4000);
// console.log("three");

// //callbacks
// function sum(a,b){
//        console.log(a+b);
// }
// function calc(a,b, sumCallback){
//        sumCallback(a,b);
// }
// calc(1,2,sum);

// const hello = () =>{
//        console.log("hello all");
// };
// setTimeout(hello,3000);

// //***callback Hell***
// function getData(dataId,getNextData){
//        setTimeout(()=>{
//               console.log("data",dataId);
//               if(getNextData){
//                      getNextData();
//               }
//        },2000);
// }
// getData(1, ()=>{
//        getData(2, ()=>{
//               getData(3);
//        });
// });

// //promises
// const getPromise = ()=>{
//        return new Promise((resolve,reject) =>{
//        console.log("i'm a promise");
//        resolve("success");
//        reject("some error");
// });
// };
// let promise = getPromise();
// promise.then((res)=>{
//        console.log("promise fulfilled",res);
// });
// promise.catch((err)=>{
//        console.log("promise fulfilled",err);
// });

// function getData(dataId,getNextData){
//        return new Promise((resolve,reject)=>{
//               setTimeout(()=>{
//                      console.log("data",dataId);
//                      resolve("success");
//               },3000);
//        });
// };
// // getData(1).then((res)=>{
// //        console.log(res);
// //        getData(2).then((res)=>{
// //               console.log(res);
// //        });       
// // });
// getData(1).then((res)=>{
//        return getData(2);
// })
// .then((res)=>{
//        return getData(3);
//  }).then((res)=>{
//       console.log(res);
// });

// //***promise chain***
// function asyncFunc(){
//        return new Promise((resolve,reject)=>{
//               setTimeout(()=>{
//                      console.log("data1");
//                      resolve("success");
//               },4000);
//        });
// };

// function asyncFunc2(){
//        return new Promise((resolve,reject)=>{
//               setTimeout(()=>{
//                      console.log("data2");
//                      resolve("success");
//               },4000);
//        });
// };

// console.log("fetching data1....");
// asyncFunc().then((res)=>{
//        console.log(res);
//        console.log("fetching data2....");
//        asyncFunc2().then((res)=>{
//        console.log(res);
// });
// });

// console.log("fetching data2....");
// let p2 = asyncFunc2();
// p2.then((res)=>{
//        console.log(res);
// });

// //async-await
// async function hello(){
//        console.log("hello");
// };

// function api(){
//        return new Promise((resolve,reject)=>{
//               setTimeout(()=>{
//                      console.log("weather data");
//               resolve(200);
//               }, 2000);
//        });
// };
// async function getWeatherData(){
//        await api();
//        await api();
// };
// getWeatherData();

// //***async-await***
// function getData(dataId){
//        return new Promise((resolve,reject)=>{
//               setTimeout(()=>{
//                      console.log("data",dataId);
//                      resolve("success");
//               },2000);
//        });
// };
// // async function getAllData(){
// //        await getData(1);
// //        await getData(2);
// //        await getData(3);
// // };
// // getAllData();

// // IIFHE 
// (async function(){
//        await getData(1);
//        await getData(2);
//        await getData(3);
// })(); 

//fetch api
// const URL = "https://cat-fact.herokuapp.com/facts";
// const factDiv = document.querySelector("#fact");
// const btn = document.querySelector("#btn");
// let promise = fetch(URL);
// console.log(promise);
// const getFacts = (async () =>{
//        console.log("getting data...");
//        let response = await  fetch(URL);
//        console.log(response);// JSON format
//        let data = await response.json();
//        factDiv.innerText = data[0].text;

// });
// function getFacts(){
//        fetch(URL).then((response)=>{
//               return response.json();
//        })
//        .then((data)=>{
//               console.log(data);
//               factDiv.innerText = data[0].text;
//        });
// };
// btn.addEventListener("click", getFacts);