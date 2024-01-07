//자원을 한정지어 효율성을 높이기 위함
const HASH_SIZE=1013;

// Element() : key, value 저장을 위한 생성자
function Element(key, value){
    this.key = key;
    this.value = value;
}

// HashTable() : 생성자
function HashTable(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// hashCode() : 해시 함수
HashTable.prototype.hashCode = function(key){
    //djb2 hash function
    let hash = 5381; //seed
    for(let i=0; i<key.length; i++){
        hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
}

// put() : 데이터 추가
HashTable.prototype.put = function(key, value){
    let index = this.hashCode(key);
    console.log(`key: ${key} -> index: ${index}`);

    if(this.table[index] !== undefined){
        return false;
    }

    this.table[index] = new Element(key, value);
    this.length++;

    return true;
}

// get() : 데이터 조회
HashTable.prototype.get = function(key){
    return this.table[this.hashCode(key)];
}

// remove() : 데이터 삭제
HashTable.prototype.remove = function(key) {
    let element = this.table[this.hashCode(key)];

    if(element !== undefined){
        delete this.table[this.hashCode(key)];
        this.length--;
    }

    return element;
}

// clear() : 초기화
HashTable.prototype.clear = function() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// size() : 크기 변환
HashTable.prototype.size = function(){
    return this.length;
}

// getBuffer() : 데이터 셋 반환(실제 들어있는 값 만 반환하려고 for 사용)
HashTable.prototype.getBuffer = function(){
    let array = [];
    for(let i=0; i<this.table.length; i++){
        if(this.table[i]){
            array.push(this.table[i])
        }
    }
    return array;
}

// print() : 데이터 셋 출력(실제 들어있는 값 만 반환하려고 for 사용)
HashTable.prototype.print = function() {
    for(let i=0; i<this.table.length; i++){
        if(this.table[i]){
            console.log(i +  "-> " + this.table[i].key + ": "+ this.table[i].value)
        }
    }
}


let ht = new HashTable();

ht.put("Ana", 172)
ht.put("Donnie", 183)
ht.put("Sue", 163)
ht.put("Jamie", 168)
ht.put("Paul", 190)

console.log("");
console.log(ht.size());
ht.print();