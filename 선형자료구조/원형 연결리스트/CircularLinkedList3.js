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

// printNode() : 노드 출력
CircularLinkedList.prototype.printNode = function() {
    process.stdout.write("head -> ");

    if(this.length != 0 ){
        process.stdout.write(`${this.head.data} -> `);
        for(let node = this.head.next; node != this.head; node = node.next){
            process.stdout.write(`${node.data} -> `)
        }
    }
    console.log("null")
}

// append() : 연결 리스트 가장 끝에 노드 추가
CircularLinkedList.prototype.append = function(value){
    let node = new Node(value),
        current = this.head;

    if(this.head === null){
        this.head = node;
    } else {
        while(current.next != this.head){
            current = current.next;
        }
        current.next = node;
    }

    node.next = this.head;

    this.length++;
}

// insert() : position 위치에 노드 추가
CircularLinkedList.prototype.insert = function(value, position=0){
    if(position < 0 || position > this.length){
        return false;
    }

    let node = new Node(value),
        current = this.head,   
        index =0,
        prev;

    if(position == 0){
        node.next = current;

        if(this.isEmpty()){
            current = node;
        }else {
            while(current.next != this.head){
                current = current.next;
            }
        }

        this.head = node;
        current.next = this.head;

    } else {
        while(index++ < position){
            prev = current;
            current = current.next;
        }

        node.next = current;
        prev.next = node;

        if(node.next === null){
            node.next = this.head;
        }
    }

    this.length++;

    return true;

}


// Test code
let cll = new CircularLinkedList();
cll.insert(1)
cll.insert(10)
cll.insert(100)
cll.printNode();

cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();

console.log(cll.size());