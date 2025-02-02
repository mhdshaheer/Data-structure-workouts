class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class Tree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root == null
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
        if(newNode.value<root.value){
            if(root.left== null){
                root.left = newNode;
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right = newNode;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }
        if(root){
            if(root.value === value){
                return true;
            }else if(root.value>value){
                return this.search(root.left,value);
            }else{
                return this.search(root.right,value)
            }
        }
    }
    preorder(root){
        if(root){
            console.log(root.value)
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }
    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }
    min(root){
        if(root){
            if(root.left==null){
                return root.value
            }else{
                return this.min(root.left)
            }
        }
    }
    max(root){
        if(root){
            if(root.right == null){
                return root.value;
            }else{
                return this.min(root.right)
            }
        }
    }
    closest(root,value){
        if(root){
            if(root.value==value){
                return console.log('Value:',root.value,'Left:',root.left?.value,'Right:',root.right?.value,'Parent:',root.parant)
            }else if(root.value>value){
                root.parant = root.value
                return this.closest(root.left,value)
            }else{
                root.parant = root.value
                return this.closest(root.right,value)
            }
        }
        
    }
}
const tree = new Tree();
tree.insert(10);
tree.insert(9);
tree.insert(1);
tree.insert(3);

console.log(tree.search(tree.root,4))
// tree.preorder(tree.root);
// tree.inorder(tree.root);
// tree.postorder(tree.root)
console.log(tree.min(tree.root))
console.log(tree.max(tree.root))
tree.closest(tree.root,10)