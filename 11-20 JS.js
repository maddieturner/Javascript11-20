
function firstLast6(arr) {
var nums = [arr]
    var str = nums.join("");
    var n = str.startsWith("6") || str.endsWith("6");
       return n
}


function has23(arr){
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 2 || arr[i] == 3 || arr[i + 1] == 2 || arr[i-1] == 3 || arr[i + 1] == 3 || arr[i-1] == 2){
            return true;
        } else if (arr[i] != 2 && arr[i] != 3) {
        return false
        }

    }
}

function fix23(arr) {
    var array = arr
    for (var i = 0; i < arr.length; i++) {
        if (arr[1] == 2 && arr[2] == 3 || arr[2] == 2 && arr[3] == 3){
            var res = array.replace("3", "0");
        }
return arr;
    }
}




function endOther(string1, string2){
    var str1 = string2.toLowerCase();
    var str = string1.toLowerCase();
    var n = str.endsWith(str1) || str1.endsWith(str);
return n
    }






function starOut(string){
    var str = ""
    for (var i = 0; i<string.length; i++){
        if(string[i] != "*" && string[i-1] != "*" && string[i+1] != "*") {
            str = str + string[i]
        }
    }
    return str
}




function getSandwich(string){
    var lenBread = 5 ;
    var first = string.indexOf("bread");
    var last = string.lastIndexOf("bread");

    if (first == last) {
        return "";

    } else {
        var res = string.substring(first+lenBread, last);
        return res;
    }
}



iSum = iSum + arr[i]

function canBalance(arr){
    var iSum = 0;
    var jSum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1;) {
            jSum = jSum + arr[j]
        }
        if (iSum = jsum) {
            return true;
        }
    }
    return false;
}




function countClumps(array) {
    var n = 0;
    for(var i=0; i<array.length;  i++) {
        if(array[i]===array[i+1] ){
            n += 1;
            if (array[i+1]===array[i+2]){
                n-=1;
            }
        }
    }
    return n;
}






function evenlySpaced(a, b, c) {
    var arr= [a,b,c]
    arr.sort(function(a, b){return a - b});
    var firstSpace = b - a
    var secondSpace = c - b + a
    if (firstSpace == secondSpace){
        return true
    }
    if (firstSpace != secondSpace){
        return false
    }
}

