function Queue(){
    this.array = [];
}

Queue.prototype.enqueue = function(element){
    return this.array.push(element);
}

Queue.prototype.dequeue = function() {
    return this.array.shift();
}

function answer(n){
    let result = [];

    //1.첫번째 카드는 분배

    //2. 두번째 카드는 맨 아래로 다시 넣기

    //3. 카드가 다 없어질 때까지 1,2번 반복한다

    let queue = new Queue();

    //1.n만큼 숫자 넣기
    for(let i=1; i<=n ;i++){
        queue.enqueue(i);
    }

    while(queue.array.length != 0){
        result.push(queue.dequeue());

        if(queue.array.length != 0){
            queue.enqueue(queue.dequeue());
        }
    }

    return result;
}

let input = [
    4,
    7,
    10
];

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i + 1} `)
    console.log(answer(input[i]));
}