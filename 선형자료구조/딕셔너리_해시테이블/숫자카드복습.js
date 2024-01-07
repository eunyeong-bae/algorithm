const HASH_SIZE = 21;

function HashTable(){
    this.table = new Array(HASH_SIZE)
}

HashTable.prototype.hashCode = function(key){
    return (key + 10) % HASH_SIZE;
}

HashTable.prototype.put = function(key){
    let index = this.hashCode(key);

    if(this.table[index] === undefined){
        this.table[index] = 0; 
    }

    this.table[index]++;
}

HashTable.prototype.get = function(key){
    let index = this.hashCode(key);

    return this.table[index] === undefined ? 0 : this.table[index];
}

function answer(card, select){
    let result =[];

    //1.card 내 있는 숫자 카드가 몇개 인지를 카운트
    let ht = new HashTable();
    for(let i=0; i<card.length;i++){
        ht.put(card[i]);
    }

    //2.select 내 있는 숫자 카드가 1번의 카운트 한 배열에서 몇개있는지 확인
    for(let i=0; i<select.length;i++){
        result.push(ht.get(select[i]));
    }

    // let obj = {};
    // for(let i=0; i<card.length;i++){
    //     obj[card[i]] ? obj[card[i]] += 1 : obj[card[i]] = 1;
    // }

    // for(let key of select){
    //     if(obj[key]){
    //         result.push(obj[key])
    //     }else {
    //         result.push(0)
    //     } 

    // }

    return result;
}


let input = [
    [
        [-6,-1,6,1,1],
        [-2,1,3],
    ],
    [
        [7,4,3,10,10,10,-10,-10,7,3],
        [10,9,-5,4,6,-10],
    ],
    [
        [5,-3,-7,10,-3,4,8,4,-3,3,8,-2,-9,-8,-1],
        [4,5,1,10,-2,-3,3,-8],
    ],
]

for(let i=0; i<input.length;i++){
    process.stdout.write(`#${i+1} `);
    console.log(answer(input[i][0], input[i][1]));
}