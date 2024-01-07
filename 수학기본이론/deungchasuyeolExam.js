let result;

//f(1) =3, d= 2, f(5) ?
//f(n) = f(n-1)+d;

function recursive(s, t, number){
    //stop condition
    if(number == 1){
        return s;
    }

    return recursive(s, t, number - 1) + t;
}

result = recursive(3,2,5);
console.log(result);
