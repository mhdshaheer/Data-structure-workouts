// let str = ['b','h','a','y','c'];
// let str = ['sha','abc','jj','app']
// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr;
//     }
//     let mid = Math.floor(arr.length/2);
//     let left = arr.slice(0,mid);
//     let right = arr.slice(mid);
//     return merge(mergeSort(left),mergeSort(right));
// }

// function merge(leftArr,rightArr){
//     let sorted = [];
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sorted.push(leftArr.shift())
//         }else{
//             sorted.push(rightArr.shift())
//         }
//     }
//     return [...sorted,...leftArr,...rightArr]
// }
// console.log(mergeSort(str))

// let word = 'racecar';
// function isPalindrome(word){
//     let stack = [];
//     for(let i=0;i<word.length;i++){
//         stack.push(word[i]);
//     }
//     let stacklen = stack.length
//     let newStr = '';
//     for(let j=0;j<stacklen;j++){
//         newStr +=stack.pop();
//     }
//     return newStr===word
// }
// console.log(isPalindrome(word))

class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i);
        }
        return total % this.size
    }
    set(key,value){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKeyExist = bucket.find(item=>item[0]===key);
            if(sameKeyExist){
                sameKeyExist[1] = value
            }else{
                this.table[index].push([key,value])
            }
        }
    }
    display(){
        if(this.length<=0){
            console.log("no element found")
        }else{
            for(let i=0;i<this.size;i++){
                if(this.table[i]){

                    console.log(i,this.table[i][0]);
                }
            }
        }
    }
}
const table = new HashTable(20);
table.set('name','shaheer')
table.set('age',22)
table.display()