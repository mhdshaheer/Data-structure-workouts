class MinHeap{
    constructor(){
        this.heap = [];
    }
    getParentIndex(index){
        return Math.floor((index-1)/2);
    }
    getLeftIndex(index){
        return 2*index+1;
    }
    getRightIndex(index){
        return 2*index+2
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }
    heapifyUp(){
        let index = this.heap.length-1;
        while(index){
            let parentIndex = this.getParentIndex(index);
            if(this.heap[index]<this.heap[parentIndex]){
                this.swap(index,parentIndex);
                index = parentIndex;
            }else break;
        }
    }
    deleteMin(){
        if(this.heap.length==0) return null;
        if(this.heap.length==1) return this.heap.pop();

        let deleted = this.heap[0];
        this.heap[0] = this.heap.pop();

        this.heapifyDown();
        return deleted;
    }
    heapifyDown(){
        let index = 0;
        while(true){
            let smaller = this.getLeftIndex(index);
            let right = this.getRightIndex(index);
            if(this.heap[smaller]>this.heap[right]){
                smaller = right;
            }
            if(this.heap[index]>this.heap[smaller]){
                this.swap(index,smaller);
                index = smaller
            }else{
                break;
            }
        }
    }
}
function heapSort(arr){
    let n = arr.length;

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i);
    }

    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
}
function heapify(arr,n,i){
    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;

    if(left<n && arr[left]>arr[largest]){
        largest = left;
    }
    if(right<n && arr[right]>arr[largest]){
        largest = right;
    }

    if(largest!=i){
        [arr[largest],arr[i]] = [arr[i],arr[largest]];
        heapify(arr,n,largest)
    }
}

const minheap = new MinHeap();
minheap.insert(120)
minheap.insert(20)
minheap.insert(40)
minheap.insert(100)
minheap.insert(10)
console.log(minheap.heap);
heapSort(minheap.heap)
console.log(minheap.heap);