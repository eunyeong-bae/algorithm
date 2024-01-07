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

// put() : 데이터 추가
ChainingHashTable.prototype.put = function(key, value){
    let index = this.hashCode(key);
    console.log(`key: ${key} -> index: ${index}`);

    if(this.table[index] === undefined){
        this.table[index] = new LinkedList();
    }

    this.table[index].append(new Element(key, value));
    this.length++;

    return true;
}

// getBuffer() : 데이터 셋 반환
ChainingHashTable.prototype.getBuffer = function(){
    let array = [];
    for(let i=0; i<this.table.length;i++){
        if(this.table[i]){
            let current = this.table[i].head;
            do{
                array.push(current.data);
                current = current.next;
            }while(current);
        }
    }
    return array;
}

// print() : 데이터 셋 출력
ChainingHashTable.prototype.print = function(){
    for(let i=0; i<this.table.length;i++){
        //linkedlist 가 있다는 것이니까
        if(this.table[i]){
            // linkedlist property 인 head 넣어주기
            let current = this.table[i].head;
            process.stdout.write(`#${i + 1} `);
            do{
                process.stdout.write(`-> ${current.data.key}: ${current.data.value}`);
                current = current.next;
            }while(current);
            console.log("");
        }
    }
}

let cht = new ChainingHashTable();
cht.put("Ana", 172)
cht.put("Donnie", 183) //collision
cht.put("Sue", 163)
cht.put("Jamie", 168) //collision
cht.put("Paul", 190)
console.log(cht)

cht.print();
console.log(cht.getBuffer())