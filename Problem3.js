function seriesNumber(x){
    let group = Math.ceil(x / 2);
    let count = 2 * group - 1;
    let res = [];
    for(let i = 1; i < count; i++){
        let odd = 2 * i - 1;
        res.push(odd)
    }
    return res
}
let a = 5;
console.log(seriesNumber(a).join(","));
