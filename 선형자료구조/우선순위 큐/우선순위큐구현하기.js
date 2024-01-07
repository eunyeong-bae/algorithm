// Element() : 데이터와 우선순위를 저장하기 위한 생성자 함수


// PriorityQueue() : Element 관리를 위한 생성자 함수


// getBuffer() : 객체 내 데이터 셋 반환


// isEmpty() : 객체 내 데이터 존재 여부 파악


// enqueue() : 데이터 추가


// dequeue() : 데이터 삭제


// front() : 가장 첫 데이터 반환


// size() : 큐 내 데이터 개수 확인


// clear() : 큐 초기화



let pq = new PriorityQueue();

pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);
pq.enqueue("Tom", 1);
pq.enqueue("John", 3);
console.log(pq);

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);

console.log(pq.front());
console.log(pq.size());
