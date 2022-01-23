function highorder(x, callback1) {
    var result = [];
    for (let i = 0; i < x.length; i++) {
        var y = callback1(x[i]);
        result.push(y);
    }

    return result;
}



function mulBy4(n) {
    return n * 4;
}

function add9(n) {
    return n + 9;
}


var x = [1, 2, 3, 4, 5];
var res = highorder(x, mulBy4);
var res2 = highorder([1, 2], add9);
document.write(`Multiply by four the given array ${res}`);
document.write("<br/>");

document.write(`Add the given array by passing the values in the fucntion ${res2}`);
document.write("<br/>");
document.write("High Order Function");