const DEFAULT_SIZE = 5;
// CircularQueue() : 초기 속성값 설정을 위한 생성자 함수


// getBuffer() : 객체 내 데이터 셋 반환


// isEmpty() : 데이터 비어 있는지 확인


// isFull() : 데이터 꽉 차 있는지 확인


// enqueue() : 데이터 추가

// dequeue() : 데이터 삭제


// front() : 가장 첫 데이터 반환


// size() : 큐 내 데이터 개수 확인


// clear() : 큐 초기화


let cq = new CircularQueue([1,2,3,4]);
console.log(cq)

cq.enqueue(5)
cq.enqueue(6)
console.log(cq.dequeue())
console.log(cq.dequeue())
console.log(cq)

cq.enqueue(6)
console.log(cq)
console.log(cq.front())
console.log(cq.dataSize())

cq.clear(10)
console.log(cq)