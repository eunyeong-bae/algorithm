function Train(number){
    this.number = number;
    this.next = null;
}

function LinkedList(){
    this.head = null;
}

LinkedList.prototype.append = function(node){
    let current = this.head;

    if(this.head === null){
        this.head = node;
    } else {
        while(current.next != null){
            current = current.next;
        }

        current.next = node;
        node.prev = current;
    }
}

function answer(nums){
    let ll = new LinkedList();

    for(let i=0; i<nums.length; i++){
        let train = new Train(nums[i]);

        ll.append(train);
    }

    return ll;
}

let input = [
    [4,7,1,10,6],
    [3,10,6,9,11,3,4],
    [5,8,7,3,4,1,2,7,10,7],
];

LinkedList.prototype.printNode = function(){
    for(let node = this.head; node!=null; node= node.next){
        process.stdout.write(`${node.number} -> `);
    }
    console.log("null")
}

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    answer(input[i]).printNode();
}