// Deque() : 초기 속성값 설정을 위한 생성자 함수


// getBuffer() : 객체 내 데이터 셋 반환

// isEmpty() : 데이터 비어 있는지 확인


// pushFront() : 앞쪽 데이터 추가


// popFront() : 앞쪽 데이터 삭제


// pushBack() : 뒤쪽 데이터 추가


// popBack() : 뒤쪽 데이터 삭제


// front() : 가장 첫 데이터 반환


// back() : 가장 끝 데이터 반환


// size() : 큐 내 데이터 개수 확인


// clear() : 큐 초기화


let dq = new Deque([1,2,3]);
console.log(dq);

dq.pushFront(5);
dq.pushBack(10);
console.log(dq)

console.log(dq.popFront())
console.log(dq.popBack())

console.log(dq.front())
console.log(dq.back())
console.log(dq.size())

dq.clear();
console.log(dq)