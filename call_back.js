const side=[2,3,4];
const area=function(side){
    return side*side;
}
const perimeter=function(side){
    return 4*side;
}
const calculate=function(side,logic){
    let output=[];
    for (i=0; i< side.length;i++){
        output.push(logic(side[i]))
    }
    return output;
}

console.log(calculate(side, area));
console.log(calculate(side, perimeter));