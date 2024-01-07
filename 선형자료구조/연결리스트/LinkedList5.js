// Node() : data & point 를 가지고 있는 객체
function Node(data){
    this.data = data;
    this.next = null;
}

// LinkedList() : head & length를 가지는 객체
function LinkedList(){
    this.head = null;
    this.length = 0;
}

// size() : 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function() {
    return this.length;
}

// isEmpty() : 객체 내 노드 존재 여부 확인
LinkedList.prototype.isEmpty = function() {
    return this.length === 0;
}

// printNode() : 노드 출력
LinkedList.prototype.printNode = function() {
    for(let node = this.head; node !=null; node = node.next){
        console.log(node.data)
        // process.stdout.write(`${node.data} -> `);
    }
    console.log("null");
}

// append() : 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function(value) {
    let node = new Node(value),
        current = this.head;
    
    if(this.head === null){
        this.head = node;
    } else {
        while(current.next != null){
            current = current.next;
        }
        current.next = node;
    }

    this.length++;
}

// insert() : position 위치에 노드 추가
LinkedList.prototype.insert = function(value, position = 0) {
    if(position < 0 || position > this.length){
        return false;
    }

    let node = new Node(value),
        current = this.head,
        index = 0, //내가 현재 몇번째 인덱스만큼 이동했는지 여부
        prev;
    
    if(position == 0){
        node.next = current;
        this.head = node;
    } else {
        while(index++ < position){
            prev = current;
            current = current.next;
        }

        node.next = current;
        prev.next = node;
    }

    this.length++;

    return true;
};

// remove(): value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function(value){
    let current = this.head,
        prev = current;
    
    // 값을 찾거나 끝지점에 오거나
    while( current.data != value && current.next != null){
        prev = current;
        current = current.next;
    }

    if(current.data != value){
        return null;
    }

    if(current === this.head){
        this.head = current.next;
    } else {
        prev.next = current.next;
    }

    this.length--;

    return current.data;
}

// removeAt() : position 위치 노드 삭제
LinkedList.prototype.removeAt = function(position=0){
    if(position < 0 || position >= this.length){
        return null;
    }

    let current = this.head,
        index = 0,
        prev;
    
    if(position == 0){
        this.head = current.next;
    } else {
        while(index++ < position){
            prev = current;
            current = current.next;
        }

        prev.next = current.next;
    }

    this.length--;

    return current.data;
}

//Test Code
let list = new LinkedList();

list.insert(1);
list.insert(10);
list.insert(100);
list.insert(2, 1);
list.insert(3, 3);
list.printNode();

console.log(list.removeAt(1000));
list.printNode();
console.log(list.removeAt(4));
list.printNode();
console.log(list.removeAt());
list.printNode();
console.log(list.removeAt(1));
list.printNode();
console.log(list.size());