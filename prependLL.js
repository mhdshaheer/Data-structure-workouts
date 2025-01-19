// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0
//     };
//     isEmpty(){
//         return this.size==0
//     }
//     prepend(value){
//         let node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("LinkedList is empty")
//         }else{
//             let curr = this.head;
//             let listValues = '';
//             while(curr){
//                 listValues +=`${curr.value}-> `;
//                 curr= curr.next
//             }
//             console.log(listValues+null)
//         }
//     }
// }
// const list = new LinkedList();
// list.prepend(90);
// list.prepend(80);
// list.print()

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
        return this.size==0
    };
    prepend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size++;
    }
    print(){
        let curr = this.head;
        let allValues = '';
        if(this.isEmpty()){
            console.log('linked list is empty');
        }else{
            while(curr){
                allValues += `${curr.value}-> `;
                curr = curr.next
            }
            console.log(allValues)
        }
    }
}
const list = new LinkedList();
list.print();
list.prepend(89);
list.prepend(90);
list.print()