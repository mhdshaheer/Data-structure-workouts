const nums = [12,55,33,-88,19];
for(let i = 1; i<nums.length;i++){
    let key = nums[i];
    let j = i-1;
    while(j>=0 && nums[j] > key){
        nums[j+1] = nums[j];
        j = j-1;
    }
    nums[j+1] = key;
}
console.log(nums)