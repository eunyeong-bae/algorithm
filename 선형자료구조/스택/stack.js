// Stack() : 생성자 함수로 초기 데이터 설정
function Stack(array) {
    this.array = array ? array : [];
}

// getBuffer() : 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function(){
    return this.array.slice();
    //배열 내 모든 값 복사해서 반환하는 역할
}

// isEmpty() : 객체 내 데이터 존재 여부 파악
Stack.prototype.isEmpty = function() {
    return this.array.length === 0;
}

let stack = new Stack([1,2,3]);
console.log(stack);

let data = stack.getBuffer();
console.log(data === stack.array);
console.log(data);

console.log(stack.isEmpty());

console.log(Object.getOwnPropertyDescriptors(Stack.prototype));


