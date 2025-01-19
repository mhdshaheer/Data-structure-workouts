// function average(array){
//     let sum = 0;
//     let count=0
//     for(let i=0;i<array.length;i++){
//         if(array[i]%2==0){
//             sum +=array[i];
//             count++
            
//         }
//     }
//     return sum/count
// }
// let nums = [1,5,7,5,4,2,8]
// console.log(average(nums))

function reverseString(str){
    if(str.length==0) return ''
    return str[str.length-1]+reverseString(str.slice(0,str.length-1))
}
const name = 'shaheer';
console.log(reverseString(name))

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next =null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null
//     }
//     append(value){
//         let node = new Node(value);
//         if(!this.head){
//             this.head=this.tail=node;
//         }else{
//             this.tail.next=node;
//             this.tail = node;
//         }
//     }
//     print(){
//         if(!this.head){
//             console.log("Linkedlist is empty")
//         }else{
//             let curr = this.head;
//             let allValues = ''
//             while(curr){
//                 allValues +=`${curr.value}->`;
//                 curr = curr.next
//             }
//             console.log(allValues)
//         }
//     }
//     insertAt(value,index){
//         if(!this.head){
//             console.log("inserton is not possible")
//         }else{
//             let node = new Node(value);
//             let curr = this.head;
//             if(index==0){
//                 node.next = this.head;
//                 this.head=node
//             }else{

//                 while(index-1>0){
//                     console.log(index)
//                     curr=curr.next;

//                     index--
//                 }
//                 let next = curr.next;
//                 curr.next = node
//                 node.next =next
//             }
//         }
//     }
// }
// const list = new LinkedList();
// list.append(10);
// list.append(90);
// list.insertAt(80,0)
// // list.insertAt(80,1)
// list.print()


// let a =[1,2,4,5,6,7,9];
// let target = 4;
// function binarySearch(array,target){
//     let left = 0;
//     let right = array.length-1;
//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
//         if(array[mid]==target){
//             return array.indexOf(target);
//         }else if(array[mid]<target){
//             left = mid+1
//         }else if(array[mid]>target){
//             right = mid-1
//         }
//     }
//     return -1

// }
// console.log(binarySearch(a,target))