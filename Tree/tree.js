class Tree{
    constructor(value,left=null,right=null){
        this.value = value;
        this.left = left,
        this.right = right;
    }
}
function isBst(root,min=-Infinity,max=Infinity){
    if(!root){
        return true;
    }
    if(root.value<=min || root.value>=max){
        return false
    }
    return isBst(root.left,min,root.value) && isBst(root.right,root.value,max)
}
const tree = new Tree(10,new Tree(4),new Tree(11));
const invalid = new Tree(10, 
    new Tree(5, new Tree(2), new Tree(12)),
    new Tree(15, new Tree(13), new Tree(20))
);
console.log(isBst(invalid))