let swap = function(arr, idx_1, idx_2){
    let tmp = arr[idx_1];
    arr[idx_1] = arr[idx_2];
    arr[idx_2] = tmp;
};

let ascending = function(x,y){
    return x > y;
};
let descending = function(x,y){
    return x < y;
};

let bubbleSort = function(arr, compare){
    for(let i=0; i<arr.length -1; i++){
        for(let j=0; j<arr.length -i-1; j++){
            if(compare(arr[j], arr[j+1])){
                swap(arr, j, j+1);
            }
        }
    }
};

let selectionSort = function(arr, compare){
    //1.초기 최솟값 인덱스 설정
    //2.for문 돌면서 최솟값 찾고
    //3.swap해주기
    for(let i=0; i<arr.length; i++){
        let k = i;
        for(let j=i+1;j<arr.length;j++){
            if(compare(arr[k], arr[j])) k = j;
        }
        swap(arr, i, k);
    }
};

let InsertionSort = function(arr, compare){
    //비교해서 비교할 값 작으면 넣어주기
    //요소 처음은 픽스됐다 가정
    for(let i=1; i<arr.length;i++){
        //비교할 값 먼저 저장
        let tmp = arr[i];
        let j;
        for(j=i-1; j>= 0; j--){
            //픽스된 값을 shift()해주고
            arr[j+1] = arr[j];
            if(compare(tmp, arr[j])){
                break;
            }
        }
        arr[j+1] = tmp;
    }
};

let mergeSort = function(arr, compare){
    //재귀 멈출 조건 작성
    if(arr.length === 1) return arr;

    //분할
    let m = (arr.length/2).toFixed(0);
    let left = mergeSort(arr.slice(0, m), compare);
    let right = mergeSort(arr.slice(m), compare);

    //병합
    let i = 0, j=0, k=0;
    while(i<left.length && j<right.length){
        arr[k++] = compare(left[i], right[j]) 
                ? right[j++] : left[i++];
    }

    while( i< left.length) arr[k++] = left[i++];
    while( j< right.length) arr[k++] = right[j++];

    return arr;
};

let init_array = [6,5,1,3,2,4];
let array;

let sorting =[bubbleSort, selectionSort, InsertionSort, mergeSort];
let order=[ascending, descending];
for(let i=0; i<sorting.length;i++){
    for(let j=0; j<order.length;j++){
        console.log(sorting[i].name, order[j].name);

        array = [...init_array];
        sorting[i](array, order[j]);
        console.log(array);
    }
}