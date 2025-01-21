class Queue{
    constructor(){
        this.s1 = [];
        this.s2 = [];
    }
    enqueue(data){
        this.s1.push(data)
    }
    dequeue(){
        if(this.s1.length===0){
            return console.log("Queue is empty")
        }
        while(this.s1.length!==0){
            this.s2.push(this.s1.pop())
        }
        let enqueued = this.s2.pop();
        while(this.s2.length!==0){
            this.s1.push(this.s2.pop())
        }
        return console.log("Enqueued : ",enqueued)
    }
    print(){
        console.log("Queue is :",this.s1)
    }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print()