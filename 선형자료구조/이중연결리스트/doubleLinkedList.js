// Node() : data & pointer인 next, prev를 가지고 있는 객체
function Node(data){
    this.data = data;
    this.next = null;
    this.prev = null;
}

// LinkedList() : head, tail, length를 가지고 있는 객체
function DoubleLinkedList() {
   this.head = null;
   this.tail = null;
   this.length = 0; 
}

// size() : 연결 리스트 내 노드 갯수 확인
DoubleLinkedList.prototype.size = function(){
    return this.length;
}

// isEmpty() : 객체 내 노드 존재 여부 파악
DoubleLinkedList.prototype.isEmpty = function(){
    return this.length === 0;
}


/* Test Code */
let dll = new DoubleLinkedList();
let node;
console.log(dll);

node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll);

node = new Node(456);
dll.tail.next = node;
node.prev = dll.tail;
dll.tail = node; //dll.tail의 끝부분을 새로운 node로 시작되도록 설정
dll.length++;
console.log(dll);
