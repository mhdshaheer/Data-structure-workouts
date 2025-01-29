class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(!root.left){
                root.left = newNode;
            }else{
                this.insertNode(root.left,newNode);
            }
        }else{
            if(!root.right){
                root.right = newNode;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    preorder(root){
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    search(root,value){
        if(root){
            if(root.value===value){
                return true;
            }else if(value<root.value){
                return this.search(root.left,value);
            }else if(value>root.value){
                return this.search(root.right,value)
            }

        }else{
            return false
        }

    }
    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
}

const bfs = new BinarySearchTree();
bfs.insert(10);
bfs.insert(15);
bfs.insert(25);
bfs.insert(5);
bfs.preorder(bfs.root)
console.log('found?:',bfs.search(bfs.root,5))
console.log("min value is :",bfs.min(bfs.root))
console.log("max value is :",bfs.max(bfs.root))