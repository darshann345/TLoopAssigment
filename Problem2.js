function seriesNumber(x){
    let res = [];
    for(let i = 1; i <= x; i++){
        let odd = 2 * i - 1;
        res.push(odd)
    }
    return res
}
let a = 3;
console.log(seriesNumber(a).join(","));
