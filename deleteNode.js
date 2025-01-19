class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size == 0;
    }
    append(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next!==null){
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }
    print(){
        let curr = this.head;
        let allValues = '';
        if(this.isEmpty()){
            console.log("empty");
        }else{
            while(curr){
                allValues+=`${curr.value} ->`;
                curr = curr.next;
            }
            console.log(allValues,null)
        }
        
    }
    delete(value){
        if(this.isEmpty()){
            return console.log("linked list is empty,so deletion isn't possible");
        }else{
            // Delete from the beginning
            if(this.head.value === value){
                this.head = this.head.next;
                return
            }
            // Delete from any position
            let curr = this.head;
            while(curr.next!==null && curr.next.value!==value){
                curr = curr.next;
            }
            
            if(curr.next===null){
                console.log(`The value ${value} not found in linkedList`)
            }else{
                curr.next = curr.next.next;
            }

        }
    }
    insertAt(value,index){
        let node = new Node(value)
        if(this.size<=index-1 || index<0){
            return console.log("Invalid index")
        }
        if(index==0){
            node.next = this.head;
            this.head = node;
        }else{
            let curr = this.head;
            let i = 0;
            while(this.size>index-1 && i<index-1){
                curr = curr.next
                i++;
            }
            if(curr.next==null){
                curr.next = node;
            }else{
                node.next = curr.next;
                curr.next = node;
            }
        }
    }
}
const list = new LinkedList();
list.append(90);
list.append(100);
list.append(110);
list.append(120);
list.delete(120);
list.insertAt(888,3);
list.print()