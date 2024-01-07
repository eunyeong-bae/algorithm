function Node(data){
    this.data = data;
    this.next =null;
}

function LinkedList() {
    this.head = null;
}

function answer(n, m, k){
    let result = [];

    //1.Circular Linked list 제작
    let ll = new LinkedList();
    let current, prev;

    for(let i =1; i<=n; i++){
        current = new Node(i);

        if(i==1){
            ll.head = current;
        } else {
            prev.next = current;
        }

        prev = current;
    }
    current.next = ll.head;
    
    //2.Start node 위치 설정
    current = ll.head;
    while(--m){
        prev = current;
        current = current.next;
    }

    //3.후보자들 중 k만큼 움직이면서 제거 -> 단, 혼자 남을 때까지
    let count;
    while(current.next != current){
        result.push(current.data);
        prev.next = current.next;

        count=k;
        while(count--){
            prev = current;
            current = current.next;
        }
    }

    //4.혼자 남은 후보 번호들 result 추가
    result.push(current.data);

    return result;
}

let input = [
    [8,2,3],
    [10,2,3],
    [20,5,7],
]

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i][0],input[i][1],input[i][2]))
}