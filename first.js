// //1. LinkedIn
// //2. Instagram
// const profile = {
//     profId : "Shradhakhapra",
//     posts : 195,
//     followers : 569,
//     following : 4,
//     isFollow : true,
//     profName :"Shradhakhapra",
//     bioInfo : "Entrepreneur, Apna College| Ex-MicroSoft, DRDO, To educate is the highest privilege" 
// };  
// console.log(profile);

// //3. Input -> Multiple of 5 or not
// let input = prompt("Enter a number");
// if(input%5 === 0){
//     console.log(input, "is a multiple of 5");
// }
// else{
//     console.log(input, "is not a multiple of 5");
// }

// //4. Grade the student
// let x = prompt("enter the marks");
// if(x<=100 && x>=90){
//     console.log("Grade A");
// } else if(x<=89 && x>=70){
//     console.log("Grade B");
// } else if(x<=69 && x>=60){
//     console.log("Grade C");
// } else if(x<=59 && x>=50){
//     console.log("Grade D");
// }  else if(x<=49 && x>=0){
//     console.log("Grade F");
// } else {
//     console.log("Reload and re-enter");
// }

// //5. Print even numbers from 0 to 100
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// //6. Guess the number
// let ranNum = 97; 
// let num = prompt("Guess the number");
// while(num!=ranNum){
//    num = prompt("try again");
// }
// alert("congrats you guessed it right!!");

// //7. Generating @username
// let fullName = prompt("Enter your Fullname");
// let output = alert(`"@${fullName}${fullName.length}"`);

// //8. Average of array elements
// let marks = [85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum += marks[i];
// }
// // for (let val of marks){
// //     sum+=val;
// // }
// let average = sum/marks.length;
// console.log(average);

// //9. Final Price after discount
// let prices =[250,645,300,900,50];
// console.log(`Actual Prices - ${prices}`);
// let discPrices=[];
// for(let i=0;i<prices.length;i++){
//     discPrices[i]=prices[i]-0.1*prices[i];
// }
// console.log(`Discounted Prices - ${discPrices}`);

// //10. a.Remove first company from the array
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies);
// companies.shift();
// console.log(companies);
// //b. Remove Uber and add ola in its place
// companies.splice(1,1,"Ola");
// console.log(companies);
// //c. Add Amazon at the end
// companies.push("Amazon");
// console.log(companies);

// //11. count Vowels
// function countVowels(a) {
//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === "a" || a[i] === "e" || a[i] === "i" || a[i] === "o" || a[i] === "u") {
//             count++;
//         }
//     }
//     return count;
// }
// let str = prompt("Enter a string:");
// out = countVowels(str);
// alert(out);

// //12. above question with arrow function
// const countVowels = (a) =>{
//     let count =0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === "a" || a[i] === "e" || a[i] === "i" || a[i] === "o" || a[i] === "u") {
//             count++;
//         }
//     }
//     return alert(count);
// }
// let str = prompt("enter a string");
// countVowels(str);

// //13. print the square of each value using forEach loop
// let arr=[40,100];
// let calSquare = (val)=>{
//     console.log(val*val); // val**2
// };
// arr.forEach(calSquare);

// //14. filter marks of students that scored 90+
// let arr=[100,89,76,99,93,99,99,56,34,90];
// const filteredMarks= arr.filter((val)=>{
//     return val>90;
// });
// console.log(filteredMarks);

// //15. reduce method to calc. sum and product of numbers from 1 to n.
// let n = prompt("Enter a Number");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// const reduceSum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// console.log(reduceSum);
// const reduceMul=arr.reduce((prev,curr)=>{
//     return prev*curr;
// });
// console.log(reduceMul);

// //16. append using js
// let print = document.querySelector("#js");
// print.innerText = print.innerText +" from Apna college students";

// //17. add unique text in 3 divs with same classname
// let divs =document.querySelectorAll(".box");
// // let i=1;
// // for(div of divs){
// //     div.innerText=div.innerText+`\nhello${i}`;
// // }
// divs[0].innerText=divs[0].innerText+"\nHello";
// divs[1].innerText=divs[1].innerText+"\nCello";
// divs[2].innerText=divs[2].innerText+"\nMello";

// //18. clickme button as first element inside the body tag.
// let btn = document.createElement("button");
// btn.innerText="clickme";
// btn.style.backgroundColor="red";
// btn.style.color="white";
// document.querySelector("body").prepend(btn);

// //19.css in js(classList)
// let para=document.querySelector("p");
// // para.setAttribute("class","content");
// para.classList.add("content");
// para.classList.remove("content"); 

// //20. dark light mode toggle button
// let modeBtn = document.querySelector("#mode");
// let curMode="light";
// let handler=()=>{
//     if (curMode==="light"){
//         curMode="dark";
//         // document.querySelector("body").style.backgroundColor="black";
//         // document.querySelector("#mode").style.borderColor="white";
//         document.querySelector("body").classList.add("dark");
//         document.querySelector("body").classList.remove("light");
//     } else{
//         curMode="light";
//         // document.querySelector("body").style.backgroundColor="white";
//         document.querySelector("body").classList.add("light");
//         document.querySelector("body").classList.remove("dark");
//     }
// }
// modeBtn.addEventListener("click",handler);

// //21. viewData() that allows user to view website data.
// let data ="secret info";
// class user{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("data =", data);
//     }
// }
// let student1 = new user("manoj","manoj02@gmail.com");
// let student2 = new user("kumar","kumar02@gmail.com");

// //22. editData() that allows admin to edit user website data.
// let data ="secret info";
// class user{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("data =", data);
//     }
// }
// class Admin extends user{
//     constructor(name,email){
//             super(name,email);
//     }
//     editData(){
//         data = "some new value";
//     }
// }
// let student1 = new user("manoj","manoj02@gmail.com");
// let student2 = new user("kumar","kumar02@gmail.com");
// let admin = new Admin("admin", "admin@college.com");