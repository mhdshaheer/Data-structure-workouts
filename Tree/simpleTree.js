class Node{
    constructor(value){
        this.value = value;
        this.children = []
    }
    addChild(child){
        this.children.push(child)
    }
}
class Tree{
    constructor(value){
        this.root =new Node(value);
    }
    isEmpty(){
        return this.root==null;
    }
    traverseDFS(root) {
        if (!root) return;
        console.log(root.value);
        root.children.forEach(child => this.traverseDFS(child));
    }
    traverseBFS(root){
        let queue = [root];
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            queue.push(...curr.children)
        }
    }

}
const tree = new Tree('Root');
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');

tree.root.addChild(nodeA);
tree.root.addChild(nodeB);
tree.root.addChild(nodeC);

nodeA.addChild(new Node('A1'))
nodeA.addChild(new Node('A2'))

nodeB.addChild(new Node('B2'))

nodeC.addChild(new Node('C1'))
nodeC.addChild(new Node('C2'))

tree.traverseDFS(tree.root)
console.log('=================')
tree.traverseBFS(tree.root)