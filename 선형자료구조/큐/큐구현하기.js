// Queue() : 생성자 함수로 초기 데이터 설정


// getBuffer() : 객체 내 데이터 셋 반환


// isEmpty() : 객체 내 데이터 존재 여부 파악


// enqueue() : 데이터추가


// dequeue() : 데이터 삭제


// front() : 가장 첫 데이터 반환


// size() : 큐 내 데이터 개수 확인


// clear() : 큐 초기화



let queue = new Queue([1,2,3, 4]);

queue.dequeue();
console.log(queue.front());
console.log(queue)

console.log(queue.size());
queue.clear();
console.log(queue);
console.log(queue.size());