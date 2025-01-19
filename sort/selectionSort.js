const nums = [9,3,6,2,0,4,7];
for(let i=0;i<nums.length;i++){
    let min_index = i;
    for(let j=i+1;j<nums.length;j++){
        if(nums[j]<nums[min_index]){
            min_index = j;
        }
    }
    let temp = nums[i];
    nums[i] = nums[min_index];
    nums[min_index] = temp
}
console.log('selection sorted:',nums)