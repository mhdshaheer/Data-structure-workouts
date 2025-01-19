class Stack{
    constructor(){
        this.q1 = [];
        this.q2 = [];
    }
    push(data){
        this.q1.push(data);
    }
    pop(){
        if(this.q1<0) return "Stack is empty"
        while(this.q1.length!==1){
            this.q2.push(this.q1.shift())
        }
        let poped = this.q1.shift();
        this.q1 = this.q2;
        this.q2 = []
        return `Poped value : ${poped}`
    }
    print(){
        return console.log('Stack is : ',this.q1)
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.pop();
stack.print()