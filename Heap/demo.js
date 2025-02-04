class MinHeap{
    constructor(){
        this.heap = [];
    }
    getParentIndex(index){
        return Math.floor((index-1)/2);
    }
    getLeftIndex(index){
        return 2*index+1
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
        while(index>0){
            let parentIndex = this.getParentIndex(index);
            if(this.heap[parentIndex]<this.heap[index]){
                this.swap(parentIndex,index);
                index = parentIndex;
            }else{
                break;
            }
        }
    }
}