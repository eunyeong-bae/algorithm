// Node() : data & pointer 갖고 있는 객체
function Node(data){
    this.data = data;
    this.next = null;
}

// LinkedList() : head & length 갖고 있는 객체
function LinkedList() {
    this.head = null;
    this.length = 0;
}

// size() : 연결 리스트 내 노드 갯수
LinkedList.prototype.size = function(){
    return this.length;
}

// isEmpty() : 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function(){
    return this.length === 0;
}

//printNode() : 노드 출력
LinkedList.prototype.printNode = function() {
    for(let node = this.head; node != null; node = node.next){
        process.stdout.write(`${node.data} ->`)
    }
    console.log("null")
}

// append() : 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function(value){
    let node = new Node(value);
    let current = this.head;

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
LinkedList.prototype.insert = function(value, position = 0){
    if(position < 0 || position > this.length){
        return false;
    }

    let node = new Node(value),
        current = this.head,
        index = 0,
        prev;
    
    if(position === 0){
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
}

// remove() : value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function(value){
    let current = this.head,
        prev;
    
    while(current.data != value && current.next != null){
        prev = current;
        current = current.next;
    }

    if(current.data != value){
        return;
    }

    if(current === this.head){
        this.head = current.next;
    } else {
        prev.next = current.next;
    }

    this.length--;

    return current.data;
}

//removeAt() : position 위치 노드 삭제
LinkedList.prototype.removeAt = function(position = 0){
    if(position<0 || position >= this.length){
        return null;
    }

    let current = this.head,
        index = 0,
        prev;

    if(position === 0){
        this.head = current.next;
    }else{
        while(index++ < position){
            prev = current;
            current = current.next;
        }

        prev.next = current.next;
    }

    this.length--;
    return current.data;
}

// indexOf : value 값을 갖는 노드 위치 반환
LinkedList.prototype.indexOf = function(value){
    let current = this.head,
        index = 0;

    while(current != null){
        if(current.data == value){
            return index;
        }

        index++;
        current = current.next;
    }

    return -1;
}

//remove2 () : indexOf + removeAt = remove
LinkedList.prototype.remove2 = function(value){
    let index = this.indexOf(value);
    return this.removeAt(index);
}

// Test code 1
// let ll = new LinkedList();
// console.log(ll);

// ll.head = new Node(123);
// ll.length++;
// console.log(ll);

// ll.head.next = new Node(456);
// ll.length++;
// console.log(ll);

// Test Code 2
// let list = new LinkedList();

// list.append(1);
// list.append(10);
// list.append(100);

// list.printNode();
// console.log(list.size());

// Test Code 3
// let list = new LinkedList();

// list.insert(1)
// list.insert(10)
// list.insert(100)

// list.insert(2, 1);
// list.insert(3, 3);
// list.printNode()
// console.log(list.size());

// Test Code 4
let list = new LinkedList();

list.insert(1)
list.insert(10)
list.insert(100)
list.insert(2, 1);
list.insert(3, 3);
list.printNode()

// console.log(list.removeAt(1000))
// list.printNode();
// console.log(list.removeAt(4))
// list.printNode();
// console.log(list.removeAt())
// list.printNode();
// console.log(list.removeAt(1))
// list.printNode();
// console.log(list.size())

console.log(list.indexOf(1000));
console.log(list.indexOf(1));
console.log(list.indexOf(100));
console.log(list.indexOf(10));

console.log(list.remove2(1000));
console.log(list.remove2(1));
console.log(list.remove2(2));
console.log(list.remove2(100));

console.log(list.size());