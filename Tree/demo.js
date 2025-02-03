class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(root){
            if(newNode.value<root.value){
                if(root.left===null){
                    root.left = newNode;
                }else{
                     this.insertNode(root.left,newNode)
                }
            }else{
                if(root.right===null){
                    root.right = newNode;
                }else{
                     this.insertNode(root.right,newNode)
                }
            }
        }
    }
    min(root){
        if(root){
            if(root.left==null){
                return root.value;
            }else{
                return this.min(root.left)
            }
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(!root) return root;
        
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }else if(!root.right){
                return root.left
            }else if(!root.left){
                return root.right;
            }else{
                root.value = this.min(root.right);
                root.right = this.deleteNode(root.right,root.value)
            }
        }
        return root;
    }
    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right)
        }
    }
    closest(target){
        let curr = this.root;
        let closeVal = this.root.value;
        while(curr){
            if(Math.abs(target-curr.value) < Math.abs(target-closeVal)){
                closeVal = curr.value
            }else if(target<curr.value){
                curr = curr.left;
            }else if(target>curr.value){
                curr = curr.right
            }else{
                return
            }
        }
        return closeVal
    }
    isBst(root,min=-Infinity,max=Infinity){
        if(!root){
            return true;
        }else if(root.value>=max || root.value<=min){
            return false;
        }
        return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
    }
    search(root,value){
        if(root){
            if(value==root.value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value);
            }else{
                return this.search(root.right,value)
            }
        }
        return false
    }
    bfs(){
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}
const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(7)
bst.insert(15)
bst.insert(3)

console.log(bst.min(bst.root))
bst.inorder(bst.root)
console.log("Closest value is :",bst.closest(12))
console.log('BST ?',bst.isBst(bst.root))
console.log('Value found:',bst.search(bst.root,14))
bst.bfs()
