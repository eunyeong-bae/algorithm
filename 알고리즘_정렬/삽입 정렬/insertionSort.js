let swap = function(arr, idx_1, idx_2){
    let temp = arr[idx_1];
    arr[idx_1] = arr[idx_2];
    arr[idx_2] = arr[idx_1];
};

//오름차순
let ascending = function(x,y){
    return x > y;
};

//내림차순
let descending = function(x,y){
    return x < y;
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
}


/* test code */
let init_array = [6,5,1,3,2,4];

let array;

let sorting = [InsertionSort];
let order = [ascending, descending];
for(let i=0; i<sorting.length; i++){
    for(let j=0; j<order.length;j++){
        console.log(sorting[i].name, order[i].name);

        array = [...init_array];
        sorting[i](array, order[j]);
        console.log(array);
    }
}