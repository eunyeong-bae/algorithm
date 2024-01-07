// TrieNode() : 문자값과 단어 여부값 저장을 위한 노드 생성자
function TrieNode() {
    //key : 문자, value: trienode
    this.children = {}; //key:value 형태로 저장 ex) C:{...childnode}
    this.endOfWord = false; //단어 여부
}

// Trie() : 노드의 시작인 루트 노드 저장을 위한 생성자
function Trie(){
    this.root = new TrieNode();
}

//insert() : 문자열 추가
Trie.prototype.insert = function(word){
    let current = this.root;

    for(let i=0; i<word.length; i++){
        let ch = word[i]; //삽입할 문자열 중 하나의 문자
        let node = current.children[ch]; //'can' 입력 -> c:{}

        if(node === undefined){
            node = new TrieNode();
            current.children[ch] = node;
        }

        current = node;
    }

    current.endOfWord = true;
}

//search() : 문자열 검색
Trie.prototype.search = function(word){
    let current = this.root;

    for(let i=0; i<word.length; i++){
        let ch = word[i];
        let node = current.children[ch];

        if(node === undefined){
            return false;
        }

        current = node;
    }

    return current.endOfWord;
}


let trie = new Trie();

trie.insert("be")
trie.insert("bee")
trie.insert("can")
trie.insert("cat")
trie.insert("cd")

console.log(trie.root)
console.log(trie.root.children["c"])

console.log(trie.search("bear"))
console.log(trie.search("b"))
console.log(trie.search("bee"))