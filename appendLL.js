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
        return this.size==0;
    };
    append(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next !==null){
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
            console.log("limked list is empty")
        }else{
            while(curr){
                allValues += `${curr.value}-> `;
                curr = curr.next;
            }
            console.log(allValues,null)
        }
    }
    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

}

const list = new LinkedList();
list.append(80);
list.append(100);
list.append(90);
list.print();
list.reverse();
list.print()