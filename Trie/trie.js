class Node{
    constructor(){
        this.children = {};
        this.isWordEnd = false;
    }
}
class Trie{
    constructor(){
        this.root = new Node();
        
    }
    insert(word){
        let curr = this.root;
        for(let i=0;i<word.length;i++){
            if(!(word[i] in curr.children)){
                curr.children[word[i]] = new Node()
            }
            curr = curr.children[word[i]]
        }
        curr.isWordEnd = true;
    }
    contains(word){
        let curr = this.root;
        for(let i=0;i<word.length;i++){
            if(!(word[i] in curr.children)){
                return false;
            }
            curr = curr.children[word[i]]
        }
        return curr.isWordEnd
    }
    startWithPrefix(prefix){
        let curr = this.root;
        for(let i=0;i<prefix.length;i++){
            if(!(prefix[i] in curr.children)){
                return false
            }
            curr = curr.children[prefix[i]]
        }
        return true
    }
    ///
    autocomplete(prefix){
        let results = [];
        let node = this.findNode(prefix);
        if(!node) return results;
        this.collectWords(node,prefix,results);
        return results;
    }
    collectWords(node,prefix,results){
        if(node.isWordEnd){
            results.push(prefix);
        }
        for(let char in node.children){
            this.collectWords(node.children[char],prefix+char,results);
        }
    }
    findNode(prefix) {
        let curr = this.root;
        for (let char of prefix) {
            if (!(char in curr.children)) {
                return null;
            }
            curr = curr.children[char];
        }
        return curr;
    }
    
}
const trie = new Trie();
trie.insert('cat');
trie.insert('bat');
trie.insert('app');
trie.insert('apple');
trie.insert('apply');

console.log(trie.contains('cat'))
console.log(trie.startWithPrefix('h'))
console.log(trie.autocomplete('ap'))