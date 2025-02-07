// class Minheap{
//     constructor(){
//         this.heap = []
//     }
//     getParentIndex(index){
//         return Math.floor((index-1)/2);
//     }
//     getLeftIndex(index){
//         return 2*index+1;
//     }
//     getRightIndex(index){
//         return 2*index+2;
//     }
//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
//     }
//     // Insertion
//     insert(value){
//         this.heap.push(value);
//         this.heapifyUp()
//     }
//     heapifyUp(){
//         let index = this.heap.length-1;
//         while(index>0){
//             let parentIndex = this.getParentIndex(index);
//             if(this.heap[parentIndex]>this.heap[index]){
//                 this.swap(parentIndex,index);
//                 index = parentIndex;
//             }else{
//                 break;
//             }
//         }
//     }

//     // Deletion
//     // deleteMin(){
//     //     if(this.heap.length==0) return null;
//     //     if(this.heap.length==1) return this.heap.pop();
//     //     let deletedVal = this.heap[0];
//     //     this.heap[0] = this.heap.pop();
//     //     this.heapifyDown();
//     //     return deletedVal
//     // }
//     // heapifyDown(){
//     //     let index = 0;
//     //     while(true){
//     //         let smaller = this.getLeftIndex(index)
//     //         let right = this.getRightIndex(index);

//     //         if(right<this.heap.length && this.heap[right]<this.heap[smaller]){
//     //             smaller = right;
//     //         }
//     //         if(this.heap[index]>this.heap[smaller]){
//     //             this.swap(index,smaller);
//     //             index = smaller;
//     //         }else{
//     //             break;
//     //         }
//     //     }
//     // }
// }
// const minHeap = new Minheap();
// minHeap.insert(20)
// // minHeap.insert(30)
// // minHeap.insert(50)
// // minHeap.insert(10)
// console.log(minHeap.heap)
// console.log(minHeap.deleteMin())
// console.log(minHeap.heap)

function heapSort(arr){
    let n = arr.length;
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i);
    }
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]];
        heapify(arr,i,0);
    }
}

function heapify(arr,n,i){
    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;

    if()
}