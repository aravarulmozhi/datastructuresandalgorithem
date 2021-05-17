/*
function reverseString(str){
  //O(1)
let strArray= str.split("") //O(n)
let joinStr=[] //O(1)
for(let i=strArray.length; i>=0; i--){ //O(n)
  joinStr.push(strArray[i]) //O(1)
}
return joinStr.join(" ") //O(1)
}
console.log(reverseString("hello world"))
*/

/*const revString=(str)=>{
let strArr=str.split("")
return strArr.reverse().join("")
}
 console.log(revString("my name is aravind"))
*/

/* andrei solution */
/* solution-1*/
function reverseString(str){
/* check for input */
if(!str || str.length < 2 || typeof str !== 'string'){
  return "Hmm! that's not good"
}
const backward=[]
const totalitems=str.length-1;
for(let i=totalitems; i>=0; i--){
  backward.push(str[i])
}
console.log(backward);
return backward.join("")
}
console.log(reverseString("aravind"))

/* solution-2*/
function reverseString2(str){
  return str.split("").reverse().join("")
}
console.log(reverseString2("aravind"))


/* solution-3 */
const reverse3=str=> str.split("").reverse().join("");
console.log(reverse3("aravind"))

/* solution-4 */
const reverse4=str=>[...str].reverse().join("")
console.log(reverse4("aravind"))