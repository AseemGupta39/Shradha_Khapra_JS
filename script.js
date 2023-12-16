// let student = {
//     name:'rahul kumar',
//     age:20,
//     cgpa:7.5,
//     isPass:true
// };

// for(let prop in student){
//     console.log(prop," = ",student[prop]);
// }

// let name = 'aseem'
// let special_string = `hello my name is ${name}`;
// console.log(special_string)

// let username = prompt("Enter your full name: ")
// username = `@${username}${username.length}`
// console.log(username);

// let arr = [85,97,44,37,76,60];
// let sum=0;
// for(let num of arr){
//     sum+=num;
// }
// console.log(sum/arr.length);

// let arr = [85,97,44,37,76,60];
// for(let i = 0;i<arr.length;i++){
//     arr[i]*=0.9;
// }
// console.log(arr);

// let arr = ['b','m','u','g','i','n'];
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.splice(1,1,'o');
// console.log(arr);
// arr.push('a');
// console.log(arr);

// function sum(a,b){
//     return a+b;
// }

// const arrow_sum = (a,b)=>{
//     console.log(a+b);
// }

// const mul = (a,b) => {
//     console.log(a*b);
// }

// function is_vowel(char){
//     char = char.toLowerCase();
//     if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ){
//         return 1;
//     }
//     return 0;
// }

// function no_of_vowel(string){
//     let count = 0;
//     for(let char of string){
//         count += is_vowel(char); 
//     }
//     return count;
// }

// const is_vowel_arrow = (char) => {
//     char = char.toLowerCase();
//     if(char === 'a' || char === 'e' ||
//      char === 'i' || char === 'o' ||
//       char === 'u' ){
//         return 1;
//     }
//     return 0;
// }

// const no_of_vowel_arrow = (string) => {
//     let count = 0;
//     for(let char of string){
//         count += is_vowel(char); 
//     }
//     return count;
// } 

// let arr = [1,2,3,4,5,6,7,8,9] ;

// arr.forEach((val,idx,arr) => {
//     console.log(val**2);
// });

       

// let div = document.querySelector('div');
// console.log(div);

// let id = div.getAttribute('id');
// console.log(id);

// let name = div.getAttribute('name');
// console.log(name);



// console.dir(window.document);

// let heading = document.getElementById('heading');
// console.log(heading);
// console.dir(heading);



// let headings = document.getElementsByClassName('heading-class');
// console.log(headings);
// console.dir(headings);


// let ele = document.querySelector('.heading-class');


// let h2_text = document.querySelector('h2');
// h2_text.innerText = ${h2_text.innerText} from apna college students;


// let divs = document.querySelectorAll('.box');
// divs[0].innerText = "unique elements 1";
// divs[1].innerText = "unique elements 2";
// divs[2].innerText = "unique elements 3";


// let count = 4;
// for(div of divs){
//     div.innerText = unique elements ${count++};  
// }


// let d1 = document.querySelector('.box');
// d1.setAttribute('class','apnacollege');

// let div = document.querySelector('div');
// console.log(div);

// div.style.fontSize="26px";

// div.innerText = "HELLO!";


// 12 min 59 sec

// let btn = document.createElement('button');
// btn.innerText = "Click me!";

// let div = document.querySelector('#box');
// div.append(btn);

// div.remove();   


let btn = document.createElement('button');
btn.innerText = "Click me!";

btn.style.backgroundColor = 'red';
btn.style.color = 'white';
document.querySelector('body').prepend(btn);
btn.style.borderWidth = '6px';



let para = document.querySelector("p");

// 26 : 01
// 3:05:00

para.classList.add('newclass');
// para.classList.remove('newclass');