function Queue(){
    this.array = [];
}

Queue.prototype.enqueue = function(element){
    return this.array.push(element);
}

Queue.prototype.dequeue = function() {
    return this.array.shift();
}

Queue.prototype.front = function(){
    return this.array[0];
}

Queue.prototype.max = function() {
    return Math.max(...this.array);
}

function answer(priorities, select){
    let result = -1;

    //1.queue 내 우선순위가 가장 높은 문서 확인

    //2.그 문서가 나올 때까지, 나머지 문서는 dequeue -> enqueue(순서바꿈)

    //3.문서번호 select를 찾을때까지 계속 반복

    let vq = new Queue(); //index
    let pq = new Queue(); //우선순위값

    for(let i=0; i<priorities.length;i++){
        vq.enqueue(i);
        pq.enqueue(priorities[i]);
    }

    let count = 0;
    while(true){
        //출력 부분
        if(pq.front() === pq.max()){
            count++;
            //확인이 필요한 문서
            if(vq.front() === select){
                result = count;
                break;
            } else { //다른 문서 제거
                vq.dequeue();
                pq.dequeue();
            }
        } else {
            //순서 변경 부분
            vq.enqueue(vq.dequeue());
            pq.enqueue(pq.dequeue());
        }
    }


    return result;
}

let input = [
    [[3], 0],
    [[3,4,5,6], 2],
    [[1,1,5,1,1,1], 0],
];

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i + 1} `)
    console.log(answer(input[i][0], input[i][1]));
}