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

// remove() : value 데이터를 찾아 노드 삭제
CircularLinkedList.prototype.remove = function(value){
    let current = this.head, //계속 끝 지점을 찾아가는 값임
        prev = current,
        data; //현재 삭제할 element 의 값 저장하는 용도

    while(current.data != value && current.next != this.head){
        prev = current;
        current = current.next;
    }

    if(current.data != value){
        return null;
    }

    data = current.data; //현재 데이터를 임시 변수에 저장
    //이제부터 current 끝지점을 찾는 용도로 쓰팀
    if(current === this.head){
        //끝쪽에 대한 element를 찾아야 함
        while(current.next != this.head){
            current = current.next;
        }

        this.head = this.head.next;
        current.next = this.head;
    } else {
        prev.next = current.next;
    }

    this.length--;

    return data;
}

// removeAt() : position 위치 노드 삭제
CircularLinkedList.prototype.removeAt = function(position=0){
    if(position < 0 || position >= this.length){
        return null;
    }

    let current = this.head,
        index = 0,
        prev,
        data; //임시 삭제할 element data 값 

    //가장 끝쪽에 있는 element next 신경써야 함
    if(position === 0){
        data = current.data;

        while(current.next != this.head){
            current = current.next;
        }

        this.head = this.head.next;
        current.next = this.head;
    }else {
        while(index++ < position){
            prev = current;
            current = current.next;
        }

        data = current.data;
        prev.next = current.next;
    }

    this.length--;

    return data;
}

// indexOf : value 값을 갖는 노드 위치 반환
CircularLinkedList.prototype.indexOf = function(value){
    let current = this.head,
        index = 0;
    
    do {
        if(current.data === value){
            return index;
        }

        index++;
        current = current.next;
    } while(current != this.head);

    return -1;
}

// remove2 : indexOf + removeAt = remove
CircularLinkedList.prototype.remove2 = function(value){
    let index = this.indexOf(value);
    return this.removeAt(index);
}

// Test code
let cll = new CircularLinkedList();
cll.insert(1)
cll.insert(10)
cll.insert(100)
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();

console.log(cll.indexOf(1000))
console.log(cll.indexOf(1))
console.log(cll.indexOf(100))
console.log(cll.indexOf(100))

console.log(cll.remove2(1000))
console.log(cll.remove2(1))
console.log(cll.remove2(2))
console.log(cll.remove2(100))
console.log(cll.size());