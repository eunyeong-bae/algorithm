let swap = function(arr, idx_1, idx_2){
    let temp = arr[idx_1];
    arr[idx_1] = arr[idx_2];
    arr[idx_2] = temp;
};

let ascending = function(x,y){
    return x > y;
};

let descending = function(x,y){
    return y > x;
};

let selectionSort = function(arr, compare){
    //1.초기 최솟값 인덱스 설정
    //2.for문 돌면서 최솟값 찾고
    //3.swap해주기
    for(let i=0; i<arr.length;i++){
        let k = i;
        for(let j=i+1; j<arr.length;j++){
            if(compare(arr[k], arr[j])){
                k = j;
            }
        }
        
        swap(arr, i, k);
    } 
}


/* test code */
let init_array = [6,5,1,3,2,4];

let array;

let sorting = [selectionSort];
let order = [ascending, descending];
for(let i=0; i<sorting.length; i++){
    for(let j=0; j<order.length;j++){
        console.log(sorting[i].name, order[i].name);

        array = [...init_array];
        sorting[i](array, order[j]);
        console.log(array);
    }
}