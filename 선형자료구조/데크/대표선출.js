function CircularQueue(size){
    this.array = new Array(size);
    this.size = this.array.length;
    this.length = 0;
    this.head = 0;
    this.tail = 0;
}

CircularQueue.prototype.enqueue = function(element){
    this.length++;
    this.array[this.tail++ % this.size] = element;
}

CircularQueue.prototype.dequeue = function() {
    this.length--;
    return this.array[this.head++ % this.size];
}

function answer(n,m,k){
    let result = [];

    //1. 원탁에 후보 번호 세팅(enqueue)
    let cq = new CircularQueue(n);
    for(let i=1; i<=n ; i++){
        cq.enqueue(i);
    }

    //2. 첫번째 후보 제거 노드 위치로 설정
    // cq.tail = cq.head = m - 1; //index가 0부터 시작하니까 -1해줌
    cq.tail = cq.head = (n+m - 1) % n; //만일 index로 처리한다면 0 - 1 = -1 이니까, 

    //3. k만큼 움직이면서 대표 후보 제거하고, 제거된 번호는 result에 추가
    let count;
    result.push(cq.dequeue());
    while(cq.length !=0){
        count = k -1;
        while(count--){
            cq.enqueue(cq.dequeue());
        }
        result.push(cq.dequeue());
    }

    return result;
}

let input = [
    [8,2,3],
    [10,2,3],
    [20,5,7],
];

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i + 1} `)
    console.log(answer(input[i][0], input[i][1], input[i][2]));
}