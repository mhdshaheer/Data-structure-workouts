class Node{
    constructor(value){
        this.value = value ;
        this.next = null ;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    append(value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node
        }
    }
    print(){
        let curr = this.head;
        let allValues = ''
        if(!curr){
            console.log("linked list is empty")
        }else{
            while(curr){
                allValues+=`${curr.value} ->`;
                curr = curr.next;
            }
            console.log(allValues,null)
        }
    }
}
const list = new LinkedList();
list.append(10);
list.append(90);
list.print();``