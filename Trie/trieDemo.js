// // class Node{
// //     constructor(){
// //         this.children = [];
// //         this.isWordEnd = false
// //     }
// // }
// // class Trie{
// //     constructor(){
// //         this.root = new Node();
// //     }
// //     insert(word){
// //         let curr = this.root;
// //         for(let i =0;i<word.length;i++){
// //             if(!(word[i] in curr.children)){
// //                 curr.children[word[i]] = new Node();
// //             }
// //             curr = curr.children[word[i]]
// //         }
// //         curr.isWordEnd = true;
// //     }
// //     search(word){
// //         let curr = this.root;
// //         for(let i=0;i<word.length;i++){
// //             if(!(word[i] in curr.children)){
// //                 return false;
// //             }
// //             curr = curr.children[word[i]];
// //         }
// //         return curr.isWordEnd
// //     }
// //     startWithPrefix(word){
// //         let curr = this.root;
// //         for(let i=0;i<word.length;i++){
// //             if(!(word[i] in curr.children)){
// //                 return false;
// //             }
// //             curr = curr.children[word[i]]
// //         }
// //         return true
// //     }
// //     findNode(prefix){
// //         let curr = this.root;
// //         for(let i=0;i<prefix.length;i++){
// //             if(!(prefix[i] in curr.children)){
// //                 return null;
// //             }
// //             curr = curr.children[prefix[i]]
// //         }
// //         return curr
// //     }
// //     autoComplete(prefix){
// //         let results = [];
// //         let node = this.findNode(prefix);
// //         if(!node) return results;
// //         this.wordCollect(node,prefix,results);
// //         return results;
// //     }
// //     wordCollect(node,prefix,results){
// //         if(node.isWordEnd){
// //             results.push(prefix)
// //         }
// //         for(let char in node.children){
// //             this.wordCollect(node.children[char],prefix+char,results)
// //         }
// //     }
// // }

// // const trie = new Trie();
// // trie.insert('App');
// // trie.insert('Apple');
// // trie.insert('Orange');
// // trie.insert('Cat');
// // trie.insert('Apply');
// // console.log(trie.startWithPrefix('A'))
// // console.log(trie.autoComplete('A'))
// //==========================================================================
// // function heapSort(arr){
// //     let n = arr.length;

// //     for(let i=Math.floor(n/2)-1;i>=0;i--){
// //         heapify(arr,n,i)
// //     }
// //     for(let i=n-1;i>0;i--){
// //         [arr[0],arr[i]] = [arr[i],arr[0]];
// //         heapify(arr,i,0);
// //     }
// // }

// // function heapify(arr,n,i){
// //     let largest = i;
// //     let left = 2*i+1;
// //     let right = 2*i+2;

// //     if(left<n && arr[left] >arr[largest]){
// //         largest = left;
// //     }
// //     if(right<n && arr[right]>arr[largest]){
// //         largest= right;
// //     }
// //     if(largest!=i){
// //         [arr[i],arr[largest]] = [arr[largest],arr[i]];
// //         heapify(arr,n,largest)
// //     }
// // }
// // let arr = [12, 11, 13, 5, 6, 7];
// // heapSort(arr);
// // console.log("Sorted array:", arr)

// //==================================================

// // class Node{
// //     constructor(value){
// //         this.value = value;
// //         this.left = null;
// //         this.right = null;
// //     }
// // }
// // class BST{
// //     constructor(){
// //         this.root = null
// //     }
// //     insert(value){
// //         const newNode = new Node(value);
// //         if(this.root==null){
// //             this.root = newNode
// //         }else{
// //             this.insertNode(this.root,newNode);
// //         }
// //     }
// //     insertNode(root,newNode){
// //         if(newNode.value<root.value){
// //             if(root.left==null){
// //                 root.left = newNode;
// //             }else{
// //                 this.insertNode(root.left,newNode)
// //             }
// //         }else{
// //             if(root.right==null){
// //                 root.right = newNode;
// //             }else{
// //                 this.insertNode(root.right,newNode)
// //             }
// //         }
// //     }
// //     //Traversals
// //     preOrder(root){
// //         if(root){
// //             console.log(root.value);
// //             this.preOrder(root.left);
// //             this.preOrder(root.right)
// //         }
// //     }
// //     //Search
// //     search(root,value){
// //         if(root){

// //             if(value==root.value){
// //                 return true
// //             }else if(value<root.value){
// //                  this.search(root.left,value)
// //             }else{
// //                  this.search(root.right,value)
// //             }
// //             return false
// //         }
// //     }
// //     min(root){
// //         if(root.left==null){
// //             return root.value
// //         }else{
// //             return this.min(root.left)
// //         }
// //     }
// //     findClosest(target){
// //         let curr = this.root;
// //         let closest = this.root.value;
// //         while(curr){
// //             if(Math.abs(target-curr.value) < Math.abs(target-closest)){
// //                 closest = curr.value;
// //             }else if(target<curr.value){
// //                 curr = curr.left
// //             }else if(target> curr.value){
// //                 curr = curr.right;
// //             }else{
// //                 return 
// //             }
// //         }
// //         return closest;
// //     }

// //     //is bst;
// //     isBst(root,min=-Infinity,max=Infinity){
// //         if(!root){
// //             return true;
// //         }else if(root.value>=max || root.value<=min){
// //             return false
// //         }
// //         return (this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max))
// //     }
// //     //BFS
// //   levelorder(root){
// //     let queue = [];
// //     queue.push(root);
// //     while(queue.length){
// //         let curr = queue.shift();
// //         console.log(curr.value);
// //         if(curr.left){
// //             queue.push(curr.left)
// //         }
// //         if(curr.right){
// //             queue.push(curr.right)
// //         }
// //     }
// //   }
// //   delete(value){
// //     this.root = this.deleteNode(this.root,value)
// //   }
// //   deleteNode(root,value){
// //     if(root==null){
// //         return root
// //     }
// //     if(value<root.value){
// //         this.deleteNode(root.left,value)
// //     }else if(value>root.value){
// //         this.deleteNode(root.right,value)
// //     }else{
// //         if(!root.left && !root.right){
// //             return null;
// //         }else if(!root.right){
// //             return root.left;
// //         }else if(!root.left){
// //             return root.right;
// //         }
// //         root.value= this.min(root.right);
// //         root.right = this.deleteNode(root.right,root.value)

// //     }
// //     return root;

// //   }
// // }
// // const bst = new BST();
// // bst.insert(20);
// // bst.insert(30);
// // bst.insert(10);
// // bst.preOrder(bst.root)
// // console.log(bst.search(bst.root,22))
// // console.log(bst.min(bst.root))
// // console.log(bst.findClosest(19))
// // console.log(bst.isBst(bst.root))
// // bst.levelorder(bst.root)








// //============review==================

// // class Heap{
// //     constructor(){
// //         this.heap = [];
// //     }
// //     insert(value){
// //         this.heap.push(value);
// //     }
// // }

// // class Node{
// //     constructor(value){
// //         this.value = value
// //     }
// // }
// // class Trie{
// //     constructor(){
// //         this.root = new Node('Root')
// //     }
// //     insert(value){
// //         let curr = this.root;
// //         for(let i=0;i<value.length;i++){
// //             if(!(value[i] in ))
// //         }
// //     }
// // }

// // ==========================================================



















// class Node{
//     constructor(){
//         this.children = {};
//         this.isWordEnd = false;
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node();
//     }
//     insert(word){
//         let curr = this.root;
//         for(let char of word){
//             if(!(char in curr.children)){
//                 curr.children[char] = new Node();
//             }
//             curr = curr.children[char];
//         }
//         curr.isWordEnd = true;
//     }
//     search(word){
//         let curr = this.root;
//         for(let char of word){
//             if(!(char in curr.children)){
//                 return false;
//             }
//             curr = curr.children[char]
//         }
//         return curr.isWordEnd;
//     }
//     prefixfind(prefix){
//         let curr = this.root;
//         for(let char of prefix){
//             if(!(char in curr.children)){
//                 return false;
//             }
//             curr = curr.children[char]
//         }
//         return true
//     }
//     findWord(prefix){
//         let curr = this.root;
//         for(let char of prefix){
//             if(!(char in curr.children)){
//                 return null;
//             }
//             curr = curr.children[char]
//         }
//         return curr;
//     }
//     autoComplete(prefix){
//         let results = [];
//         let node = this.findWord(prefix);
//         if(!node) return results;
//         this.collectWord(node,prefix,results);
//         return results;
//     }
//     collectWord(node,prefix,results){
//         if(node.isWordEnd){
//             results.push(prefix);
//         }
//         for(let char in node.children){
//             this.collectWord(node.children[char],prefix+char,results)
//         }
//     }
//     longestPrefix(){
//         let curr = this.root;
//         let prefix = '';
//         while(curr&&!curr.isWordEnd&&Object.keys(curr.children).length==1){
//             let char = Object.keys(curr.children)[0];
//             prefix+=char;
//             curr = curr.children[char]
//         }
//         return prefix
//     }

// }
// const trie = new Trie();
// trie.insert('app');
// trie.insert('apply');
// // trie.insert('cat');
// trie.insert('apple')
// // console.log(trie.autoComplete('appl'))
// console.log(trie.longestPrefix())


function heapSort(arr){
    let n = arr.length;

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
}

function heapify(arr,n,i){
    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;

    if(left<n && arr[left]>arr[largest]){
        largest = left;
    }
    if(right<n && arr[right]>arr[largest]){
        largest = right;
    }
    if(largest!=i){
        [arr[i],arr[largest]] = [arr[largest],arr[i]];
        heapify(arr,n,largest)
    }
}

let arr = [8,3,6,4,2]
heapSort(arr);
console.log(arr)