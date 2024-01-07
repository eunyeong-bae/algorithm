let swap = function(arr, idx_1, idx_2){
    let temp = arr[idx_1];
    arr[idx_1] = arr[idx_2];
    arr[idx_2] = temp;
};

let ascending = function(x,y) {
    return x > y;
};

let descending = function(x,y){
    return y > x;
};

let bubbleSort = function(arr, compare){
    for(let i=0; i<arr.length - 1; i++){
        for(let j=0; j<arr.length - i -1; j++){
            if(compare(arr[j], arr[j+1])){
                swap(arr, j, j+1);
            }
        }
    }
};

let init_array = [6,5,1,3,2,4];

let array;

let sorting = [bubbleSort];
let order = [ascending, descending];
for(let i=0; i<sorting.length; i++){
    for(let j=0; j<order.length;j++){
        console.log(sorting[i].name, order[i].name);

        array = [...init_array];
        sorting[i](array, order[j]);
        console.log(array);
    }
}