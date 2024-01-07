function File(number){
    this.number = number;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

function answer(ll){

    let current = ll.head, //현재 가리키는 객체
        prev = null, //내 이전에 있던 객체
        next; //앞에 가르키고 있었던

    //1.역 방향 정렬
    while(current != null){
        //다른 객체에 대한 값을 가르킬 수 없으니, current next 값을 next에 저장
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    //2.head 업데이트
    //current null 이라서 반복문 끝난 뒤이니, 그 이전 값이 마지막 값이므로, 설정
    ll.head = prev;

    return ll;
}

let input = [
    [7,3,1],
    [4,6,9,1,3],
    [3,4,1,2,7,9,6],
];

LinkedList.prototype.printNode = function(){
    for(let node = this.head; node!=null; node = node.next){
        process.stdout.write(`${node.number} -> `);
    }

    console.log('null');
}

LinkedList.prototype.makeFiles = function(files){
    let current = this.head;
    let node;
    for(let i=0; i<files.length;i++){
        node = new File(files[i]);
        node.next = current;
        this.head = node;

        current = node;
    }
};

for(let i =0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);

    let ll = new LinkedList();
    ll.makeFiles(input[i]);
    answer(ll).printNode();
    // ll.printNode();
}