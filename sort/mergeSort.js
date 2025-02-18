function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    console.log('left:',left)
    console.log('right',right)
    return merge(mergeSort(left),mergeSort(right));
}
function merge(leftArr,rightArr){
    let sortedArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortedArr.push(leftArr.shift());
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}
// let arr = [2,7,1,-6,-2,3]
let arr = [4,-9,3,-2.5];
console.log(mergeSort(arr))