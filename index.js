//LinkedList basics

//Node : 
// 1.Data field 
// 2.Next-pointer(referance to next node)

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

// Initialize a linkedList
// initially head and size are null and zero
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    };
    isEmpty(){
        return this.size==0;
    }
    getSize(){
        return this.size;
    }
    // Here we add the data to the linkedList
    prepend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head; //here we store the value of head into 'node.next';
            this.head = node;
        }
        this.size ++
    }

    print(){
        if(this.isEmpty()){
            console.log("linkedlist is empty")
        }else{
            let curr = this.head;
            let listValues = '';
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList();
list.print();
list.prepend(20);
list.print();
list.prepend(40);
list.print();




