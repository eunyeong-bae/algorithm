// Node() : data & pointer 갖는 객체
function Node(data){
    this.data = data;
    this.next = null;
}

// LinkedList() : head & length 갖는 객체
function CircularLinkedList() {
    this.head = null;
    this.length = 0;
}

// size() : 연결 리스트 내 노드 갯수
CircularLinkedList.prototype.size = function(){
    return this.length;
}

// isEmpty() : 객체 내 노드 존재 여부 파악
CircularLinkedList.prototype.isEmpty = function(){
    return this.length === 0;
}

// Test code
let cll = new CircularLinkedList();
let node;
console.log(cll);

node = new Node(123);
cll.head = node;
node.next = cll.head;
cll.length++;
console.log(cll)

node = new Node(456);
cll.head = node;
node.next = cll.head;
cll.length++;
console.log(cll)