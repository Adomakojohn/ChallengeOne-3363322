class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
      insert(word) {
        let current = this.root;
        
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
        return null;
    }
    
    search(word) {
        let node = this.traverse(word);
        return node !== null && node.isEndOfWord;
    }
    
    startsWith(prefix) {
        return this.traverse(prefix) !== null;
    }
      traverse(word) {
        let current = this.root;
        
        for (let char of word) {
            if (!current.children[char]) {
                return null;
            }
            current = current.children[char];
        }
        return current;
    }
}

module.exports = Trie;
