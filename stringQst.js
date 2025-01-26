// const str = "abacdaahuajuia";
// const strArr = [...str];
// let count = 0;
// function charWhere(array,letter,position){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===letter){
//             count++
//             if(count===position){
//                 console.log("find at",i,"th index");
//                 break;
//             }
//         }
//     }
// }
// charWhere(strArr,'a',3);

//Remove duplicate from the string
// const str = 'shaheer';
// const strArr = [...str];
// function removeDuplicate(array){
//     let newArr = []
//     for(let i=0;i<array.length;i++){
//         if(!newArr.includes(array[i])){
//             newArr.push(array[i])
//         }
//     }
//     return newArr.join('');
// }
// console.log(removeDuplicate(strArr))

// Palindrome
// const str = 'racecar';
// function isPalindrome(str){
//     for(let i = 0;i<str.length;i++){
//         if(str[i]!==str[str.length-1-i] && i>(str.length-1-i)){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome(str))

//remove element from the array;
let arr = ['a','b','c','d','e']
arr.splice(2,1);
console.log(arr)