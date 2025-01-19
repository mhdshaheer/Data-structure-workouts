class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null
    }
    append(value){
        let node = new Node(value);
        if(this.head == null){
            this.head = node;
            this.tail = node;
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
        }
    }
    print(){
        if(this.head==null){
            console.log("Empty linked list")
        }else{
            let curr = this.head;
            let allValues = ''
            while(curr){
                allValues +=`${curr.value}->`;
                curr = curr.next;
            }
            console.log(allValues,null)
        }
    }
    removeDuplicate(){
        if(!this.head){
            console.log("linked list is empty");
        }else{
            let curr = this.head;
            let valueAll = ''
            while(curr.next){
                if(curr.next.value==curr.value){
                    curr = curr.next.next;
                }else{
                    curr = curr.next;
                }
                valueAll +=`${curr.value} ->`
            }
            console.log(valueAll,null)
        }
    }
}
const list = new LinkedList();
list.append(90)
list.append(90)
list.append(90)
list.append(920)
list.removeDuplicate()
list.print();