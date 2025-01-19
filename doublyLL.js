class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    isEmpty(){
        return this.head == null ; 
    }
    append(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }
    reverse(){
        let curr = this.tail;
        let reverseValues = '';
        while(curr){
            reverseValues +=`${curr.value}-> `;
            curr = curr.prev;
        }
        console.log('reversed linked list:',reverseValues,null)
    }
    print(){
        let curr = this.head;
        let allValues = '';
        while(curr){
            allValues +=`${curr.value}-> `;
            curr = curr.next
        }
        console.log('linked list:',allValues,null)
    }
}
const list = new LinkedList();
list.append(10)
list.append(40)
list.append(90)
list.print();
list.reverse();