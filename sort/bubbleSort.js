const nums = [5,4,6,3,8,2,9];
//Bubble sort ascending
for(let i = 0;i<nums.length;i++){
    for(let j = 0;j<nums.length;j++){
        if(nums[j]>nums[j+1]){
            let temp = nums[j];
            nums[j] = nums[j+1];
            nums[j+1] = temp
        }
    }
}
console.log('Ascending:',nums);
//Bubble sort descending
for(let i = 0;i<nums.length;i++){
    for(let j = 0;j<nums.length;j++){
        if(nums[j]<nums[j+1]){
            let temp = nums[j];
            nums[j] = nums[j+1];
            nums[j+1] = temp
        }
    }
}
console.log('Descending:',nums);

