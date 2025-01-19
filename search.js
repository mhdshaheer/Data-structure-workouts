//Linear search
// const age = [20,19,67,34,22,18];
// const val = 67;
// let index;
// for(let i = 0;i<age.length;i++){
//     if(age[i]===val){
//         index = age.indexOf(val);
//         break
//     }
// }
// console.log(index);

//=================================================================

// Find All Occurrences 
// const nums = [2,3,5,6,3,6,3];
// const target = 3;
// let indices = [];
// for(let i=0;i<nums.length;i++){
//     if(nums[i]===target){
//         indices.push(i)
//     }
// }
// console.log("indices:",indices)

//=================================================================

// Maximum Value Using Linear Search
// const nums = [12,145,7,34,89];
// let max = nums[0];
// for(let i = 0; i< nums.length;i++){
//     if(nums[i]>max){
//         max = nums[i]
//     }
// }
// console.log(max)

// ===============================================================

//Binary search
const marks = [10,20,32,45,65,87];
const val = 32;
let left = 0;
let index
let right = marks.length-1;
while(left<=right){
    let mid = Math.floor((left+right)/2);
    if(marks[mid]==val){
        index = marks.indexOf(val);
        break;
    }else if(marks[mid]>val){
        right = mid - 1;
    }else if(marks[mid]<val){
        left = mid + 1;
    }
}

if(index){
    console.log("Index is ",index)
}else{
    console.log("Element not found")
}