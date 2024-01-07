function Queue(array){
    this.array = array ? array : [];
    this.tail = array ? array.length : 0; //실제로 들어갈 데이터 위치
    this.head = 0; //꺼내질 위치
}

Queue.prototype.enqueue = function(element){
    //this.tail위치에 element 추가하고, this.tail을 한칸 뒤로 증가한다
    return (this.array[this.tail++] = element);
};

Queue.prototype.dequeue = function(){
    if(this.tail === this.head) return undefined;

    let element = this.array[this.head];
    delete this.array[this.head++];
    return element;
};

let queue = new Queue([1,2]);
console.log(queue);

queue.enqueue(3)
queue.enqueue(4)
console.log(queue)

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue)

let queue_1 = new Queue_1();
let queue_2 = new Queue_2();
const count = 100000;

function benchmark(queue, enqueue){
    let start = Date.now();
    for(let i =0; i<count;i++){
        enqueue ? queue.enqueue() : queue.dequeue();
    }
    return Date.now - start;
}

console.log("enqueue queue_1: " + benchmark(queue_1, 1)+"ms");
console.log("enqueue queue_2: " + benchmark(queue_2, 1)+"ms");

console.log("dequeue queue_1: " + benchmark(queue_1, 0)+"ms");
console.log("dequeue queue_2: " + benchmark(queue_2, 0)+"ms");