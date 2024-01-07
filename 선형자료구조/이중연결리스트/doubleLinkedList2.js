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

// 2.printNode() : 노드 정방향 출력
DoubleLinkedList.prototype.printNode = function() {
    process.stdout.write("head -> ");
    for(let node= this.head; node!=null; node =node.next){
        process.stdout.write(`${node.data} -> `);
    }
    console.log("null");
}

// 2.printNodeInverse() : 노드 역방향 출력
DoubleLinkedList.prototype.printNodeInverse = function() {
    let temp = [];

    process.stdout.write("null <- ");
    for(let node= this.tail; node!=null; node = node.prev){
        temp.push(node.data);
    }

    for(let i=temp.length - 1; i >=0 ; i--){
        process.stdout.write(`${temp[i]} <- `);
    }

    console.log("tail");
}

// append() : 연결 리스트 가장 끝에 노드 추가
DoubleLinkedList.prototype.append = function(value){
    let node = new Node(value);

    if(this.head === null){
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    this.length++;
}


/* Test Code */
let dll = new DoubleLinkedList();

dll.append(1)
dll.append(10)
dll.append(100)

dll.printNode();
dll.printNodeInverse();