import {LinkedList} from './LinkedList.mjs';

const HASH_SIZE = 37;

// Element() : key, value 저장위 한 생성자
function Element(key, value){
    this.key = key;
    this.value = value;
}

// ChainingHashTable() : 생성자
function ChainingHashTable() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// hashCode() : 해시 함수 loselose 
ChainingHashTable.prototype.hashCode = function(key){
    let hash = 0;
    for(let i=0; i<key.length;i++){
        hash += key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
}

// clear() : 초기화
ChainingHashTable.prototype.clear = function(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// size() : 크기 변환
ChainingHashTable.prototype.size = function(){
    return this.length;
}


let cht = new ChainingHashTable();
console.log(cht)

console.log(cht.hashCode("Ana"));

let ll = new LinkedList();
ll.append(new Element("Ana", 172));
console.log(ll)