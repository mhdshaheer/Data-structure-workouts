class Node{
    constructor(){
        this.children = {};
        this.isWordEnd = false;
    }
}
class Trie{
    constructor(){
        this.root = new Node('Root');
    }
    insert(word){
        let curr = this.root;
        for(let char of word){
            if(!(char in curr.children)){
                curr.children[char] = new Node()
            }
            curr = curr.children[char]
        }
        curr.isWordEnd = true;
    }
    search(word){
        let curr = this.root;
        for(let char of word){
            if(!(char in curr.children)){
                return false;
            }
            curr = curr.children[char]
        }
        return curr.isWordEnd
    }
    prefix(word){
        let curr = this.root;
        for(let char of word){
            if(!(char in curr.children)){
                return false;
            }
            curr = curr.children[char]
        }
        return true;
    }
    findword(prefix){
        let curr = this.root;
        for(let char of prefix){
            if(!(char in curr.children)){
                return 
            }
            curr = curr.children[char];
        }
        return curr;
    }
    autoComplete(prefix){
        let results = [];
        let node = this.findword(prefix);
        if(!node) return results;
        this.collectWord(node,prefix,results);
        return results;
    }
    collectWord(node,prefix,results){
        if(node.isWordEnd){
            results.push(prefix)
        }
        //We need key of children of a specific char;
        for(let char in node.children){
            this.collectWord(node.children[char],prefix+char,results)
        }
    }
    longestPrefix(){
        let prefix = '';
        let curr = this.root;
        while(curr && !curr.isWordEnd && Object.keys(curr.children).length==1){
            let char = Object.keys(curr.children)[0];
            prefix+=char;
            curr = curr.children[char]
        }
        return prefix
    }

}

const trie = new Trie();
trie.insert('cat');
trie.insert('app');
trie.insert('apply');
trie.insert('apple')
// console.log(trie.search('cat'))
// console.log(trie.prefix('app'));
console.log(trie.autoComplete('c'))

// console.log(trie.longestPrefix())