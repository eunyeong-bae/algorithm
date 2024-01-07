//최소힙(minHeap)

//Heap() : 배열 내 요소를 저장하기 위한 생성자
function Heap(){
    this.items = [];
}

// swap() : 배열 내 두 요소 위치를 변경
Heap.prototype.swap = function(index1, index2){
    let tmp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = tmp;
}

// parentIndex() : 부모 노드의 위치 반환
Heap.prototype.parnetIndex = function(index){
    return Math.floor((index - 1) / 2);
}

// leftChildIndex() : 왼쪽 자식 노드의 위치 반환
Heap.prototype.leftChildIndex = function(index){
    return index * 2 + 1;
}

// rightChildIndex() : 오른쪽 자식 노드의 위치 반환
Heap.prototype.rightChildIndex = function(index){
    return index * 2 + 2;
}

// parent() : 부모 노드의 요소 값 반환
Heap.prototype.parent = function(index){
    return this.items[this.parnetIndex(index)];
}

// leftChild() : 왼쪽 자식 노드의 요소 값 반환
Heap.prototype.leftChild = function(index){
    return this.items[this.leftChildIndex(index)];
}

// rightChild() : 오른쪽 자식 노드의 요소 값 반환
Heap.prototype.rightChild = function(index){
    return this.items[this.rightChildIndex(index)];
}

// peek() : 현재 정렬된 최소/최대 요소 값 반환
Heap.prototype.peek = function(){
    return this.items[0];
}

// size() : 현재 배열 내 크기 반환
Heap.prototype.size = function() {
    return this.items.length;
}