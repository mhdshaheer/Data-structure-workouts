class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(value){
        this.items.push(value);
    }
    dequeue(){
        if(this.items.length<=0){
            return 'Queue is empty'
        } 
        return this.items.shift()
    }
    peek(){
        if(this.items.length<=0){
            return "Queue is empty"
        }
        return this.items[0]
    }
    print(){
        if(this.items.length<=0){
            console.log('Queue is empty') ;
            return
        }
        // return this.items
        console.log('Queue items are :',this.items)
    }
}
const queue = new Queue()
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log("Dequeued value :",queue.dequeue())
console.log('Peek value is :',queue.peek())
queue.print()