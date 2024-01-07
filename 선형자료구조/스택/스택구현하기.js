// Stack() : 생성자 함수로 초기 데이터 설정


// getBuffer() : 객체 내 데이터 셋 반환


// isEmpty() : 객체 내 데이터 존재 여부 파악


// push() : 데이터 추가


// pop() : 데이터 삭제


// peek() : 가장 끝 데이터 반환

//size() : 스택 내 데이터 개수 확인


// indexOf() : 매개변수로 넘어온 element 위치 확인, 데이터 위치 값 조회


// includes() : 데이터 존재 여부 확인


let stack = new Stack([1, 2, 3]);

console.log(stack.indexOf(1));
console.log(stack.indexOf(1, 2));
console.log(stack.includes(1));
console.log(stack.includes(1, 2));