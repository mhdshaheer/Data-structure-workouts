class Stack{
    constructor(){
        this.items = [];
    }
    // Push
    push(value){
        this.items.push(value)
    }
    // Pop
    pop(){
        if(this.items.length === 0){
            return "Underflow"
        }
        return this.items.pop()
    }
    // Peek
    peek(){
        return this.items[this.items.length-1]
    }
    // Print stack
    print(){
        let str = ''
        for(let i=0;i<this.items.length;i++){
            str +=`${this.items[i]} `
        }
        console.log("Stack element are :",str)
    }
}
const stack = new Stack()
stack.push(9)
stack.push(39)
stack.push(59)
stack.push(89)
stack.push(70)
console.log('Poped value : ',stack.pop())
console.log('Peek value : ',stack.peek())
stack.print()