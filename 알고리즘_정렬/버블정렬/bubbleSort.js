let swap = function(arr, idx_1, idx_2){
    let temp = arr[idx_1];
    arr[idx_1] = arr[idx_2];
    arr[idx_2] = temp;
};

let bubbleSort_1 = function(arr){
    //총 실행 횟수
    for(let i=0;i<arr.length- 1;i++){
        //인접한 두 항 
        for(let j=0; j<arr.length-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
};

let bubbleSort_2 = function(arr){
    //총 실행 횟수
    for(let i=0;i<arr.length - 1;i++){
        //인접한 두 항 
        for(let j=0; j<arr.length - i - 1; j++){ //이미 정렬된 항은 제외하고 보겠다는 뜻
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
};

//최적화시킴, 만일 12365 면 한번 돌고 정렬이 멈춰야 하는데, 이를 위해 변수를 두고 조건넣음
let bubbleSort_3 = function(arr){
    //총 실행 횟수
    let swapped;
    for(let i=0;i<arr.length - 1;i++){
        swapped = false;

        //인접한 두 항 
        for(let j=0; j<arr.length - i - 1; j++){ //이미 정렬된 항은 제외하고 보겠다는 뜻
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                swapped = true;
            }
        }

        if(!swapped) break;
    }
};

function benchmark(arr, callback){
    let start = Date.now();

    callback(arr);

    return Date.now() - start;
}

let init_array = [];
let max = 30000;
for(let i=0; i<max;i++){
    init_array.push(Math.round(Math.random() * max));
}

// let init_array = [6,5,1,3,2,4];
// bubbleSort_1(array);
// console.log(array);

// let array2 = [...init_array];
// bubbleSort_2(array2);
// console.log(array2);

let array = [...init_array];
console.log("bubbleSort_1 : ", benchmark(array, bubbleSort_1) + 'ms');
console.log("bubbleSort_2 : ", benchmark(array, bubbleSort_2) + 'ms');
console.log("bubbleSort_3 : ", benchmark(array, bubbleSort_3) + 'ms');