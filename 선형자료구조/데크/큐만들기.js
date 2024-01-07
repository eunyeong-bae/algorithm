function Queue() {
    this.array = [];
}

Queue.prototype.enqueue = function(element){
    return this.array.push(element);
}

Queue.prototype.dequeue = function(){
    let ret = this.array.shift();
     return ret === undefined ? -1 : ret;
}

Queue.prototype.size = function() {
    return this.array.length;
}

Queue.prototype.empty = function() {
    return this.array.length === 0 ? 1 : 0;
}

Queue.prototype.front = function() {
    return this.array.length === 0 ? -1 : this.array[0];
}

Queue.prototype.back = function() {
    return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
}


function answer(cmds){
    //1.cmds => 문자열 파싱 -> 명령어에 따라 함수를 호출

    //2. 호출 후 반환값을 result
    let result = [];
    let queue = new Queue();

    for(let i =0; i<cmds.length;i++){
        let cmd = cmds[i].split(" ")[0];

        switch(cmd){
            case "enqueue":
                queue.enqueue(Number(cmds[i].split(' ')[1]));
                break;
            case "dequeue":
                result.push(queue.dequeue());
                break;
            case "size":
                result.push(queue.size());
                break;
            case "empty":
                result.push(queue.empty());
                break;
            case "front":
                result.push(queue.front());
                break;
            case "back":
                result.push(queue.back());
                break;
        }
    }

    return result;
}


let input = [
    ["enqueue 1", "enqueue 2", "dequeue", "dequeue", "dequeue",],
    ["enqueue 3", "enqueue 4", "enqueue 5", "enqueue 6", "front", "back","dequeue","size","empty"],
    ["enqueue 7", "enqueue 8", "front", "back","size","empty","dequeue", "dequeue", "dequeue", "size", "empty", "dequeue","enqueue 9", "empty", "front"],
];

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i + 1} `)
    console.log(answer(input[i]));
}