const HASH_SIZE = 5; // 충돌을 위해 변경

// Element() : key, value 저장을 위한 생성자
function Element(key, value){
    this.key = key;
    this.value = value;
}

// LinearHashTable() : 생성자
function LinearHashTable(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// hashCode() : 해시 함수
LinearHashTable.prototype.hashCode = function(key){
    let hash = 0;
    for(let i=0; i<key.length; i++){
        hash += key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
}

// clear() : 초기화
LinearHashTable.prototype.clear = function(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// size() : 크기 반환
LinearHashTable.prototype.size = function(){
    return this.length;
}

// getBuffer() : 데이터 셋 반환
LinearHashTable.prototype.getBuffer = function(){
    let array = [];
    for(let i=0; i<this.table.length;i++){
        if(this.table[i]){
            array.push(this.table[i]);
        }
    }
    return array;
}

// print() : 데이터 셋 출력
LinearHashTable.prototype.print = function(){
    for(let i=0; i<this.table.length;i++){
        if(this.table[i]){
            console.log(i+" -> "+this.table[i].key +": "+this.table[i].value);
        }
    }
}

// put() : 데이터 추가
LinearHashTable.prototype.put = function(key, value){
    let index = this.hashCode(key);
    let startIndex = index;
    console.log(`key: ${key} -> index: ${index}`);

    do{
        if(this.table[index] === undefined){
            this.table[index] = new Element(key, value);
            this.length++;

            return true;
        }
        index = (index + 1) % HASH_SIZE;
    }while(index !== startIndex)

    return false;
}

LinearHashTable.prototype.get = function(key) {
    let index = this.hashCode(key);
    let startIndex = index;

    do{
        if(this.table[index] !== undefined && this.table[index].key === key){
            return this.table[index].value;
        }
        
        index = (index + 1) % HASH_SIZE;

    }while( index !== startIndex);

    return undefined;
}

let cht = new LinearHashTable();

cht.put("Ana", 172);
cht.put("John", 179);
cht.put("Donnie", 183);
cht.put("Mindy", 190);
cht.put("Paul", 168);//collistion
console.log("");

console.log(cht.get("Ana"))
console.log(cht.get("Paul"))
console.log(cht.get("kim"))