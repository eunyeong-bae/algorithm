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


//Test Code 1
let list = new LinkedList();
console.log(list);

list.head = new Node(123);
list.length++;
console.log(list);

list.head.next = new Node(456);
list.length++;
console.log(list);

