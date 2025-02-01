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
    
}
const trie = new Trie();
trie.insert('cat');
trie.insert('bat');
console.log(trie.contains('cat'))
console.log(trie.startWithPrefix('cass'))