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

/* test code */
let init_array = [6,5,1,3,2,4];

let array;

let sorting = [ mergeSort];
let order = [ascending, descending];
for(let i=0; i<sorting.length; i++){
    for(let j=0; j<order.length;j++){
        console.log(sorting[i].name, order[i].name);

        array = [...init_array];
        sorting[i](array, order[j]);
        console.log(array);
    }
}